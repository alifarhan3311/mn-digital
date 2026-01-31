import { companyInfo } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, Users, Zap } from 'lucide-react';

const stats = [
  { name: 'Projects Done', value: companyInfo.stats.projects, icon: Briefcase },
  { name: 'Happy Clients', value: companyInfo.stats.clients, icon: Users },
  { name: 'Years of Experience', value: 5, icon: Zap },
];

export function About() {
  return (
    <section id="about" className="w-full bg-background/70 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Digital Morph</h2>
            <p className="text-muted-foreground">{companyInfo.about}</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">{companyInfo.mission}</p>
              </div>
              <div>
                <h3 className="font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">{companyInfo.vision}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-neumorphic dark:shadow-neumorphic-dark">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <stat.icon className="mb-3 h-10 w-10 text-primary" />
                  <p className="text-3xl font-bold">{stat.value}+</p>
                  <p className="text-muted-foreground">{stat.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
