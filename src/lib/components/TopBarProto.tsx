import Link from "next/link"
import React from "react";

interface Page {
	name: string;
	path: string;
}

export default function TopBarProto({links}: {"links": Page[]}) {
	return (
	<header>
		<div className="flex flex-col pt-4 pl-4">
			<p className="font-bold">aguywhosaguy.com</p>
			{links.map((link, index) => (
				<Link href={"/" + link.path}>{link.name}</Link>
			))}
		</div>
	</header>
	)
	
}