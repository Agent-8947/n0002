
import React, { Suspense, useEffect } from 'react';
import { useStore } from '@/store';
import { resolveBlock } from '../utils/blockRegistry';

export const Viewer = () => {
    const { contentBlocks, globalSettings, uiTheme, currentLanguage, importProjectData } = useStore();

    useEffect(() => {
        fetch('/project-data.json')
            .then(res => res.json())
            .then(data => importProjectData(JSON.stringify(data)));
    }, []);

    useEffect(() => {
        if (!globalSettings['GL01']) return;
        const root = document.documentElement;
        const gl01 = globalSettings['GL01'].params;
        const gl02 = globalSettings['GL02']?.params || [];
        
        root.style.setProperty('--dna-font-family', gl01[7]?.value || 'sans-serif');
        root.style.setProperty('--dna-bg', gl02[0]?.value || '#000');
        root.style.setProperty('--dna-text-prim', gl02[3]?.value || '#fff');
    }, [globalSettings]);

    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--dna-bg, #000)', color: 'var(--dna-text-prim, #fff)' }}>
            <div className="viewer-content">
                {contentBlocks.map((block) => {
                    const Component = resolveBlock(block.type);
                    if (!Component) return null;
                    return (
                        <Suspense key={block.id} fallback={<div className="h-20 animate-pulse bg-white/5" />}>
                            <Component id={block.id} type={block.type} localOverrides={block.localOverrides} />
                        </Suspense>
                    );
                })}
            </div>
        </main>
    );
};