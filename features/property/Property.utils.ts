export const standardize = (text: any) =>
  text.toLowerCase().replace(/\s+/g, "_");
