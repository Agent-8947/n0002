
import { lazy } from 'react';

const load = (name) => lazy(() => import(`../components/${name}`).catch(() => ({ 
  default: () => <div style={{padding: '40px', background: '#111', color: '#444'}}>Block [${name}] is missing. Please copy it to /components/</div> 
})));

export const resolveBlock = (type) => {
    const map = {
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