import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const projects = [
  { id: 1, name: 'Website Redesign', progress: 75, status: 'In Progress' },
  { id: 2, name: 'Mobile App Development', progress: 40, status: 'In Progress' },
  { id: 3, name: 'Brand Identity', progress: 90, status: 'Review' },
];

export function ProjectSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{project.name}</p>
                <Badge variant="outline">{project.status}</Badge>
              </div>
              <Progress value={project.progress} className="h-2" />
              <p className="text-xs text-muted-foreground text-right">{project.progress}% complete</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}