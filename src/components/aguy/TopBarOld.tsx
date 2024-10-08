import Link from "next/link"
import React from "react";

interface Page {
	name: string;
	path: string;
}

export default function TopBarOld({links}: {"links": Page[]}) {
	return (
	<header>
		<div className="flex flex-row pt-4 pl-4">
			<span className="font-bold">aguywhosaguy.com</span>
			<span className="mx-2">-</span>
			{links.map((link, index) => (
				<React.Fragment key={index}>
					<Link href={link.path}>{link.name}</Link>
					{index < links.length - 1 && <span className="mx-2">-</span>}
				</React.Fragment>
			))}
		</div>
	</header>
	)
	
}