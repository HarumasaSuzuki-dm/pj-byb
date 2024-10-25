import contentData from './content.json';
import { markdownToHtml } from '../lib/markdownToHtml';

export const PageTypes = {
  ROOT: 'root',
  POLICIES: 'policies',
  METHODOLOGIES: 'methodologies',
  ARTIClE_LIST: 'articleList',
  EXCHANGES_RANKING: 'exchangesRanking',
  EXCHANGES_COMPARE: 'exchangesCompare',
  CURRENCIES_EXCHANGE: 'currenciesExchange',
  FOREX_BROKER_RANKING: 'forexBrokersRanking',
  SINGLE_ARTICLE: 'singleArticle'
} as const;



export type PageType = typeof PageTypes[keyof typeof PageTypes];

export interface ContentItem {
  id: string;
  category: string;
  subCategory?: string;
  parentSlug?: string;
  childSlug?: string;
  slug: string;
  path: string;
  url: string;
  eyecatchUrl: string | null;
  pageType: string;
  keyword?: string;
  breadcrumbName: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  markdown: string;
  status: 'draft' | 'published';
  publishedDate: string;
  updatedDate: string;
  canonicalUrl?: string;
  author: string | null;
}
const contentDataArray: any[] = Array.isArray(contentData) ? contentData : []; // 配列であることを確認
// ... existing code ...
export const contentStructure: ContentItem[] = contentDataArray.map(item => ({
  ...item,
  id: String(item.id),
  publishedDate: (item as any).publishedDate || (item as any).publisedDate || '',
  updatedDate: item.updatedDate || '',
  status: (item.status === 'published' || item.status === 'draft') ? item.status : 'draft',
  author: item.author || null,
  eyecatchUrl: item.eyecatchUrl || null,
}));

export function getContentItemByPath(path: string): ContentItem | undefined {
  // パスが '/advisor' で始まっていない場合は先頭に追加
  const normalizedPath = path.startsWith('/advisor') ? path : `/advisor${path}`;
  
  // '/advisor/advisor'で始まるパスの場合はundefinedを返す
  if (normalizedPath.startsWith('/advisor/advisor')) {
    return undefined;
  }
  
  return contentStructure.find(item => item.path === normalizedPath);
}

export async function getContentItemWithHtml(path: string): Promise<(ContentItem & { htmlContent: string }) | undefined> {
  const item = getContentItemByPath(path);
  if (!item) return undefined;

  const htmlContent = await markdownToHtml(item.markdown);
  return Promise.resolve({ ...item, htmlContent });
}

export function getContentItemsByPageType(pageType: PageType): ContentItem[] {
  return contentStructure.filter(item => item.pageType === pageType);
}

export function getPageTypeByPath(path: string): PageType | undefined {
  const item = getContentItemByPath(path);
  return item?.pageType as PageType | undefined;
}

export function getBreadcrumbItems(currentPath: string): ContentItem[] {
  const breadcrumbs: ContentItem[] = [];
  const pathParts = currentPath.split('/').filter(Boolean);

  const rootItem = getContentItemByPath('/');
  if (rootItem) {
    breadcrumbs.push(rootItem);
  }

  let currentPathBuilder = '';
  for (const part of pathParts) {
    currentPathBuilder += `/${part}`;
    const item = getContentItemByPath(currentPathBuilder);
    if (item) {
      breadcrumbs.push(item);
    }
  }

  return breadcrumbs;
}

export function getPublishedContentItems(): ContentItem[] {
  return contentStructure.filter(item => item.status === 'published');
}

export function getDraftContentItems(): ContentItem[] {
  return contentStructure.filter(item => item.status === 'draft');
}

export function updateContentStatus(id: string, newStatus: 'draft' | 'published'): void {
  const item = contentStructure.find(item => item.id === id);
  if (item) {
    item.status = newStatus;
    item.updatedDate = new Date().toISOString();
    if (newStatus === 'published') {
      item.publishedDate = new Date().toISOString();
    }
  }
}

export function getCanonicalUrl(path: string): string | undefined {
  const item = getContentItemByPath(path);
  return item?.canonicalUrl || item?.url;
}

export function getContentItemsByAuthor(authorId: string): ContentItem[] {
  return contentStructure.filter(item => item.author === authorId);
}