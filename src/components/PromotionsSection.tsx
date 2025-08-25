import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const promotions = [
  {
    title: "Dental Cleaning + Check-up",
    price: "$30",
    originalPrice: "$80",
    description: "Complete oral health assessment with professional cleaning",
    badge: "Limited Time"
  },
  {
    title: "Express Whitening",
    price: "20% Off",
    originalPrice: "$150",
    description: "Professional teeth whitening in just one visit",
    badge: "Popular"
  },
  {
    title: "Children's Check-up with Dr. Bustamante",
    price: "$25",
    originalPrice: "$60",
    description: "Gentle dental care specifically designed for children",
    badge: "Kids Special"
  }
];

export const PromotionsSection = () => {
  const openChatbot = (promotionTitle: string) => {
    const event = new CustomEvent("open-chatbot-with-message", {
      detail: { message: `I want to know more about ${promotionTitle}` }
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Special Promotions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take advantage of our limited-time offers for quality dental care at unbeatable prices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promotions.map((promotion, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
              <CardContent className="p-8 space-y-6 text-center">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  {promotion.badge}
                </Badge>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{promotion.title}</h3>
                  <p className="text-muted-foreground">{promotion.description}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{promotion.price}</div>
                  {promotion.originalPrice && (
                    <div className="text-muted-foreground line-through text-lg">
                      Regular: {promotion.originalPrice}
                    </div>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg font-semibold"
                  onClick={() => openChatbot(promotion.title)}
                >
                  Chat with our virtual assistant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};