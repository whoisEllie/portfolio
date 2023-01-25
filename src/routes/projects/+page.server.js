import { projects } from './data.js';

export function load() {
	return {
		summaries: projects.map((project) => ({
			slug: project.slug,
			title: project.title
		}))
	};
}
