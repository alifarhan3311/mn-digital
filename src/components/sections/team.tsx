"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import { teamMembers } from '@/lib/mock-data';
import type { TeamMember, TeamNode } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
    <Card className="w-full p-4 shadow-neumorphic dark:shadow-neumorphic-dark">
      <div className="flex items-center gap-4">
        {avatar && (
          <Image
            src={avatar.imageUrl}
            alt={member.name}
            width={80}
            height={80}
            className="rounded-full"
            data-ai-hint={avatar.imageHint}
          />
        )}
        <div>
          <h4 className="text-lg font-bold">{member.name}</h4>
          <p className="text-primary">{member.role}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {member.skills.map(skill => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

const TeamNodeComponent: React.FC<{ node: TeamNode }> = ({ node }) => {
  if (node.children.length === 0) {
    return <TeamMemberCard member={node} />;
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={node.id} className="border-none">
        <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-90">
            <TeamMemberCard member={node} />
        </AccordionTrigger>
        <AccordionContent>
          <div className="ml-8 mt-4 flex flex-col gap-4 border-l-2 border-primary/20 pl-8">
            {node.children.map(child => (
              <TeamNodeComponent key={child.id} node={child} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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
        <div className="mt-12 mx-auto max-w-4xl">
          {teamTree.map(rootNode => (
            <TeamNodeComponent key={rootNode.id} node={rootNode} />
          ))}
        </div>
      </div>
    </section>
  );
}
