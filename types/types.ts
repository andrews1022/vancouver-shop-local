import type { ChangeEvent } from "react";

export type BusinessCategory =
  | "Accessories"
  | "Art"
  | "Bath & Cosmetics"
  | "Books"
  | "Candles"
  | "Craft"
  | "Fashion"
  | "Film Equipment"
  | "Food & Drinks"
  | "Games & Hobbies"
  | "Holidays"
  | "Home & Kitchen"
  | "Jewelry"
  | "Literary"
  | "Marketplaces"
  | "Pets"
  | "Photography"
  | "Things to Do"
  | "Vacation"
  | "Wellness";

export type Business = {
  category: BusinessCategory;
  description: string;
  link: string;
  location?: string;
  name: string;
};

export type TagMode = "category" | "directions" | "link";

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
