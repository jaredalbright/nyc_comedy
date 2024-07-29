import db from '$lib/database';
import type { PageServerLoad } from './$types';
import { page } from '$app/stores';

export const load: PageServerLoad = async ({params,  parent}) => {
    let clubs = await parent();
    let target = null;

    // Clean up to just use keys
    for (var club in clubs.venues) {
        console.log(clubs.venues[club].slug)
        if (clubs.venues[club].slug == params.slug) {
            target = clubs.venues[club]
            console.log(`DB match found for slug: ${params.slug}`);
            break;
        }
    }

    // Else query DB for slug

    // Then grab schedules


    // Handle Errors

    return { target }
}