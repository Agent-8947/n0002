
import React, { lazy } from 'react';

const load = (name: string) => lazy(() => 
  import(`../components/${name}`)
    .then(mod => ({ default: mod.default || mod[name] }))
    .catch(() => ({ 
      default: () => (
        <div className="p-20 bg-zinc-900 border border-dashed border-zinc-700 text-zinc-500 text-center rounded-3xl m-10">
          <div className="text-sm font-black uppercase tracking-widest mb-2">Block [ ${name} ] Missing</div>
          <div className="text-[10px] opacity-50">Please copy this component to /components/${name}.tsx</div>
        </div>
      )
    }))
);

export const resolveBlock = (type: string) => {
    const map: Record<string, string> = {
        'B0101': 'Navbar', 'B0102': 'Navbar',
        'B0201': 'Hero', 'B0202': 'Hero', 'B0203': 'Hero',
        'B0301': 'Skills', 'B0302': 'Skills',
        'B0401': 'Article', 'B0402': 'Article',
        'B0501': 'Portfolio', 'B0503': 'Portfolio',
        'B1401': 'Footer'
    };
    const name = map[type];
    return name ? load(name) : null;
};