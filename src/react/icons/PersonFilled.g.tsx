import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPersonFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
					<path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9.99995 10C12.2091 10 13.9999 8.20914 13.9999 6C13.9999 3.79086 12.2091 2 9.99995 2C7.79081 2 5.99995 3.79086 5.99995 6C5.99995 8.20914 7.79081 10 9.99995 10Z" />
					<path d="M16.4671 15.3212C17.0481 16.7238 15.7692 18 14.2511 18H5.74883C4.23066 18 2.95182 16.7238 3.53279 15.3212C3.88458 14.4719 4.40019 13.7003 5.0502 13.0503C5.70021 12.4002 6.47189 11.8846 7.32117 11.5328C8.17044 11.1811 9.0807 11 9.99995 11C10.9192 11 11.8295 11.1811 12.6787 11.5328C13.528 11.8846 14.2997 12.4002 14.9497 13.0503C15.5997 13.7003 16.1153 14.4719 16.4671 15.3212Z" />
				</svg>
			);
	}
};

IconPersonFilled.iconName = "person--filled";

export default IconPersonFilled;
