import type { PageLoad } from "../projects/[slug]/$types"

export const load: PageLoad = ({ params }) => {
	console.log(params);
	return {
		slug: params.slug
	}
}
