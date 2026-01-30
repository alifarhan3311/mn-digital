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
    <div className="group relative flex w-44 cursor-pointer flex-col items-center rounded-xl bg-card p-4 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 md:w-48 md:p-5 dark:bg-card/60 dark:hover:bg-card/90">
      <div className="relative">
        {avatar && (
          <Image
            src={avatar.imageUrl}
            alt={member.name}
            width={96}
            height={96}
            className="rounded-full border-4 border-background transition-all duration-300 group-hover:scale-110"
            data-ai-hint={avatar.imageHint}
          />
        )}
        <div className="absolute -inset-1 rounded-full border-2 border-primary/0 opacity-0 transition-all duration-300 group-hover:border-primary/50 group-hover:opacity-100" />
      </div>
      <div className="mt-3">
        <h4 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:text-lg">{member.name}</h4>
        <p className="text-xs text-primary/80 md:text-sm">{member.role}</p>
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
        <div className="relative flex justify-center pt-8 md:pt-12">
          {/* Vertical line from parent */}
          <div className="absolute top-0 h-8 w-px bg-border md:h-12" />
          
          <div className="flex items-start">
            {node.children.map((child, index) => {
              const isFirst = index === 0;
              const isLast = index === node.children.length - 1;
              const hasSiblings = node.children.length > 1;

              return (
                <div key={child.id} className="relative px-4 md:px-6">
                  {/* Vertical line up to horizontal connector */}
                  <div className="absolute bottom-full left-1/2 h-8 w-px -translate-x-1/2 bg-border md:h-12" />
                  
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
        <div className="mt-12 flex justify-center overflow-x-auto p-4 sm:p-8 md:p-12">
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
