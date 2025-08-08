import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  sizes: {
    size: string;
    price: string;
  }[];
  icon: React.ReactNode;
  image?: string;
}

export function ProductCard({ name, description, sizes, icon, image }: ProductCardProps) {
  return (
    <Card className="h-full bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 transform hover:scale-105 border-0">
      <CardHeader className="text-center pb-4">
        {image ? (
          <div className="mx-auto mb-4 w-24 h-24 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="mx-auto mb-4 text-4xl text-sa-blue">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl text-foreground mb-2">{name}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {sizes.map((sizeOption, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
              <span className="font-medium text-foreground">{sizeOption.size}</span>
              <Badge variant="secondary" className="bg-sa-green text-white text-sm px-3 py-1">
                {sizeOption.price}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}