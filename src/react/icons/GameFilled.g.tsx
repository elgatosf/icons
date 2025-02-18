import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGameFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5.617 5A2 2 0 0 0 3.66 6.58l-1.915 8.938a2.879 2.879 0 0 0 5.118 2.33L9 15h6l2.136 2.849a2.879 2.879 0 0 0 5.118-2.33L20.339 6.58A2 2 0 0 0 18.383 5zM8.75 8.5a.75.75 0 1 0-1.5 0v.75H6.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75zm7.25 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
						d="m10.294 10.47 1.583 2.533a2.122 2.122 0 0 0 3.91-1.324C14.96 2.855 14.473 2 8 2s-6.96.855-7.788 9.68a2.122 2.122 0 0 0 3.91 1.323l1.584-2.533a1 1 0 0 1 .848-.47h2.892a1 1 0 0 1 .848.47M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
					<path d="M8 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
					<path
						fillRule="evenodd"
						d="m14.278 15.845-1.484-2.375a1 1 0 0 0-.848-.47H8.054a1 1 0 0 0-.848.47l-1.484 2.375A2.46 2.46 0 0 1 3.638 17a2.44 2.44 0 0 1-2.435-2.635C2.161 3 3.47 3 10 3s7.839 0 8.797 11.365A2.44 2.44 0 0 1 16.362 17a2.46 2.46 0 0 1-2.084-1.155M9 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconGameFilled.iconName = "game--filled";

export default IconGameFilled;
