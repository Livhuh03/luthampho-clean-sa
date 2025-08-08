import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { FeatureCard } from "@/components/FeatureCard";
import heroImage from "@/assets/products-5l-containers.png";
import everSparklingImage from "@/assets/ever-sparkling-dish-liquid.png";
import lovelyBubblesImage from "@/assets/lovely-bubbles-foam-bath.png";
import ceoTeamImage from "@/assets/ceo-founder-team.png";

// Icons as emoji for simplicity and better performance
const DishIcon = () => <span>🧽</span>;
const ShowerIcon = () => <span>🛁</span>;
const EcoIcon = () => <span>🌍</span>;
const GentleIcon = () => <span>🫧</span>;
const LocalIcon = () => <span>🇿🇦</span>;
const QualityIcon = () => <span>💯</span>;
const PhoneIcon = () => <span>📞</span>;
const WhatsAppIcon = () => <span>📱</span>;
const EmailIcon = () => <span>✉️</span>;

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27843549443", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+27765097207", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:mashauthando@gmail.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Premium cleaning products" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-4xl mb-4 block">🧼</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Luthampho Holdings
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-white/90">
              Proudly South African | Quality You Can Trust
            </p>
          </div>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            At Luthampho Holdings, we manufacture premium detergents and cleaning products 
            with a focus on eco-friendliness, affordability, and human safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <WhatsAppIcon />
              Order on WhatsApp
            </Button>
            <Button variant="cta" size="xl" onClick={handleCall}>
              <PhoneIcon />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="mr-2">🚿</span>
              Our Top Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Premium cleaning solutions made with love in South Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              name="Ever Sparkling Dish Washing Liquid"
              description="Powerful cleaning with a refreshing scent. Gentle on hands."
              icon={<DishIcon />}
              image={everSparklingImage}
              sizes={[
                { size: "750ml", price: "R28.99" },
                { size: "1 Litre", price: "R39.99" },
                { size: "5 Litre", price: "R89.99" },
              ]}
            />
            
            <ProductCard
              name="Lovely Bubbles Foam Bath"
              description="Luxurious lavender-scented foam bath for everyday relaxation."
              icon={<ShowerIcon />}
              image={lovelyBubblesImage}
              sizes={[
                { size: "1 Litre", price: "R39.99" },
                { size: "5 Litre", price: "R89.99" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="mr-2">✅</span>
              Why Choose Us?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<EcoIcon />}
              title="Environmentally Safe"
              description="Ingredients that are safe for you and the planet"
            />
            
            <FeatureCard
              icon={<GentleIcon />}
              title="Gentle on Skin"
              description="Formulated to be gentle on hands and skin"
            />
            
            <FeatureCard
              icon={<LocalIcon />}
              title="Locally Made"
              description="Proudly manufactured in South Africa with love"
            />
            
            <FeatureCard
              icon={<QualityIcon />}
              title="Quality Guaranteed"
              description="Premium quality you can trust and rely on"
            />
          </div>
        </div>
      </section>

      {/* About Our Leadership */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="mr-2">👥</span>
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground text-lg">
              Dedicated to providing quality cleaning solutions for South Africa
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-gradient-card rounded-lg p-8 shadow-soft max-w-2xl">
              <img 
                src={ceoTeamImage} 
                alt="Luthampho Holdings CEO and founding team" 
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Our Founding Team</h3>
                <p className="text-muted-foreground">
                  Committed to manufacturing premium, eco-friendly cleaning products 
                  that are safe for families and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="mr-2">📞</span>
            Order Now
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let Luthampho Holdings be your go-to brand for effective, safe, 
            and proudly South African cleaning products!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <PhoneIcon />
              <h3 className="text-lg font-semibold mb-2 mt-2">Phone</h3>
              <p className="text-white/90">076 509 7207</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <WhatsAppIcon />
              <h3 className="text-lg font-semibold mb-2 mt-2">WhatsApp</h3>
              <p className="text-white/90">084 354 9443</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <EmailIcon />
              <h3 className="text-lg font-semibold mb-2 mt-2">Email</h3>
              <p className="text-white/90">mashauthando@gmail.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" onClick={handleWhatsApp}>
              <WhatsAppIcon />
              WhatsApp Us
            </Button>
            <Button variant="hero" size="xl" onClick={handleCall}>
              <PhoneIcon />
              Call Now
            </Button>
            <Button variant="cta" size="xl" onClick={handleEmail}>
              <EmailIcon />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Luthampho Holdings (PTY) Ltd</h3>
          <p className="text-background/80 mb-4">
            Premium cleaning products • Proudly South African • Quality guaranteed
          </p>
          <p className="text-background/60 text-sm">
            © 2024 Luthampho Holdings (PTY) Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;