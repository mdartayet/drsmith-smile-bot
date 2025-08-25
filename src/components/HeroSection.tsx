import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/dental-office-hero.jpg";

export const HeroSection = () => {
  const openChatbot = () => {
    // This will trigger the chatbot widget to open
    const chatButton = document.querySelector('button[data-testid="chat-fab"]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Perfect
                <span className="block text-primary-light">Smile Awaits</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-lg">
                Experience exceptional dental care with Dr. Smith. Advanced treatments, 
                compassionate care, and results that will make you smile with confidence.
              </p>
            </div>
            
          </div>
          
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur-sm p-8 shadow-2xl border-0">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">State-of-the-art technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Insurance accepted</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg font-semibold"
                  asChild
                >
                  <a href="https://calendly.com/mdartayet/15min" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};