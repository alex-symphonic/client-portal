import React from 'react';
import { LayoutDashboard, CheckSquare, Palette, FolderOpen, Briefcase, Menu, ChartSpline } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Overview', href: '/', icon: LayoutDashboard },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Brand Guide', href: '/brand', icon: Palette },
  { name: 'Files/Assets', href: '/files', icon: FolderOpen },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Reports', href: '/reports', icon: ChartSpline },
];

export function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-y-5 bg-muted/30 px-6 py-4">
      <div className="flex h-16 items-center">
        <Button variant="ghost" className="h-10 w-10 p-0">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <span className="ml-4 text-xl font-semibold">Dashboard</span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-accent hover:text-accent-foreground',
                      item.href === '/' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}