/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecam = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3.961 19c-.607 0-1.182-.277-1.476-.809C1.892 17.12 1 15.006 1 12s.892-5.12 1.485-6.191C2.779 5.277 3.354 5 3.96 5h16.08c.607 0 1.182.277 1.476.809C22.108 6.88 23 8.992 23 11.99v.018c0 3-.892 5.11-1.485 6.182-.294.532-.869.809-1.476.809zm16.078-1.5a.34.34 0 0 0 .165-.038c.498-.9 1.296-2.763 1.296-5.453v-.018c0-2.69-.798-4.552-1.296-5.453a.34.34 0 0 0-.166-.038H3.962a.34.34 0 0 0-.165.037c-.45.816-1.146 2.418-1.275 4.713H5.25a.75.75 0 0 1 0 1.5H2.52c.13 2.295.826 3.898 1.276 4.713a.34.34 0 0 0 .165.037zM3.794 6.54l.001-.002z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconFacecam;
