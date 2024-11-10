/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconFileDownloadFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		// case 's':
		// case 'm':
		// case 'l':
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M11 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9h-7a2 2 0 0 1-2-2zm1.75 10.75a.75.75 0 0 0-1.5 0v3.438l-.968-.968a.75.75 0 1 0-1.06 1.06l2.248 2.249a.75.75 0 0 0 1.06 0l2.25-2.248a.75.75 0 1 0-1.06-1.061l-.97.969z"
						clipRule="evenodd"
					/>
					<path d="M19.25 9.5 12.5 2.75V9a.5.5 0 0 0 .5.5z" />
				</svg>
			);
	}
};
export default IconFileDownloadFilled;
