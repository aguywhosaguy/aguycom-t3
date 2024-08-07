import ProjectCard from "@/lib/components/ProjectCard";

export enum Tag {
	Website = "website",
	Package = "package"
}

export default function ProjectsPage() {
	return (
	  <main className="px-20 py-30 my-20 mx-auto max-w-5xl">
		<div className="space-y-5">
		  <h1 className="text-5xl font-bold">Projects</h1>
		  <div className="flex flex-wrap justify-center align-middle border-4 border-black max-w-5xl gap-10 p-4">
		  </div>
		</div>
		<div className="w-4"></div>
	  </main>
	);
  }
  