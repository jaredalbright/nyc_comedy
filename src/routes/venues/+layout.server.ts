import db from '$lib/database'
import type { LayoutServerLoad } from './$types';

// Does this actually need to be in layout since we now have access to the parent function
export const load: LayoutServerLoad = async ({ }) => {
    const venues = await db.db.comedy_clubs.getMany();

    return { venues }
}
