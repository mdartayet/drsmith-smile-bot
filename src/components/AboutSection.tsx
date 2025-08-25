import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import drSarahSmith from "@/assets/dr-sarah-smith.jpg";

export const AboutSection = () => {
  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Patients" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Care" }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Smith, DDS",
      experience: "15+ years",
      description: "With over 15 years of experience in comprehensive dental care, Dr. Smith is committed to providing exceptional treatment in a comfortable, welcoming environment.",
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
      quote: "My mission is to help every patient achieve optimal oral health while creating beautiful, confident smiles. I believe in using the latest technology and techniques to provide gentle, effective care."
    },
    {
      name: "Dr. Michael Thomson, DDS",
      experience: "12+ years",
      description: "Dr. Thomson specializes in oral surgery and periodontics, bringing expertise in complex dental procedures and gum disease treatment to our practice.",
      image: drSarahSmith, // Using same image for now - you can replace with actual Dr. Thomson photo
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
      quote: "I focus on preserving and restoring the foundation of your smile. Healthy gums and precise surgical techniques are key to long-lasting dental health."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary px-4 py-2">
            Meet Your Dentists
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Our Expert Team
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
                  <h4 className="text-2xl font-semibold text-foreground">Education & Certifications</h4>
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