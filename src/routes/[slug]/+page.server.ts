import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import content from '../../data.json';
import type { CardEntry } from '../../types/types';

export const load = (async ({params}) => {
    console.log(params.slug)
    const entry = content.find((e) => e.path === params.slug) as CardEntry | undefined;
    console.log("Pageload", entry)
    if (!entry) error(404);
    return {entry};
}) satisfies PageServerLoad;