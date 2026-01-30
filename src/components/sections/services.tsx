import { services } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';

export function Services() {
  return (
    <section id="services" className="w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            We offer a comprehensive suite of digital services to help your business thrive.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group p-6 text-center shadow-neumorphic transition-all duration-300 hover:-translate-y-2 dark:shadow-neumorphic-dark"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
