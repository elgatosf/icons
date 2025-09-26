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
						d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-7.47 10.53a.75.75 0 0 1-1.06 0L3.5 6.56V18a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V6.56zM12 12.94l7.44-7.44H4.56z"
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
						d="M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-5.646 8.354a.5.5 0 0 1-.708 0L3.034 5.74A1 1 0 0 0 3 6v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-.035-.259zM4 5a1 1 0 0 0-.259.034L10 11.293l6.258-6.259A1 1 0 0 0 16 5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconMail.iconName = "mail";

export default IconMail;
