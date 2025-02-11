import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMusic = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="m9.034 5.032 9.984-2.995a.75.75 0 0 1 .68.111.75.75 0 0 1 .302.62V15.5a3.5 3.5 0 1 1-1.5-2.873V3.758L10 6.308V18.5a3.5 3.5 0 1 1-1.5-2.873V5.75a.75.75 0 0 1 .534-.718M18.5 15.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-10 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M12.801 1.1a.5.5 0 0 1 .199.4V11a2 2 0 1 1-1-1.732V2.163L6 3.877V13a2 2 0 1 1-1-1.732V3.5a.5.5 0 0 1 .363-.48l7-2a.5.5 0 0 1 .438.08M12 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-8 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
						clipRule="evenodd"
					/>
				</svg>
			);
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
						d="M15.808 2.106A.5.5 0 0 1 16 2.5v11a2.5 2.5 0 1 1-1-2V3.14L8 4.89V15.5a2.5 2.5 0 1 1-1-2v-9a.5.5 0 0 1 .379-.485l8-2a.5.5 0 0 1 .429.09M15 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-9.5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconMusic.iconName = "music";

export default IconMusic;
