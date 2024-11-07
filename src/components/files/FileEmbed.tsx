import React from 'react';
import { FileQuestion } from 'lucide-react';

export function FileEmbed() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center text-center p-8 bg-muted/40 rounded-lg">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-4" />
      <h2 className="text-xl font-semibold mb-2">Google Drive Integration</h2>
      <p className="text-muted-foreground max-w-md">
        This section will display your Google Drive files and folders. 
        Connect your Google Drive account to access and manage your files directly from the dashboard.
      </p>
    </div>
  );
}