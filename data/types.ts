export type ContentStatus = "placeholder" | "draft" | "verified";

export type Specification = {
  label: string;
  value: string;
  status: ContentStatus;
};

export type Download = {
  title: string;
  type: string;
  fileSize: string;
  description: string;
  url: string;
  status: ContentStatus;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  category: string;
  applications: string[];
  features: string[];
  specifications: Specification[];
  downloads: Pick<Download, "title" | "url" | "status">[];
  status: ContentStatus;
};

export type ProductCategory = {
  slug: string;
  name: string;
  image: string;
  description: string;
  href: string;
  status: ContentStatus;
};

export type Application = {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  customerProblem: string;
  testingChallenge: string;
  solution: string;
  recommendedProducts: string[];
  status: ContentStatus;
};

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  description: string;
  href: string;
  status: ContentStatus;
};
