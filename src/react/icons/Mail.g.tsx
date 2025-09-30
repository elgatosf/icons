import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMail = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20ZM12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L3.5 6.56055V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6.56055L12.5303 14.5303ZM12 12.9395L19.4395 5.5H4.56055L12 12.9395Z"
					/>
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 4C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4H16ZM10.3535 12.3535C10.1583 12.5488 9.84174 12.5488 9.64648 12.3535L3.03418 5.74121C3.01211 5.82378 3 5.91047 3 6V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V6C17 5.91038 16.987 5.82386 16.9648 5.74121L10.3535 12.3535ZM4 5C3.91047 5 3.82378 5.01211 3.74121 5.03418L10 11.293L16.2578 5.03418C16.1755 5.01227 16.0892 5 16 5H4Z"
					/>
				</svg>
			);
	}
};

IconMail.iconName = "mail";

export default IconMail;
