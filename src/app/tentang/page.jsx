import Tentang from '@/views/Tentang.jsx';
import { pageMetadata, JsonLd } from '@/lib/seo.jsx';

export const metadata = pageMetadata({
  title: 'Tentang Growceria — Supplier Sayuran Restoran Jakarta',
  description: 'Growceria — supplier sayuran restoran Jakarta yang berpihak pada UMKM kuliner. Rantai pasok adil dari petani langsung ke dapur Anda.',
  path: '/tentang',
});

export default function Page() {
  return (
    <>
      <JsonLd />
      <Tentang />
    </>
  );
}
