import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.general.title') as string,
      description: t('services.general.description') as string,
      features: t('services.general.features') as string[],
      badge: t('services.badges.popular') as string
    },
    {
      title: t('services.cosmetic.title') as string, 
      description: t('services.cosmetic.description') as string,
      features: t('services.cosmetic.features') as string[],
      badge: t('services.badges.premium') as string
    },
    {
      title: t('services.orthodontics.title') as string,
      description: t('services.orthodontics.description') as string,
      features: t('services.orthodontics.features') as string[],
      badge: t('services.badges.advanced') as string
    },
    {
      title: t('services.restorative.title') as string,
      description: t('services.restorative.description') as string,
      features: t('services.restorative.features') as string[],
      badge: t('services.badges.specialized') as string
    }
  ];
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {service.badge}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};