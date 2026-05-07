export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://inha-umc.vercel.app/sitemap.xml',
  };
}
