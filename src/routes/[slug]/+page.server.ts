import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import content from '../../data.json';

export const load = (async ({params}) => {
    console.log(params.slug)
    const entry = content.find((e) => e.path === params.slug);
    console.log("Pageload", entry)
    if (!entry) error(404);
    return {entry};
}) satisfies PageServerLoad;