export const getAssetPath = (path: string) => {
  const basePath = import.meta.env.DEV ? '' : '/my-portfolio';
  return `${basePath}${path}`;
}; 