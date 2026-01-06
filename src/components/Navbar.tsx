
import React from 'react';
import { Globe } from 'lucide-react';

const Navbar = ({ localOverrides = {} }: any) => {
    const data = localOverrides.data || {};
    return (
        <nav className="w-full h-20 flex items-center justify-between px-10 border-b border-white/5 backdrop-blur-xl bg-black/50 sticky top-0 z-50">
            <div className="font-black tracking-[0.3em] text-sm uppercase">{data.header || 'DNA-GEN'}</div>
            <div className="flex gap-10 items-center">
                {(data.links || []).map((l: any, i: number) => (
                    <a key={i} href={l.url} className="text-[10px] font-bold uppercase opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest">{l.label}</a>
                ))}
                <div className="flex items-center gap-2 opacity-30 text-[10px] font-black uppercase"><Globe size={14}/> EN</div>
            </div>
        </nav>
    );
};
export default Navbar;