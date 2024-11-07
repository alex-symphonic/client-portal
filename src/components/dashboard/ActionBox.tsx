import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';

export function ActionBox() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Have questions or need to submit a new request? Our team is here to help you.
        </p>
        <Button className="w-full">
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Start a Conversation
        </Button>
      </CardContent>
    </Card>
  );
}