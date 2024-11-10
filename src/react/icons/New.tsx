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
const IconNew = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m7.359 11.07 2.661-1.05 1.05-2.661c.333-.844 1.527-.844 1.86 0l1.05 2.661 2.661 1.05c.844.333.844 1.527 0 1.86l-2.661 1.05-1.05 2.661c-.333.844-1.527.844-1.86 0l-1.05-2.661-2.661-1.05c-.844-.333-.844-1.527 0-1.86m5.464.107 2.088.823-2.088.823L12 14.912l-.824-2.089L9.088 12l2.088-.823L12 9.088z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M10.59 2.582a2 2 0 0 1 2.82 0l1.182 1.175a2 2 0 0 0 1.404.581l1.667.005a2 2 0 0 1 1.994 1.994l.005 1.667a2 2 0 0 0 .581 1.404l1.175 1.182a2 2 0 0 1 0 2.82l-1.175 1.182a2 2 0 0 0-.581 1.404l-.005 1.667a2 2 0 0 1-1.994 1.994l-1.667.005a2 2 0 0 0-1.404.581l-1.182 1.175a2 2 0 0 1-2.82 0l-1.182-1.175a2 2 0 0 0-1.404-.581l-1.667-.005a2 2 0 0 1-1.994-1.994l-.005-1.667a2 2 0 0 0-.581-1.404L2.582 13.41a2 2 0 0 1 0-2.82l1.175-1.182a2 2 0 0 0 .581-1.404l.005-1.667a2 2 0 0 1 1.994-1.994l1.667-.005a2 2 0 0 0 1.404-.581zm1.762 1.063 1.182 1.175a3.5 3.5 0 0 0 2.458 1.018l1.666.005a.5.5 0 0 1 .499.499l.005 1.666a3.5 3.5 0 0 0 1.018 2.458l1.175 1.181a.5.5 0 0 1 0 .705l-1.175 1.182a3.5 3.5 0 0 0-1.018 2.458l-.005 1.666a.5.5 0 0 1-.499.499l-1.666.005a3.5 3.5 0 0 0-2.458 1.018l-1.182 1.175a.5.5 0 0 1-.705 0l-1.181-1.175a3.5 3.5 0 0 0-2.458-1.018l-1.666-.005a.5.5 0 0 1-.499-.499l-.005-1.666a3.5 3.5 0 0 0-1.018-2.458l-1.175-1.182a.5.5 0 0 1 0-.705l1.175-1.181a3.5 3.5 0 0 0 1.018-2.458l.005-1.666a.5.5 0 0 1 .499-.499l1.666-.005a3.5 3.5 0 0 0 2.458-1.018l1.181-1.175a.5.5 0 0 1 .705 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconNew;
