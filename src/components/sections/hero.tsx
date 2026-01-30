import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Innovating Digital Solutions, One Pixel at a Time
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We are a team of passionate creators, thinkers, and builders, dedicated to crafting exceptional digital experiences that drive growth and inspire.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="neumorphic" className="rounded-full font-semibold" asChild>
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 opacity-50 animate-blob-1" />
        <div className="absolute -right-12 -bottom-24 h-72 w-72 rounded-full bg-secondary/10 opacity-50 animate-blob-2" />
      </div>
    </section>
  );
}
