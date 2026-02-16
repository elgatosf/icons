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
					<path d="M10.0001 10C12.2092 10 14.0001 8.20914 14.0001 6C14.0001 3.79086 12.2092 2 10.0001 2C7.79093 2 6.00007 3.79086 6.00007 6C6.00007 8.20914 7.79093 10 10.0001 10Z" />
					<path d="M16.4672 15.3212C17.0482 16.7238 15.7694 18 14.2512 18H5.74895C4.23079 18 2.95194 16.7238 3.53291 15.3212C3.8847 14.4719 4.40031 13.7003 5.05032 13.0503C5.70033 12.4002 6.47201 11.8846 7.32129 11.5328C8.17057 11.1811 9.08082 11 10.0001 11C10.9193 11 11.8296 11.1811 12.6789 11.5328C13.5281 11.8846 14.2998 12.4002 14.9498 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212Z" />
				</svg>
			);
	}
};

IconPersonFilled.iconName = "person--filled";

export default IconPersonFilled;
