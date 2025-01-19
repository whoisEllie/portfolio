import type { PageLoad } from "../projects/[slug]/$types"

export const load: PageLoad = ({ params }) => {
	return {
		slug: params.slug
	}
}
