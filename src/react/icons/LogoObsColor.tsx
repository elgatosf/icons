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
const IconLogoObsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					fill="none"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fill="#C4C2C4"
						fillRule="evenodd"
						d="M12 2.47A9.53 9.53 0 0 0 2.47 12a9.53 9.53 0 1 0 19.06 0A9.53 9.53 0 0 0 12 2.47M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12"
						clipRule="evenodd"
					/>
					<path fill="#302E31" d="M12 21.538A9.54 9.54 0 0 0 21.539 12a9.538 9.538 0 1 0-9.537 9.538" />
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M12 2.924a9.076 9.076 0 1 0 0 18.152 9.076 9.076 0 0 0 0-18.152M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
						clipRule="evenodd"
					/>
					<path
						fill="#C4C2C4"
						d="M7.152 6.991c.293-1.414 1.252-2.69 2.541-3.33-.224.228-.495.402-.703.65a4.06 4.06 0 0 0-1 3.464c.296 1.862 2.047 3.383 3.944 3.357 1.47.065 2.904-.781 3.623-2.057 1.54.052 3.037.847 3.916 2.123.45.666.802 1.447.826 2.26-.285-1.08-1.001-2.039-1.98-2.58a4.08 4.08 0 0 0-3.143-.354c-1.3.373-2.374 1.436-2.744 2.744-.315 1.042-.18 2.19.314 3.144-.687 1.19-1.929 2.04-3.277 2.297-1.036.217-2.126.05-3.09-.387.863.252 1.8.296 2.659-.01a4.1 4.1 0 0 0 2.52-2.445c.464-1.241.288-2.717-.493-3.783a4.1 4.1 0 0 0-2.501-1.641c-.318-.057-.637-.082-.957-.112-.509-1.025-.695-2.216-.44-3.33z"
					/>
				</svg>
			);
	}
};
export default IconLogoObsColor;
