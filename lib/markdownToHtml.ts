// 必要なライブラリをインポートします
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkStringify from 'remark-stringify'
import remarkGfm from 'remark-gfm'
import rehypeFormat from 'rehype-format'
import { Node, Parent } from 'unist'
import { Html } from 'mdast'
import { visit } from 'unist-util-visit'

// プロセッサーを格納する変数を宣言します
let processor: any
let processorWithoutToc: any

// 目次エントリーの型定義
interface TocEntry {
  depth: number;  // 見出しの深さ
  text: string;   // 見出しのテキスト
  id: string;     // 見出しのID
}

// テキストをそのままIDとして使用する関数
function createId(text: string): string {
  return text.trim();
}

// 目次を生成し、見出しにIDを付与するremark プラグイン
function remarkTocAndSlug() {
  return (tree: Node) => {
    const toc: TocEntry[] = []
    visit(tree, 'heading', (node: any) => {
      if (node.depth <= 2) {
        const text = node.children.map((child: any) => child.value).join('')
        const id = createId(text)
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        node.data.hProperties.id = id
        toc.push({ depth: node.depth, text, id })

        // H2見出しにバックトップリンクを追加
        if (node.depth === 2) {
          node.children = [
            {
              type: 'html',
              value: `<span>${text}</span>`
            },
            {
              type: 'html',
              value: `<a href="#md-toc" class="md-back-to-top">
                <span>本文の目次に戻る</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15.9961" height="15.9961">
                  <path d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z"></path>
                </svg>
              </a>`
            }
          ];
        }
      }
    })
    const tocHtml = generateTocHtml(toc)
    if ('children' in tree && Array.isArray((tree as Parent).children)) {
      (tree as Parent).children.unshift({
        type: 'html',
        value: tocHtml
      } as Html)
    }
  }
}

// 目次のHTMLを生成する関数
function generateTocHtml(toc: TocEntry[]): string {
  let html = '<nav id="md-toc" class="toc"><div>目次</div><div class="toc-content">';
  let currentDepth = 1;

  toc.forEach(entry => {
    if (entry.depth > currentDepth) {
      html += '<ul>'.repeat(entry.depth - currentDepth);
      currentDepth = entry.depth;
    } else if (entry.depth < currentDepth) {
      html += '</ul>'.repeat(currentDepth - entry.depth);
      currentDepth = entry.depth;
    }

    html += `<li><a href="#${entry.id}">${entry.text}</a></li>`;
  });

  html += '</ul>'.repeat(currentDepth - 1);
  html += '</div><button class="toc-toggle">全部見る</button></nav>';
  return html;
}

// ショートコードを変換するremark プラグイン
function remarkShortcodes() {
  return (tree: Node) => {
    visit(tree, 'text', (node: any) => {
      const regex = /\[emp\](.*?)\[\/emp\]/g;
      if (regex.test(node.value)) {
        node.type = 'html';
        node.value = node.value.replace(regex, '<span class="emphasis">$1</span>');
      }
    });
  };
}

// Markdown を HTML に変換する関数（目次あり）
export async function markdownToHtml(markdown: string): Promise<string> {
  if (!processor) {
    const rehypePrismPlus = (await import('rehype-prism-plus')).default
    processor = unified()
      .use(remarkParse)
      .use(remarkShortcodes)
      .use(remarkTocAndSlug)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypePrismPlus)
      .use(rehypeFormat)
      .use(rehypeStringify, { allowDangerousHtml: true })
  }

  const result = await processor.process(markdown)
  return result.toString()
}

// Markdown を HTML に変換する関数（目次なし）
export async function markdownToHtmlWithoutToc(markdown: string): Promise<string> {
  if (!processorWithoutToc) {
    const rehypePrismPlus = (await import('rehype-prism-plus')).default
    processorWithoutToc = unified()
      .use(remarkParse)
      .use(remarkShortcodes)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypePrismPlus)
      .use(rehypeFormat)
      .use(rehypeStringify, { allowDangerousHtml: true })
  }

  const result = await processorWithoutToc.process(markdown)
  return result.toString()
}

// Card用のMarkdown変換関数（目次なし）
export async function markdownToHtmlForCard(markdown: string): Promise<string> {
  const cardProcessor = unified()
    .use(remarkParse)
    .use(remarkShortcodes)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true })

  const result = await cardProcessor.process(markdown)
  return result.toString()
}

// SEO構造化データ用のMarkdown変換関数
export async function markdownToPlainTextForSeo(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(() => (tree: Node) => {
      let text = '';
      visit(tree, 'text', (node: { value: string }) => {
        text += node.value + ' ';
      });
      if ('children' in tree) {
        (tree as { children: Array<{ type: string; value: string }> }).children = [{
          type: 'text',
          value: text.trim().replace(/\s+/g, ' ')
        }];
      }
    })
    .use(remarkStringify)
    .process(markdown);

  return String(file).trim().replace(/\n/g, '');
}