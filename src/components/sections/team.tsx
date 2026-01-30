"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import { teamMembers } from '@/lib/mock-data';
import type { TeamMember, TeamNode } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

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
    <div className="flex flex-col items-center text-center w-48 group cursor-pointer">
      <div className="relative">
        {avatar && (
          <Image
            src={avatar.imageUrl}
            alt={member.name}
            width={100}
            height={100}
            className="rounded-full transition-all duration-300 group-hover:scale-110"
            data-ai-hint={avatar.imageHint}
          />
        )}
        <div className="absolute inset-0 rounded-full border-4 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">{member.name}</h4>
        <p className="text-primary/80">{member.role}</p>
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
        <div className="flex justify-center pt-8 relative">
          {/* Vertical line from parent */}
          <div className="absolute top-0 h-8 w-px bg-primary/30" />
          
          <div className="flex">
            {node.children.map((child, index) => {
              const isFirst = index === 0;
              const isLast = index === node.children.length - 1;
              const hasSiblings = node.children.length > 1;

              return (
                <div key={child.id} className="px-4 relative">
                  {/* Vertical line up to horizontal connector */}
                  <div className="absolute bottom-full h-8 w-px bg-primary/30 left-1/2 -translate-x-1/2" />
                  
                  {/* Horizontal Connector */}
                  {hasSiblings && (
                    <div className={cn(
                      "absolute bottom-full h-px bg-primary/30",
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
        <div className="mt-12 flex justify-center overflow-x-auto p-4">
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
