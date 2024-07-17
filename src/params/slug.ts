import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
    return /^[a-z0-9-_]+$/.test(param)
}

export const slugify = (text : String) => {
    return text
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_$/g, '')
        .replace(/__/g, '_')
        .toLowerCase()
}