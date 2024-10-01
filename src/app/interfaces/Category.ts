interface SubCategory {
  name: string;
  checked?: boolean;
  rating?: number;
  feedback?: string;
}

export interface Category {
  name: string;
  checkAll: boolean;
  subCategories: SubCategory[];
}
