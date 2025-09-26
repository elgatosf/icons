import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-1.282 1.283A2 2 0 0 1 22 6.5V19a2 2 0 0 1-2 2H4.06l-.78.78a.75.75 0 0 1-1.06 0m6.815-5.754a5 5 0 0 0 6.992-6.992l-1.079 1.079a3.5 3.5 0 0 1-4.835 4.835z"
						clipRule="evenodd"
					/>
					<path d="m2 18.82 5.251-5.25a5 5 0 0 1 6.318-6.318l3.13-3.13L15.6 2.752A2 2 0 0 0 14.04 2H9.96a2 2 0 0 0-1.561.75L7.15 4.313a.5.5 0 0 1-.39.188H4a2 2 0 0 0-2 2z" />
					<path d="m8.513 12.308 3.795-3.795a3.5 3.5 0 0 0-3.794 3.794" />
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
						d="M17.854 2.854a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708l.872-.873q.135.02.274.019h12a2 2 0 0 0 2-2V6a2 2 0 0 0-1.388-1.905zM13.16 7.547l-.715.715a3 3 0 0 1-4.184 4.184l-.714.714a4 4 0 0 0 5.613-5.613"
						clipRule="evenodd"
					/>
					<path d="M13.7 3.6c.084.112.19.204.308.27l-2.446 2.447a4 4 0 0 0-5.246 5.246l-4.175 4.175A2 2 0 0 1 2 15V6a2 2 0 0 1 2-2h1.5a1 1 0 0 0 .8-.4l.6-.8A2 2 0 0 1 8.5 2h3a2 2 0 0 1 1.6.8z" />
					<path d="M10 7q.405 0 .777.102l-3.675 3.675A3 3 0 0 1 10 7" />
				</svg>
			);
	}
};

IconCameraOffFilled.iconName = "camera-off--filled";

export default IconCameraOffFilled;
