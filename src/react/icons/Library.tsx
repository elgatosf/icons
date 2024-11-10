/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types.js";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconLibrary = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 4.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5m1.674-.594A2 2 0 0 0 6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5c0-.404-.12-.78-.326-1.094m1.652 0A2 2 0 0 0 9 5v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1c-.7 0-1.317.36-1.674.906m6.174 1.81a2 2 0 0 0-.621 1.841l2.17 11.802a2 2 0 0 0 2.328 1.606l.984-.181a2 2 0 0 0 1.605-2.329l-2.17-11.802a2 2 0 0 0-2.329-1.606l-.983.181a2 2 0 0 0-.984.487ZM12 4.5h-1a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5m5.739 2.023-.984.18a.5.5 0 0 0-.401.583l2.17 11.802a.5.5 0 0 0 .582.401l.983-.18a.5.5 0 0 0 .402-.583L18.32 6.924a.5.5 0 0 0-.582-.401Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLibrary;
