import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Patients" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                Meet Your Dentist
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Dr. Sarah Smith, DDS
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 15 years of experience in comprehensive dental care, 
                Dr. Smith is committed to providing exceptional treatment in a 
                comfortable, welcoming environment.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Education & Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-foreground">Doctor of Dental Surgery (DDS)</p>
                    <p className="text-muted-foreground">Harvard School of Dental Medicine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-foreground">Advanced Cosmetic Dentistry</p>
                    <p className="text-muted-foreground">American Academy of Cosmetic Dentistry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-foreground">Implant Dentistry Certification</p>
                    <p className="text-muted-foreground">International Congress of Oral Implantologists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
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
            
            <div className="bg-accent/50 p-8 rounded-xl">
              <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                "My mission is to help every patient achieve optimal oral health while 
                creating beautiful, confident smiles. I believe in using the latest 
                technology and techniques to provide gentle, effective care."
              </blockquote>
              <div className="mt-4 text-right">
                <cite className="text-foreground font-semibold">— Dr. Sarah Smith</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};