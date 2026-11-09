import Blog from '@/views/Blog.jsx';
import { pageMetadata, JsonLd } from '@/lib/seo.jsx';

export const metadata = pageMetadata({
  title: 'Blog Growceria — Tips Supplier Sayuran & Operasional Dapur',
  description: 'Artikel & panduan dari Growceria, supplier bahan makanan segar B2B Jakarta — tips memilih supplier, cek kualitas sayuran, harga grosir.',
  path: '/blog',
});

export default function Page() {
  return (
    <>
      <JsonLd />
      <Blog />
    </>
  );
}
