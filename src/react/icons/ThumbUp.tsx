/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m7.5 11 1.994-6.382A2.305 2.305 0 0 1 14 5.305V9h5.381a2 2 0 0 1 1.93 2.526l-1.507 5.526A4 4 0 0 1 15.944 20H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm5-.5h6.881a.5.5 0 0 1 .483.632l-1.507 5.526a2.5 2.5 0 0 1-2.412 1.842H9v-7.271l1.926-6.164a.805.805 0 0 1 1.574.24zm-5 2H5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconThumbUp.iconName = "thumb-up";

export default IconThumbUp;
