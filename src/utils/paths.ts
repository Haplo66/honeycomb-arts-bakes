const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const sitePath = (path = ''): string => {
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${basePath}/${normalizedPath}` : `${basePath}/`;
};

export const collectionPath = (category: string, slug: string): string =>
  sitePath(`${category}/${slug}`);

export const productPath = (
  category: string,
  collectionSlug: string,
  productSlug: string,
): string => sitePath(`${category}/${collectionSlug}/${productSlug}`);
