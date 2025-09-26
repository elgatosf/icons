import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCamera = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-1.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M8.4 2.75 7.15 4.313a.5.5 0 0 1-.39.188H4a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2h-2.76a.5.5 0 0 1-.39-.188L15.6 2.751A2 2 0 0 0 14.04 2H9.96a2 2 0 0 0-1.561.75M3.5 19V6.5A.5.5 0 0 1 4 6h2.76a2 2 0 0 0 1.561-.75l1.25-1.562a.5.5 0 0 1 .39-.188h4.078a.5.5 0 0 1 .39.188l1.25 1.561A2 2 0 0 0 17.24 6H20a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5"
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
						d="M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="m6.9 2.8-.6.8a1 1 0 0 1-.8.4H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.5a1 1 0 0 1-.8-.4l-.6-.8a2 2 0 0 0-1.6-.8h-3a2 2 0 0 0-1.6.8M17 15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.5a2 2 0 0 0 1.6-.8l.6-.8a1 1 0 0 1 .8-.4h3a1 1 0 0 1 .8.4l.6.8a2 2 0 0 0 1.6.8H16a1 1 0 0 1 1 1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCamera.iconName = "camera";

export default IconCamera;
