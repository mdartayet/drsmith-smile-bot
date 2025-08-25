import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
    features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "X-Rays"],
    badge: "Popular"
  },
  {
    title: "Cosmetic Dentistry", 
    description: "Transform your smile with our advanced cosmetic treatments and procedures.",
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
    badge: "Premium"
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with traditional braces or modern clear aligners.",
    features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
    badge: "Advanced"
  },
  {
    title: "Restorative Dentistry",
    description: "Restore function and beauty to damaged or missing teeth.",
    features: ["Dental Implants", "Crowns & Bridges", "Dentures", "Root Canals"],
    badge: "Specialized"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Complete Dental Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine cleanings to advanced cosmetic procedures, Dr. Smith provides 
            comprehensive dental care tailored to your unique needs.
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