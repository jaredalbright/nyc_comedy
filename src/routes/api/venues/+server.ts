import { json, type RequestHandler } from "@sveltejs/kit";
import db from '$lib/database'

export const GET: RequestHandler = async (event) => {
    const clubs = await db.db.comedy_clubs.getMany();

    event.setHeaders({
        'Cache-Control': 'public, max-age=0, s-maxage=60'
    })
    
    return json(clubs);
}
