/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayProject = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.75a.75.75 0 0 1 0-1.5H20a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v.75a.75.75 0 0 1-1.5 0z" />
			<path
				fillRule="evenodd"
				d="M4 8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm11 1.5H4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
			<path d="M7 20.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75" />
		</svg>
	);
};

IconDisplayProject.iconName = "display-project";

export default IconDisplayProject;
