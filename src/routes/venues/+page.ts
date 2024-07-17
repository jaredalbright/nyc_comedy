import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { ComedyClubsRecord } from "$lib/xata";

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('api/venues');
    const venues : ComedyClubsRecord[] = await response.json();

    return { venues }
};

