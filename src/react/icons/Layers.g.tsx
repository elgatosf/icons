import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLayers = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M21.674 7.505a1 1 0 0 1 0 1.688l-8.6 5.473a2 2 0 0 1-2.148 0l-8.6-5.473a1 1 0 0 1 0-1.688l8.6-5.473a2 2 0 0 1 2.148 0zM11.732 13.4 3.794 8.35l7.938-5.051a.5.5 0 0 1 .536 0l7.938 5.05-7.938 5.052a.5.5 0 0 1-.536 0Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M1.98 11.736a.75.75 0 0 1 1.036-.23l8.716 5.546a.5.5 0 0 0 .537 0l8.715-5.546a.75.75 0 1 1 .805 1.266l-8.715 5.546a2 2 0 0 1-2.148 0l-8.715-5.546a.75.75 0 0 1-.23-1.036Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M1.98 15.386a.75.75 0 0 1 1.036-.23l8.716 5.546a.5.5 0 0 0 .537 0l8.715-5.546a.75.75 0 1 1 .805 1.266l-8.715 5.546a2 2 0 0 1-2.148 0l-8.715-5.546a.75.75 0 0 1-.23-1.036Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLayers.iconName = "layers";

export default IconLayers;
