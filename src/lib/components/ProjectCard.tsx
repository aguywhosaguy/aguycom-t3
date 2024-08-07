import { Tag } from "@/app/projects/page";

interface CardDetails {
    name: string;
    tags: Tag[];
    description: string;
    url: string;
}

export default function ProjectCard({details}: {"details": CardDetails}

) {
    return (
    <div className="border-2 w-64 h-48">

    </div>
    )
}