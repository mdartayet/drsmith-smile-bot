import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const PromotionsSection = () => {
  const { t } = useLanguage();
  
  const promotions = [
    {
      title: t('promotions.cleaning.title'),
      price: "$30",
      originalPrice: "$80",
      description: t('promotions.cleaning.description'),
      badge: t('promotions.badge.limited')
    },
    {
      title: t('promotions.whitening.title'),
      price: "20% Off",
      originalPrice: "$150",
      description: t('promotions.whitening.description'),
      badge: t('promotions.badge.popular')
    },
    {
      title: t('promotions.children.title'),
      price: "$25",
      originalPrice: "$60",
      description: t('promotions.children.description'),
      badge: t('promotions.badge.kids')
    }
  ];
  
  const openChatbot = (promotionTitle: string) => {
    const event = new CustomEvent("open-chatbot-with-message", {
      detail: { message: `${t('chatbot.inquiry')} ${promotionTitle}` }
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('promotions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('promotions.description')}
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
                      {t('promotions.regular')}: {promotion.originalPrice}
                    </div>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg font-semibold"
                  onClick={() => openChatbot(promotion.title)}
                >
                  {t('promotions.chatButton')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};