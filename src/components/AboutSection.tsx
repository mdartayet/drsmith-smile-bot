import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import drSarahSmith from "@/assets/dr-sarah-smith.jpg";
import drMichaelThomson from "@/assets/dr-michael-thomson.jpg";

export const AboutSection = () => {
  const { t } = useLanguage();
  
  const achievements = [
    { number: "15+", label: t('about.achievements.experience') },
    { number: "5000+", label: t('about.achievements.patients') },
    { number: "98%", label: t('about.achievements.satisfaction') },
    { number: "24/7", label: t('about.achievements.emergency') }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Smith, DDS",
      experience: "15+ years",
      description: t('about.drsmith.description'),
      image: drSarahSmith,
      education: [
        {
          degree: "Doctor of Dental Surgery (DDS)",
          institution: "Harvard School of Dental Medicine"
        },
        {
          degree: "Advanced Cosmetic Dentistry",
          institution: "American Academy of Cosmetic Dentistry"
        },
        {
          degree: "Implant Dentistry Certification",
          institution: "International Congress of Oral Implantologists"
        }
      ],
      quote: t('about.drsmith.quote')
    },
    {
      name: "Dr. Michael Thomson, DDS",
      experience: "12+ years",
      description: t('about.drthomson.description'),
      image: drMichaelThomson,
      education: [
        {
          degree: "Doctor of Dental Surgery (DDS)",
          institution: "University of California, San Francisco"
        },
        {
          degree: "Periodontics Specialty Certificate",
          institution: "American Academy of Periodontology"
        },
        {
          degree: "Oral Surgery Certification",
          institution: "American Association of Oral Surgeons"
        }
      ],
      quote: t('about.drthomson.quote')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary px-4 py-2">
            {t('about.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="space-y-24">
          {doctors.map((doctor, doctorIndex) => (
            <div key={doctorIndex} className={`grid lg:grid-cols-2 gap-16 items-center ${doctorIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-8 ${doctorIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
                    {doctor.name}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {doctor.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-foreground">{t('about.education.title')}</h4>
                  <div className="space-y-3">
                    {doctor.education.map((edu, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-semibold text-foreground">{edu.degree}</p>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`space-y-8 ${doctorIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  <img 
                    src={doctor.image}
                    alt={`${doctor.name} - Professional dentist portrait`}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                
                {doctorIndex === 0 && (
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/30 border-primary/20">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="text-center space-y-2">
                            <div className="text-3xl lg:text-4xl font-bold text-primary">
                              {achievement.number}
                            </div>
                            <div className="text-muted-foreground font-medium">
                              {achievement.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                <div className="bg-accent/50 p-8 rounded-xl">
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                    "{doctor.quote}"
                  </blockquote>
                  <div className="mt-4 text-right">
                    <cite className="text-foreground font-semibold">— {doctor.name.split(',')[0]}</cite>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};