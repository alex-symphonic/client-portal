import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Typography() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Primary Font: Inter</h3>
          <div className="space-y-4">
            <div>
              <p className="text-4xl font-bold">Display Text</p>
              <p className="text-sm text-muted-foreground mt-1">Font weight: 700</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Heading Text</p>
              <p className="text-sm text-muted-foreground mt-1">Font weight: 600</p>
            </div>
            <div>
              <p className="text-base">Body Text</p>
              <p className="text-sm text-muted-foreground mt-1">Font weight: 400</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Usage Guidelines</h4>
          <ul className="text-sm space-y-2">
            <li>• Use Inter for all digital interfaces and marketing materials</li>
            <li>• Maintain consistent line heights for readability</li>
            <li>• Stick to defined font weights for hierarchy</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}