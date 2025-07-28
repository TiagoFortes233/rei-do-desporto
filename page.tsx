import ProductDetail from './ProductDetail';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return Array.from({ length: 18 }, (_, i) => ({ id: String(i + 1) }));
}

export default function ProductPage({ params }: PageProps) {
  return <ProductDetail productId={params.id} />;
}
