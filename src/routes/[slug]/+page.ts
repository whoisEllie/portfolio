import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = ({ params }) => {
	console.log(params);

	if (params.slug === "warbound") {
		return {
			slug: params.slug
		}
	}

	error(404, 'Project Not found')
}
