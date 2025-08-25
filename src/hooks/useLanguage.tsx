import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string | string[];
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
    'services.title': 'Complete Dental Care Services',
    'services.description': 'From routine cleanings to advanced cosmetic procedures, Dr. Smith provides comprehensive dental care tailored to your unique needs.',
    'services.general.title': 'General Dentistry',
    'services.general.description': 'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
    'services.general.features': ['Regular Cleanings', 'Cavity Fillings', 'Oral Exams', 'X-Rays'],
    'services.cosmetic.title': 'Cosmetic Dentistry',
    'services.cosmetic.description': 'Transform your smile with our advanced cosmetic treatments and procedures.',
    'services.cosmetic.features': ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers'],
    'services.orthodontics.title': 'Orthodontics',
    'services.orthodontics.description': 'Straighten your teeth with traditional braces or modern clear aligners.',
    'services.orthodontics.features': ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Bite Correction'],
    'services.restorative.title': 'Restorative Dentistry',
    'services.restorative.description': 'Restore function and beauty to damaged or missing teeth.',
    'services.restorative.features': ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Root Canals'],
    'services.badges.popular': 'Popular',
    'services.badges.premium': 'Premium',
    'services.badges.advanced': 'Advanced',
    'services.badges.specialized': 'Specialized',
    
    // About Section
    'about.badge': 'Meet Your Dentists',
    'about.title': 'Our Expert Team',
    'about.achievements.experience': 'Years Experience',
    'about.achievements.patients': 'Happy Patients',
    'about.achievements.satisfaction': 'Satisfaction Rate',
    'about.achievements.emergency': 'Emergency Care',
    'about.education.title': 'Education & Certifications',
    'about.drsmith.description': 'With over 15 years of experience in comprehensive dental care, Dr. Smith is committed to providing exceptional treatment in a comfortable, welcoming environment.',
    'about.drsmith.quote': 'My mission is to help every patient achieve optimal oral health while creating beautiful, confident smiles. I believe in using the latest technology and techniques to provide gentle, effective care.',
    'about.drthomson.description': 'Dr. Thomson specializes in oral surgery and periodontics, bringing expertise in complex dental procedures and gum disease treatment to our practice.',
    'about.drthomson.quote': 'I focus on preserving and restoring the foundation of your smile. Healthy gums and precise surgical techniques are key to long-lasting dental health.',
    
    // Testimonials Section
    'testimonials.title': 'What Our Patients Say',
    'testimonials.description': 'Don\'t just take our word for it. Here\'s what our satisfied patients have to say about their experience with Dr. Smith.',
    'testimonials.based': 'Based on',
    'testimonials.reviews': 'reviews',
    
    // Contact Section Office
    'contact.office.title': 'Visit Our Office',
    'contact.office.description': 'Located in the heart of the city, our modern facility is designed for your comfort and convenience.',
    'contact.office.hours': 'Office Hours',
    'contact.office.emergency': 'Emergency Care',
    'contact.office.emergencyDesc': '24/7 emergency dental services available. Call our emergency line for urgent care.',
    'contact.office.contactInfo': 'Contact Information',
    'contact.office.address': 'Address',
    'contact.office.phone': 'Phone',
    'contact.office.email': 'Email',
    'contact.office.schedule': 'Ready to Schedule?',
    'contact.office.scheduleDesc': 'Book your appointment today using our AI-powered scheduling assistant. Get instant confirmation and choose your preferred time.',
    'contact.office.monday': 'Monday - Friday',
    'contact.office.saturday': 'Saturday',
    'contact.office.sunday': 'Sunday',
    'contact.office.sundayHours': 'Emergency Only',
    
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
    'services.title': 'Servicios Dentales Completos',
    'services.description': 'Desde limpiezas rutinarias hasta procedimientos cosméticos avanzados, Dr. Smith brinda cuidado dental integral adaptado a sus necesidades únicas.',
    'services.general.title': 'Odontología General',
    'services.general.description': 'Cuidado integral de salud oral incluyendo limpiezas, empastes y tratamientos preventivos.',
    'services.general.features': ['Limpiezas Regulares', 'Empastes de Caries', 'Exámenes Orales', 'Radiografías'],
    'services.cosmetic.title': 'Odontología Cosmética',
    'services.cosmetic.description': 'Transforma tu sonrisa con nuestros tratamientos y procedimientos cosméticos avanzados.',
    'services.cosmetic.features': ['Blanqueamiento Dental', 'Carillas', 'Bonding', 'Renovación de Sonrisa'],
    'services.orthodontics.title': 'Ortodoncia',
    'services.orthodontics.description': 'Endereza tus dientes con brackets tradicionales o alineadores transparentes modernos.',
    'services.orthodontics.features': ['Brackets Tradicionales', 'Alineadores Transparentes', 'Retenedores', 'Corrección de Mordida'],
    'services.restorative.title': 'Odontología Restaurativa',
    'services.restorative.description': 'Restaura la función y belleza de los dientes dañados o perdidos.',
    'services.restorative.features': ['Implantes Dentales', 'Coronas y Puentes', 'Dentaduras', 'Endodoncia'],
    'services.badges.popular': 'Popular',
    'services.badges.premium': 'Premium',
    'services.badges.advanced': 'Avanzado',
    'services.badges.specialized': 'Especializado',
    
    // About Section
    'about.badge': 'Conoce a Tus Dentistas',
    'about.title': 'Nuestro Equipo Experto',
    'about.achievements.experience': 'Años de Experiencia',
    'about.achievements.patients': 'Pacientes Satisfechos',
    'about.achievements.satisfaction': 'Tasa de Satisfacción',
    'about.achievements.emergency': 'Atención de Emergencia',
    'about.education.title': 'Educación y Certificaciones',
    'about.drsmith.description': 'Con más de 15 años de experiencia en cuidado dental integral, Dr. Smith se compromete a brindar tratamiento excepcional en un ambiente cómodo y acogedor.',
    'about.drsmith.quote': 'Mi misión es ayudar a cada paciente a lograr una salud oral óptima mientras creo sonrisas hermosas y seguras. Creo en usar la última tecnología y técnicas para brindar cuidado suave y efectivo.',
    'about.drthomson.description': 'Dr. Thomson se especializa en cirugía oral y periodoncia, aportando experiencia en procedimientos dentales complejos y tratamiento de enfermedades de las encías a nuestra práctica.',
    'about.drthomson.quote': 'Me enfoco en preservar y restaurar la base de tu sonrisa. Las encías saludables y las técnicas quirúrgicas precisas son clave para la salud dental duradera.',
    
    // Testimonials Section
    'testimonials.title': 'Lo Que Dicen Nuestros Pacientes',
    'testimonials.description': 'No solo tomes nuestra palabra. Esto es lo que nuestros pacientes satisfechos tienen que decir sobre su experiencia con Dr. Smith.',
    'testimonials.based': 'Basado en',
    'testimonials.reviews': 'reseñas',
    
    // Contact Section Office
    'contact.office.title': 'Visita Nuestra Oficina',
    'contact.office.description': 'Ubicada en el corazón de la ciudad, nuestra instalación moderna está diseñada para tu comodidad y conveniencia.',
    'contact.office.hours': 'Horarios de Oficina',
    'contact.office.emergency': 'Atención de Emergencia',
    'contact.office.emergencyDesc': 'Servicios dentales de emergencia disponibles 24/7. Llama a nuestra línea de emergencia para atención urgente.',
    'contact.office.contactInfo': 'Información de Contacto',
    'contact.office.address': 'Dirección',
    'contact.office.phone': 'Teléfono',
    'contact.office.email': 'Email',
    'contact.office.schedule': '¿Listo para Programar?',
    'contact.office.scheduleDesc': 'Reserva tu cita hoy usando nuestro asistente de programación con IA. Obtén confirmación instantánea y elige tu horario preferido.',
    'contact.office.monday': 'Lunes - Viernes',
    'contact.office.saturday': 'Sábado',
    'contact.office.sunday': 'Domingo',
    'contact.office.sundayHours': 'Solo Emergencias',
    
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

  const t = (key: string): string | string[] => {
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