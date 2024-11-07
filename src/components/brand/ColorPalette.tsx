import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const colors = [
  { name: 'Primary', hex: '#0F172A', variable: '--primary', description: 'Main brand color, used for key elements' },
  { name: 'Secondary', hex: '#64748B', variable: '--secondary', description: 'Supporting color for secondary elements' },
  { name: 'Accent', hex: '#2563EB', variable: '--accent', description: 'Highlights and call-to-actions' },
  { name: 'Background', hex: '#F8FAFC', variable: '--background', description: 'Page backgrounds and containers' },
];

export function ColorPalette() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Palette</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="flex items-start space-x-4 p-4 rounded-lg border">
              <div 
                className="w-16 h-16 rounded-lg shadow-inner"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <h4 className="font-medium">{color.name}</h4>
                <p className="text-sm text-muted-foreground">{color.hex}</p>
                <p className="text-sm text-muted-foreground mt-1">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}