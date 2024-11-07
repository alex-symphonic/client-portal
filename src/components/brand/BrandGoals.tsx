import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

const goals = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower teams with intuitive tools that enhance collaboration and productivity.',
  },
  {
    icon: Users,
    title: 'Target Audience',
    description: 'Professional teams and organizations seeking efficient project management solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously evolve our platform with cutting-edge features while maintaining simplicity.',
  },
  {
    icon: Globe,
    title: 'Market Position',
    description: 'Leading provider of user-friendly, enterprise-grade project management tools.',
  },
];

export function BrandGoals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand Goals & Objectives</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {goals.map((goal) => (
            <div key={goal.title} className="flex space-x-4">
              <div className="mt-1">
                <goal.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}