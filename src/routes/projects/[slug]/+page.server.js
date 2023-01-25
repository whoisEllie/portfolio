import { error } from "@sveltejs/kit";
import { projects } from '../data.js';

export function load({ params }) {
	const post = projects.find((project) => project.slug === params.slug);

	if (!post) throw error(404);

	return {
		projects
	};
}
