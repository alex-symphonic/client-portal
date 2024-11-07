import React from 'react';
import { ClipboardList } from 'lucide-react';

export function TaskEmbed() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center text-center p-8 bg-muted/40">
      <ClipboardList className="h-16 w-16 text-muted-foreground mb-4" />
      <h2 className="text-xl font-semibold mb-2">ClickUp Integration</h2>
      <p className="text-muted-foreground max-w-md">
        This section will display your ClickUp tasks and projects. 
        Connect your ClickUp account to manage tasks directly from the dashboard.
      </p>
    </div>
  );
}