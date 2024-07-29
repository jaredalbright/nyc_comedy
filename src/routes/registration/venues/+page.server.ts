import db from "$lib/database";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { zfd } from "zod-form-data";
import { slugify } from "../../../params/slug";


async function sleeper(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const actions: Actions = {
    addVenue: async ({request}) => {
        const formData = await request.formData();

        const venue_schema = zfd.formData({
            venue_name: zfd.text(),
            hood: zfd.text(),
            address: zfd.text(),
            website: zfd.text(),
            type: zfd.text()
        })


        const result = venue_schema.safeParse(formData);

        if (!result.success) {
            const data = {
                data: Object.fromEntries(formData),
                errors: result.error.flatten().fieldErrors
            }

            return fail(400, data)
        }

        // try {
        //     const res = await db.db.comedy_clubs.create({
        //         club_name: result.data.venue_name,
        //         neighborhood: result.data.hood,
        //         address: result.data.address,
        //         slug: slugify(result.data.venue_name),
        //         type: result.data.type,
        //         website: result.data.website,
        //         self_managed: false
        //     })
        // }
        // catch (e) {
        //     return fail(400, {error: e.message})
        // }
        
        throw redirect(303, '/registration/venues/submitted')
    }
};

