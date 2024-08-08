export interface CardDetails {
    name: string;
    tag: Tag;
    description: string;
    url: string;
}

export enum Tag {
	Website = "website",
	Package = "package",
	Extension = "extension"
}

export function ProjectCard({details}: {"details": CardDetails}) {
    return (
    <div className="relative border-2 w-64 h-48">
        <div className="absolute top-0 left-0 p-2 font-bold justify-start">
            {details.name}
        </div>
        <div>

        </div>
    </div>
    )
}