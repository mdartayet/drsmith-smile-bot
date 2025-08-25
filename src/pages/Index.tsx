import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ChatbotWidget />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="promotions">
          <PromotionsSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">DS</span>
                </div>
                <div>
                  <h3 className="font-bold">Dr. Smith Dental</h3>
                  <p className="text-xs opacity-90">Excellence in Dental Care</p>
                </div>
              </div>
              <p className="text-sm opacity-90 max-w-sm">
                Providing exceptional dental care with advanced technology and 
                compassionate treatment for over 15 years.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div>Our Services</div>
                <div>About Dr. Smith</div>
                <div>Patient Reviews</div>
                <div>Contact Us</div>
                <div>Emergency Care</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div>123 Medical Plaza<br/>Downtown City, State 12345</div>
                <div>(555) 123-SMILE</div>
                <div>info@drsmithsmile.com</div>
                <div className="pt-2">
                  <div className="text-xs opacity-75">
                    © 2024 Dr. Smith Dental. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
