import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const guidelines = [
  {
    category: 'Voice',
    points: [
      'Professional yet approachable',
      'Clear and concise',
      'Empowering and positive',
      'Solution-focused',
    ],
  },
  {
    category: 'Tone',
    points: [
      'Friendly but not casual',
      'Confident without being arrogant',
      'Helpful and supportive',
      'Direct and transparent',
    ],
  },
];

export function VoiceTone() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice & Tone</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {guidelines.map((section) => (
            <div key={section.category}>
              <h3 className="text-lg font-medium mb-3">{section.category}</h3>
              <ul className="space-y-2">
                {section.points.map((point, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Writing Example</h4>
            <p className="text-sm text-muted-foreground">
              "We're here to help you succeed. Our platform provides powerful tools that make your work easier and more efficient."
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}