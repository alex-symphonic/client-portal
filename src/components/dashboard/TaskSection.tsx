import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const tasks = [
  { id: 1, title: 'Review brand guidelines', priority: 'High', status: 'In Progress' },
  { id: 2, title: 'Update project timeline', priority: 'Medium', status: 'Pending' },
  { id: 3, title: 'Client presentation', priority: 'High', status: 'In Progress' },
];

export function TaskSection() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Open Tasks</h2>
        <Badge variant="secondary">{tasks.length} active</Badge>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium">{task.title}</p>
              <p className="text-xs text-muted-foreground">{task.status}</p>
            </div>
            <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>
              {task.priority}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}