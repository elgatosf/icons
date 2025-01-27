import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeakerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
					<path
						fillRule="evenodd"
						d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m2-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSpeakerFilled.iconName = "speaker--filled";

export default IconSpeakerFilled;
