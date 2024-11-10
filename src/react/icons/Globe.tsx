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
const IconGlobe = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-10 8.5c.137 0 .373-.077.688-.456.311-.374.625-.961.902-1.752.498-1.415.836-3.355.9-5.542H9.51c.064 2.187.402 4.127.9 5.542.277.791.591 1.378.902 1.752.315.379.55.456.688.456m-2.49-9.25c.064-2.187.402-4.127.9-5.542.277-.791.591-1.378.902-1.752.315-.379.55-.456.688-.456s.373.077.688.456c.311.374.625.961.902 1.752.498 1.415.836 3.355.9 5.542zm6.48 1.5c-.064 2.323-.421 4.437-.984 6.04a9 9 0 0 1-.597 1.364 8.51 8.51 0 0 0 6.058-7.404zm4.477-1.5H15.99c-.064-2.323-.421-4.437-.984-6.04a9 9 0 0 0-.597-1.364 8.51 8.51 0 0 1 6.058 7.404m-12.457 0H3.533A8.51 8.51 0 0 1 9.59 3.846a9 9 0 0 0-.597 1.365c-.563 1.602-.92 3.716-.984 6.039Zm-4.477 1.5H8.01c.064 2.323.421 4.437.984 6.04.175.496.373.956.597 1.364a8.51 8.51 0 0 1-6.058-7.404"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconGlobe;
