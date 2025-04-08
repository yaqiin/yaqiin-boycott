
import { Product } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CountryFlag from "./CountryFlag";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, isRTL } = useLanguage();

  return (
    <Card className="card-hover w-full bg-white overflow-hidden">
      <CardHeader className="bg-yaqiin-50 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <CountryFlag 
            countryCode={product.countryCode} 
            countryName={t(product.countryOfOrigin.toLowerCase())} 
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h4 className="font-medium mb-2 text-yaqiin-700">{t('alternatives')}:</h4>
        {product.alternatives.length > 0 ? (
          <ul className={`space-y-2 ${isRTL ? 'pr-4' : 'pl-4'}`}>
            {product.alternatives.map((alt) => (
              <li key={alt.id} className="flex justify-between items-center">
                <span className="font-medium">{alt.name}</span>
                <CountryFlag countryCode={alt.countryCode} countryName={alt.countryOfOrigin} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">{t('noAlternatives')}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
