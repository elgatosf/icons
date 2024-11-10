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
const IconFacecamOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L20.06 5c.6.007 1.165.283 1.455.809C22.108 6.88 23 8.992 23 11.99v.018c0 3-.892 5.11-1.485 6.182-.294.532-.869.809-1.476.809H6.06l-2.78 2.78a.75.75 0 0 1-1.061 0Zm5.34-4.28h12.48a.34.34 0 0 0 .165-.038c.498-.9 1.296-2.763 1.296-5.453v-.018c0-2.69-.798-4.552-1.296-5.453a.34.34 0 0 0-.166-.038h-1.477L15.31 9.752a4 4 0 0 1-5.557 5.557zm3.284-3.283a2.5 2.5 0 0 0 3.373-3.373z"
						clipRule="evenodd"
					/>
					<path d="m2.54 18.282 1.105-1.106c-.44-.877-1.009-2.375-1.124-4.426H5.25a.75.75 0 0 0 0-1.5H2.52c.13-2.295.826-3.897 1.276-4.713a.34.34 0 0 1 .165-.037h10.36l1.5-1.5H3.96c-.607 0-1.182.277-1.476.809C1.892 6.88 1 8.994 1 12s.892 5.12 1.485 6.191q.026.047.054.09Z" />
					<path d="m8.07 12.75 1.566-1.565c.25-.725.824-1.3 1.55-1.55L12.75 8.07a4 4 0 0 0-4.68 4.68" />
				</svg>
			);
	}
};
export default IconFacecamOff;
