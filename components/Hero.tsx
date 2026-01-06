
import React from 'react';

export const Hero = ({ localOverrides = {} }) => {
    const data = localOverrides.data || {};
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-10">
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-6">{data.title || 'Welcome to DNA Site'}</h1>
            <p className="max-w-2xl text-xl opacity-60 leading-relaxed font-light">{data.description || 'Project data successfully loaded.'}</p>
        </section>
    );
};