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
const IconLogoMicrosoftVisio = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21.375 7.83v7.715a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244h-4.19a4.5 4.5 0 0 1-.449 1.719 4.9 4.9 0 0 1-1.015 1.386 4.5 4.5 0 0 1-1.456.928 4.8 4.8 0 0 1-1.748.342 4.5 4.5 0 0 1-1.582-.283 4.78 4.78 0 0 1-2.422-1.963A4.2 4.2 0 0 1 7.108 17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7h4.23A.8.8 0 0 1 7 6.687a.8.8 0 0 1 .244-.585l3.858-3.858A.8.8 0 0 1 11.687 2q.342 0 .586.244l3.858 3.858a.8.8 0 0 1 .244.585q0 .166-.059.313h4.229a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586m-9.688-4.404-3.26 3.261.311.313h2.432a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v1.807l2.95-2.95zM7.781 15.28l2.49-6.562h-1.62q-.41 1.2-.83 2.383-.42 1.181-.811 2.392-.4-1.2-.801-2.383l-.81-2.392h-1.66l2.45 6.562zm3.907 4.219a3.4 3.4 0 0 0 1.337-.264 3.3 3.3 0 0 0 1.094-.742 3.48 3.48 0 0 0 1.006-2.432q0-.654-.244-1.25a3.7 3.7 0 0 0-.664-1.064 3.4 3.4 0 0 0-.987-.762 3.2 3.2 0 0 0-1.23-.341v3.525a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H8.396q.166.547.479 1.006a3.4 3.4 0 0 0 1.7 1.309 3.3 3.3 0 0 0 1.112.185Zm8.437-4.375V8.25h-4.97q-.108.108-.352.361a40 40 0 0 1-.576.586q-.333.333-.684.694t-.674.664l-.547.517q-.225.216-.322.244v.079q.781.03 1.484.332a5 5 0 0 1 1.28.8q.576.498.957 1.172.38.675.547 1.426h3.857Z" />
				</svg>
			);
	}
};
export default IconLogoMicrosoftVisio;
