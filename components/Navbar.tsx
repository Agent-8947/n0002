
import React from 'react';
import { useStore } from '@/store';
import { Globe } from 'lucide-react';

export const Navbar = ({ data = {}, localOverrides = {} }) => {
    const { currentLanguage } = useStore();
    const isDark = true;
    const finalData = localOverrides.data || {};
    
    return (
        <nav className="w-full h-20 flex items-center justify-between px-10 border-b border-white/10 backdrop-blur-md">
            <div className="font-bold tracking-widest">{finalData.header || 'DNA-PROJECT'}</div>
            <div className="flex gap-8 items-center">
                {(finalData.links || []).map((l, i) => (
                    <a key={i} href={l.url} className="text-[10px] uppercase opacity-50 hover:opacity-100">{l.label}</a>
                ))}
                <div className="flex items-center gap-1 opacity-50 text-[10px]"><Globe size={14}/>{currentLanguage.toUpperCase()}</div>
            </div>
        </nav>
    );
};