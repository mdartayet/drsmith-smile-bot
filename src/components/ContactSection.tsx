import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export const ContactSection = () => {
  const { t } = useLanguage();
  
  const openChatbot = () => {
    const chatWidget = document.querySelector('iframe[src*="chattybot"]') as HTMLIFrameElement;
    if (chatWidget) {
      chatWidget.style.display = 'block';
      chatWidget.focus();
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Visit Our Office
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the city, our modern facility is designed 
            for your comfort and convenience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-primary text-white border-0">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <h4 className="font-semibold mb-2">Emergency Care</h4>
                  <p className="text-sm opacity-90">
                    24/7 emergency dental services available. Call our emergency line for urgent care.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">123 Medical Plaza<br/>Downtown City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">(555) 123-SMILE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@drsmithsmile.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-full border-0 bg-muted/30">
              <CardContent className="p-8 h-full flex items-center justify-center">
                <div className="text-center space-y-8 max-w-lg">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">📍</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">{t('contact.title')}</h3>
                    <p className="text-lg text-muted-foreground">
                      {t('contact.description')}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                      asChild
                    >
                      <a href="https://calendly.com/mdartayet/15min" target="_blank" rel="noopener noreferrer">
                        {t('contact.bookButton')}
                      </a>
                    </Button>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>📞 {t('contact.call')}</span>
                      <span>•</span>
                      <span>💬 {t('contact.chat')}</span>
                      <span>•</span>
                      <span>📧 {t('contact.email')}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};