import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/dental-office-hero.jpg";

export const HeroSection = () => {
  const openChatbot = () => {
    // This will be handled by the chatbot widget
    const chatWidget = document.querySelector('iframe[src*="chattybot"]') as HTMLIFrameElement;
    if (chatWidget) {
      chatWidget.style.display = 'block';
      chatWidget.focus();
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={openChatbot}
              >
                Chat with our AI bot
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
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
                  onClick={openChatbot}
                >
                  Chat with our AI bot
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};