function getRandomProjects(projects, category, limit, currentProjectId) {
	// Filter projects by category
	const categoryProjects = projects.filter(project => project.category === category);

	// Filter out the current project
	const remainingProjects = categoryProjects.filter(project => project.id !== currentProjectId);

	// Shuffle the remaining projects randomly
	const shuffledProjects = remainingProjects.sort(() => Math.random() - 0.5);

	// Limit the number of projects
	const limitedProjects = shuffledProjects.slice(0, limit);

	return limitedProjects;
}

function getTrendingProjects(projects, category, limit) {
	// Filter projects by category
	const categoryProjects = projects.filter(project => project.category === category);

	// Shuffle the projects randomly
	const shuffledProjects = categoryProjects.sort(() => Math.random() - 0.5);

	// Limit the number of projects
	const limitedProjects = shuffledProjects.slice(0, limit);

	return limitedProjects;
}

export { getRandomProjects, getTrendingProjects };