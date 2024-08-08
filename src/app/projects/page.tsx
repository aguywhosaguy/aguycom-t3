import {ProjectCard, Tag} from "@/lib/components/ProjectCard";

import type {CardDetails} from "@/lib/components/ProjectCard"



const Projects: CardDetails[] = [
	{
		"name": "Thirty Dollar Extension",
		"tag": Tag.Extension,
		"description": "An extension that adds custom sounds to GDColon's 30 Dollar Website",
		"url": "https://github.com/aguywhosaguy/thirtydollarcustomsounds"
	},
	{
		"name": "Demon List Spreadsheet",
		"tag": Tag.Other,
		"description": "A Google Spreadsheet with tools for managing a list for Geometry Dash",
		"url": "https://github.com/aguywhosaguy/SpreadsheetDemonlist"
	}
]

export default function ProjectsPage() {
	return (
	  <main className="px-20 py-30 my-20 mx-auto max-w-6xl">
		<div className="space-y-5">
			<h1 className="text-5xl font-bold">Projects</h1>
			<div className="flex flex-wrap justify-center align-middle border-4 border-black max-w-5xl gap-10 p-4">
			{Projects.map((project: CardDetails) => (
				<ProjectCard details={project} key={project.name}/>
			))}
			</div>
		</div>
	  </main>
  );
}
  