import Image from "next/image";
import "../../styles/global.css";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
      rate: number;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="product-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <div className="price-rating">
          <span className="product-price">${product.price}</span>
          <div className="product-rating">⭐ {product.rating.rate}</div>
        </div>
      </div>
    </article>
  );
}
