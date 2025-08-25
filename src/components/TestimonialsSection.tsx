import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const testimonials = [
  {
    name: "Michael Johnson",
    procedure: "Dental Implants",
    rating: 5,
    comment: "Dr. Smith transformed my smile completely. The implant procedure was painless and the results exceeded my expectations. I can eat and smile confidently again!",
    location: "Downtown"
  },
  {
    name: "Sarah Williams",
    procedure: "Teeth Whitening", 
    rating: 5,
    comment: "Amazing results! My teeth are 6 shades whiter and the treatment was so comfortable. Dr. Smith's attention to detail is incredible.",
    location: "Westside"
  },
  {
    name: "David Chen",
    procedure: "Complete Smile Makeover",
    rating: 5,
    comment: "The entire team is fantastic. From consultation to final results, everything was professional and efficient. My new smile has boosted my confidence tremendously.",
    location: "East End"
  }
];

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.procedure}</p>
                    </div>
                    <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-primary">4.9</span>
              <div className="flex items-center gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                ))}
              </div>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-sm text-muted-foreground">
              {t('testimonials.based')} 500+ {t('testimonials.reviews')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};