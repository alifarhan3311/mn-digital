'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/mock-data';
import type { Project, ProjectCategory } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

const categories: ('All' | ProjectCategory)[] = ['All', 'Web Development', 'Mobile Apps', 'Graphic Design', 'Others'];

export function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="w-full bg-background/70 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of our finest work, showcasing our skills and dedication.
          </p>
        </div>

        <div className="my-12 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'neumorphic' : 'ghost'}
              onClick={() => setFilter(category)}
              className={cn(
                'rounded-full',
                filter === category && 'shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map(project => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <Card key={project.id} className="group overflow-hidden rounded-lg shadow-neumorphic transition-all duration-300 hover:-translate-y-2 dark:shadow-neumorphic-dark">
                <div className="relative h-56 w-full">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  {project.link && (
                    <Link href={project.link} target="_blank" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
