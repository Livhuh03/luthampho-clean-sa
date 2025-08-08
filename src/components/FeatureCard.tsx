import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 transform hover:scale-105 border-0 h-full">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 text-3xl text-sa-green">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}