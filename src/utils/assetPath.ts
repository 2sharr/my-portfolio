export const getAssetPath = (path: string) => {
  // Remove any leading slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use relative path from public folder
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use full GitHub Pages URL
  return `https://2sharr.github.io/my-portfolio/${cleanPath}`;
}; 