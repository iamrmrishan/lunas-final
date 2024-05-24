import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//sulgify url based on post tile and id
export const slugify = (title: string, id: number): string => {
  let slug = title.toLowerCase()  
      .replace(/[^\w\s-]/g, '')  // Remove all non-word characters (everything except numbers, letters, spaces and hyphens).
      .replace(/\s+/g, '-')  // Replace spaces with hyphens.
      .replace(/-+/g, '-');  // Replace multiple hyphens with a single hyphen.

  return `${slug}-${id}`;  // Append the id to the end of the slug.
}

//deslugify the url and get the post id
export const deSlugify = (slug: string): number => {
  let parts = slug.split('-');  // Split the slug by hyphens.
  let id = Number(parts[parts.length - 1]);  // The id is the last element.
  return id;
}