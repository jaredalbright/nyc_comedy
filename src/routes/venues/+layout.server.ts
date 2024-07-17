import db from '$lib/database'


export const load: PageServerLoad = async ({ params }) => {
    const clubs = await db.db.comedy_clubs.getMany();
}
