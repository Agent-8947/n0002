
import React from 'react';

const Hero = ({ localOverrides = {} }: any) => {
    const data = localOverrides.data || {};
    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-30" />
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 relative z-10 leading-[0.8] max-w-5xl">
              {data.title || 'ARCHITECTING DIGITAL DNA'}
            </h1>
            <p className="max-w-xl text-lg opacity-40 leading-relaxed font-medium relative z-10 uppercase tracking-[0.2em] text-[10px]">
              {data.description || 'Synchronized parameters across all nodes.'}
            </p>
        </section>
    );
};
export default Hero;