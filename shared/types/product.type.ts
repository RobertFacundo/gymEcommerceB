export interface TranslatedText {
  en: string;
  es: string;
}

export type CategorySlug =
  | "free-weights"
  | "machines"
  | "accessories"
  | "supplements";

export interface Product {
  id: string;
  category: CategorySlug;

  name: TranslatedText;
  description: TranslatedText;

  price: number;
  image: string;

  stock: number;

  brand?: string;
  featured?: boolean;
}
