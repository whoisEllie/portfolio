import { error } from "@sveltejs/kit";

export async function load({ params }: { params: any }) {

	try {

		const post = await import(`../../lib/markdown/${params.slug}.svx`);

		console.log(post);

		return {
			slug: params.slug,
			content: post.default,
		}
	} catch (err) {
		//TODO: Make this more representative of the actual error :)
		error(404, "Project not found")
	}

}
