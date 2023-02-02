import { error } from "@sveltejs/kit";
import { projects } from '../data.js';

export async function load({ params }) {
	const project = projects.find((project) => project.slug === params.slug);
	const markdown = await import(`../${project.slug}.md`);
	const content = markdown.default;

	if (!project) throw error(404);

	return {
		project,
		content
	};
}
