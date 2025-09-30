import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMailFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21.8408 5.21875C21.9428 5.45884 22 5.72268 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 5.72281 2.05627 5.45875 2.1582 5.21875L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L21.8408 5.21875Z" />
					<path d="M20 4C20.2769 4 20.5405 4.05649 20.7803 4.1582L12 12.9395L3.21875 4.1582C3.45875 4.05627 3.72281 4 4 4H20Z" />
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
					<path d="M17.7207 4.98535C17.8967 5.28312 18 5.62907 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 5.62925 2.10251 5.28303 2.27832 4.98535L9.64648 12.3535C9.84174 12.5488 10.1583 12.5488 10.3535 12.3535L17.7207 4.98535Z" />
					<path d="M16 4C16.3704 4 16.7162 4.10278 17.0137 4.27832L10 11.293L2.98535 4.27832C3.28303 4.10251 3.62925 4 4 4H16Z" />
				</svg>
			);
	}
};

IconMailFilled.iconName = "mail--filled";

export default IconMailFilled;
