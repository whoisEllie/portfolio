import { projects } from './data.js';

export function load() {
	return {
		summaries: projects.map((project) => ({
			slug: project.slug,
			title: project.title,
			image1: project.image1,
			image2: project.image2,
			description: project.description
		}))
	};
}
