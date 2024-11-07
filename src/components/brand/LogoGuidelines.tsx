import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export function LogoGuidelines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logo Guidelines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-center p-8 bg-muted rounded-lg">
            <Shield className="w-24 h-24" />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Clear Space</h4>
              <p className="text-sm text-muted-foreground">
                Maintain minimum clear space equal to the height of the logo mark around all sides.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Minimum Size</h4>
              <p className="text-sm text-muted-foreground">
                Digital: Minimum width of 32px
                <br />
                Print: Minimum width of 0.5 inches
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Color Variations</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded bg-primary flex justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="p-4 rounded bg-muted flex justify-center">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}