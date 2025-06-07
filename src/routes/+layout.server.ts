import type { LayoutServerLoad } from './$types';
import content from '../data.json';

export const load = (() => {
    console.log("Layout Server load")
    return {
        thumbs: content.map((e) => ({
            name: e.name,
            path: e.path
        }))
    };
}) satisfies LayoutServerLoad;

export const prerender = true;