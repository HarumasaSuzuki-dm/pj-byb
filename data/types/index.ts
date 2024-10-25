// data/types/index.ts

export interface AccountDetail {
  label: string;
  value: string;
}

export interface AccountType {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  details: AccountDetail[];
  features: string[]; // 既存のプロパティを保持
}

// 既存のインターフェースをそのまま保持
export interface BonusType {
  name: string;
  amount: string;
  description: string;
}

export interface DepositMethod {
  name: string;
  description: string;
  minAmount: string;
  maxAmount: string;
}