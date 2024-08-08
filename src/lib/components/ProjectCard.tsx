export interface CardDetails {
    name: string;
    tag: Tag;
    description: string;
    url: string;
}

export enum Tag {
	Website = "Website",
	Package = "Package",
	Extension = "Extension",
    Other = "Other"
}

export function ProjectCard({details}: {"details": CardDetails}) {
    return (
    <div className="border-2 w-64 h-48 overflow-scroll">
        <p className="p-1 font-bold text-center">
            {details.name}
        </p>
        <p className="p-1 font-light text-center text-sm">
            {details.tag}
        </p>
        <a href={details.url} className="p-2 block text-center text-wrap underline">
            {details.description}
        </a>
    </div>
    )
}