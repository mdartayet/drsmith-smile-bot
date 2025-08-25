import { Button } from "@/components/ui/button";

export const Header = () => {
  const openChatbot = () => {
    const chatWidget = document.querySelector('iframe[src*="chattybot"]') as HTMLIFrameElement;
    if (chatWidget) {
      chatWidget.style.display = 'block';
      chatWidget.focus();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dr. Smith</h1>
              <p className="text-xs text-muted-foreground">Dental Excellence</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-sm text-muted-foreground">
              (555) 123-SMILE
            </div>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-semibold"
              asChild
            >
              <a href="https://calendly.com/mdartayet/15min" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};