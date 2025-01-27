import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHelpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-12C8.735 6 8.127 7.055 7.985 7.621a.5.5 0 1 1-.97-.242C7.207 6.612 8.065 5 10 5c1.74 0 3 1.19 3 2.75 0 1.175-.876 1.747-1.477 2.138l-.058.037c-.304.198-.542.352-.718.531-.167.17-.247.332-.247.544a.5.5 0 0 1-1 0c0-.538.233-.939.534-1.245.257-.262.587-.475.865-.655l.079-.05C11.625 8.628 12 8.325 12 7.75 12 6.81 11.26 6 10 6m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHelpFilled.iconName = "help--filled";

export default IconHelpFilled;
