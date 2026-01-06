
import React, { Suspense, useEffect, useState } from 'react';
import { useStore } from '@/store';
import { resolveBlock } from '@/utils/blockRegistry';

export const Viewer = () => {
    const { contentBlocks, importProjectData } = useStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/project-data.json')
            .then(res => res.json())
            .then(data => {
                importProjectData(JSON.stringify(data));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="h-screen flex items-center justify-center bg-black text-white font-black tracking-[0.5em] text-xs uppercase animate-pulse">DNA Matrix Loading...</div>;

    return (
        <main className="min-h-screen bg-black text-white">
            {contentBlocks.map((block) => {
                const Component = resolveBlock(block.type);
                if (!Component) return null;
                return (
                    <Suspense key={block.id} fallback={<div className="h-40 bg-zinc-900/50 animate-pulse" />}>
                        <Component id={block.id} type={block.type} localOverrides={block.localOverrides} />
                    </Suspense>
                );
            })}
        </main>
    );
};