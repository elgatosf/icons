/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFolder = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.586a1 1 0 0 1-.707-.293L9.586 3.586A2 2 0 0 0 8.172 3zm16.5 15V8a.5.5 0 0 0-.5-.5h-7.586a2.5 2.5 0 0 1-1.768-.732l-2.12-2.122a.5.5 0 0 0-.354-.146H4a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFolder.iconName = "folder";

export default IconFolder;
