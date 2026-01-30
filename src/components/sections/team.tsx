"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/lib/mock-data';
import type { TeamMember, TeamNode } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter } from 'lucide-react';

function buildTeamTree(members: TeamMember[]): TeamNode[] {
  const memberMap = new Map<string, TeamNode>();
  const rootNodes: TeamNode[] = [];

  members.forEach(member => {
    memberMap.set(member.id, { ...member, children: [] });
  });

  members.forEach(member => {
    const node = memberMap.get(member.id);
    if (!node) return;
    if (member.reportsTo) {
      const manager = memberMap.get(member.reportsTo);
      if (manager) {
        manager.children.push(node);
      }
    } else {
      rootNodes.push(node);
    }
  });

  return rootNodes;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const avatar = PlaceHolderImages.find(img => img.id === member.avatarId);

  return (
    <div className="group relative h-64 w-52 cursor-pointer overflow-hidden rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark">
      {/* Background for the revealed content */}
      <div className="absolute inset-0 bg-background" />

      {/* Content that is revealed on hover, positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex h-36 flex-col items-center justify-center p-4">
        <div className="space-y-3 text-center">
          <h5 className="text-sm font-semibold text-foreground">Core Skills</h5>
          <div className="flex flex-wrap justify-center gap-1.5">
            {member.skills.slice(0, 3).map(skill => (
              <span key={skill} className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4 pt-2">
            {member.socials?.twitter && (
              <Link href={member.socials.twitter} target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            )}
            {member.socials?.linkedin && (
              <Link href={member.socials.linkedin} target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
            )}
            {member.socials?.github && (
              <Link href={member.socials.github} target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-5 w-5" /></Link>
            )}
          </div>
        </div>
      </div>

      {/* The main visible content that slides up */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-card p-4 text-center transition-transform duration-500 ease-cubic-bezier group-hover:-translate-y-28">
        <div className="relative">
          {avatar && (
            <Image
              src={avatar.imageUrl}
              alt={member.name}
              width={112}
              height={112}
              className="rounded-full border-4 border-background shadow-md transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={avatar.imageHint}
            />
          )}
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
          <p className="text-sm text-primary/90">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

const TeamNodeComponent: React.FC<{ node: TeamNode }> = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center text-center">
      <TeamMemberCard member={node} />
      {hasChildren && (
        <div className="relative flex justify-center pt-12 md:pt-16">
          {/* Vertical line from parent */}
          <div className="absolute top-0 h-12 w-px bg-border md:h-16" />
          
          <div className="flex items-start">
            {node.children.map((child, index) => {
              const isFirst = index === 0;
              const isLast = index === node.children.length - 1;
              const hasSiblings = node.children.length > 1;

              return (
                <div key={child.id} className="relative px-6 md:px-8">
                  {/* Vertical line up to horizontal connector */}
                  <div className="absolute bottom-full left-1/2 h-12 w-px -translate-x-1/2 bg-border md:h-16" />
                  
                  {/* Horizontal Connector */}
                  {hasSiblings && (
                    <div className={cn(
                      "absolute bottom-full h-px bg-border",
                      isFirst && "left-1/2 w-1/2",
                      isLast && "right-1/2 w-1/2",
                      !isFirst && !isLast && "left-0 w-full"
                    )} />
                  )}

                  <TeamNodeComponent node={child} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};


export function Team() {
  const teamTree = useMemo(() => buildTeamTree(teamMembers), []);

  return (
    <section id="team" className="w-full bg-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            The creative minds and technical wizards behind our success.
          </p>
        </div>
        <div className="mt-16 flex justify-center overflow-x-auto p-4 sm:p-8 md:p-12">
          <div className="flex">
            {teamTree.map(rootNode => (
              <TeamNodeComponent key={rootNode.id} node={rootNode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
