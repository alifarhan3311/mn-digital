import Link from "next/link";
import { CodeXml, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background/50 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <CodeXml className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">Digital Morph</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Innovating Digital Solutions, One Pixel at a Time
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
          <div className="grid gap-2">
            <h4 className="font-semibold">Quick Links</h4>
            <Link href="#home" className="hover:text-primary" prefetch={false}>Home</Link>
            <Link href="#services" className="hover:text-primary" prefetch={false}>Services</Link>
            <Link href="#projects" className="hover:text-primary" prefetch={false}>Projects</Link>
            <Link href="#about" className="hover:text-primary" prefetch={false}>About Us</Link>
            <Link href="#contact" className="hover:text-primary" prefetch={false}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary" prefetch={false}><Twitter className="h-6 w-6" /></Link>
            <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary" prefetch={false}><Github className="h-6 w-6" /></Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary" prefetch={false}><Linkedin className="h-6 w-6" /></Link>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Digital Morph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
