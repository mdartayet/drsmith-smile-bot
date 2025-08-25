import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'header.phone': '(555) 123-SMILE',
    'header.bookNow': 'Book Now',
    
    // Hero Section
    'hero.title': 'Your Perfect',
    'hero.titleAccent': 'Smile Awaits',
    'hero.description': 'Experience exceptional dental care with Dr. Smith. Advanced treatments, compassionate care, and results that will make you smile with confidence.',
    'hero.readyTitle': 'Ready to Get Started?',
    'hero.feature1': 'Same-day appointments available',
    'hero.feature2': 'State-of-the-art technology',
    'hero.feature3': 'Insurance accepted',
    'hero.chatButton': 'Chat with our virtual assistant',
    
    // Services Section
    'services.title': 'Our Services',
    'services.description': 'Comprehensive dental care for the whole family',
    
    // About Section
    'about.title': 'Meet Our Dental Team',
    'about.description': 'Our experienced professionals are dedicated to providing exceptional dental care.',
    
    // Promotions Section
    'promotions.title': 'Special Promotions',
    'promotions.description': 'Take advantage of our limited-time offers for quality dental care at unbeatable prices.',
    'promotions.cleaning.title': 'Dental Cleaning + Check-up',
    'promotions.cleaning.description': 'Complete oral health assessment with professional cleaning',
    'promotions.whitening.title': 'Express Whitening',
    'promotions.whitening.description': 'Professional teeth whitening in just one visit',
    'promotions.children.title': 'Children\'s Check-up',
    'promotions.children.description': 'Gentle dental care specifically designed for children',
    'promotions.badge.limited': 'Limited Time',
    'promotions.badge.popular': 'Popular',
    'promotions.badge.kids': 'Kids Special',
    'promotions.regular': 'Regular',
    'promotions.chatButton': 'Chat with our virtual assistant',
    
    // Contact Section
    'contact.title': 'Book Your Appointment',
    'contact.description': 'Ready to transform your smile? Contact us today to schedule your appointment.',
    'contact.bookButton': 'Book Appointment Now',
    'contact.call': 'Call us',
    'contact.chat': 'Chat online',
    'contact.email': 'Email us',
    
    // Chatbot
    'chatbot.welcome': `Welcome to Dr. Smith's Dental Clinic! 🦷

Our monthly promotions for this month are:

🔹 Dental cleaning + check-up for $30
🔹 Express whitening with 20% off  
🔹 Children's check-up for $25

How can I help you schedule your appointment today?`,
    'chatbot.placeholder': 'Type your message...',
    'chatbot.error': 'I\'m sorry, I\'m having trouble connecting right now. Please try again or call us at (555) 123-SMILE.',
    'chatbot.inquiry': 'I want to know more about',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact: (555) 123-SMILE | info@drsmithdental.com'
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.reviews': 'Reseñas',
    'nav.contact': 'Contacto',
    'header.phone': '(555) 123-SMILE',
    'header.bookNow': 'Reservar Cita',
    
    // Hero Section
    'hero.title': 'Tu Sonrisa',
    'hero.titleAccent': 'Perfecta Te Espera',
    'hero.description': 'Experimenta cuidado dental excepcional con Dr. Smith. Tratamientos avanzados, cuidado compasivo y resultados que te harán sonreír con confianza.',
    'hero.readyTitle': '¿Listo para Comenzar?',
    'hero.feature1': 'Citas el mismo día disponibles',
    'hero.feature2': 'Tecnología de última generación',
    'hero.feature3': 'Seguros aceptados',
    'hero.chatButton': 'Chatea con nuestro asistente virtual',
    
    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.description': 'Cuidado dental integral para toda la familia',
    
    // About Section
    'about.title': 'Conoce Nuestro Equipo Dental',
    'about.description': 'Nuestros profesionales experimentados se dedican a brindar cuidado dental excepcional.',
    
    // Promotions Section
    'promotions.title': 'Promociones Especiales',
    'promotions.description': 'Aprovecha nuestras ofertas por tiempo limitado para cuidado dental de calidad a precios inmejorables.',
    'promotions.cleaning.title': 'Limpieza Dental + Revisión',
    'promotions.cleaning.description': 'Evaluación completa de salud oral con limpieza profesional',
    'promotions.whitening.title': 'Blanqueamiento Express',
    'promotions.whitening.description': 'Blanqueamiento dental profesional en una sola visita',
    'promotions.children.title': 'Revisión para Niños',
    'promotions.children.description': 'Cuidado dental suave diseñado específicamente para niños',
    'promotions.badge.limited': 'Tiempo Limitado',
    'promotions.badge.popular': 'Popular',
    'promotions.badge.kids': 'Especial Niños',
    'promotions.regular': 'Regular',
    'promotions.chatButton': 'Chatea con nuestro asistente virtual',
    
    // Contact Section
    'contact.title': 'Reserva Tu Cita',
    'contact.description': '¿Listo para transformar tu sonrisa? Contáctanos hoy para programar tu cita.',
    'contact.bookButton': 'Reservar Cita Ahora',
    'contact.call': 'Llámanos',
    'contact.chat': 'Chatea en línea',
    'contact.email': 'Envíanos un email',
    
    // Chatbot
    'chatbot.welcome': `¡Bienvenido a la Clínica Dental del Dr. Smith! 🦷

Nuestras promociones mensuales para este mes son:

🔹 Limpieza dental + revisión por $30
🔹 Blanqueamiento express con 20% de descuento  
🔹 Revisión para niños por $25

¿Cómo puedo ayudarte a programar tu cita hoy?`,
    'chatbot.placeholder': 'Escribe tu mensaje...',
    'chatbot.error': 'Lo siento, tengo problemas de conexión en este momento. Por favor intenta de nuevo o llámanos al (555) 123-SMILE.',
    'chatbot.inquiry': 'Quiero saber más sobre',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.contact': 'Contacto: (555) 123-SMILE | info@drsmithdental.com'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};