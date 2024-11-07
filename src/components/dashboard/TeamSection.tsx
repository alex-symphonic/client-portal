import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Alex Thompson', role: 'Product Lead', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&q=80' },
  { name: 'Sarah Chen', role: 'Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80' },
  { name: 'Mike Roberts', role: 'Developer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80' },
];

export function TeamSection() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="font-semibold text-lg mb-4">Your Team</h2>
      <div className="flex gap-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <Avatar className="h-12 w-12">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="mt-2 text-center">
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}