import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSubscriptionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M13.5 2a.5.5 0 0 1 .5.5V4h1l.204.01A2 2 0 0 1 17 6v9l-.01.204a2 2 0 0 1-1.786 1.785L15 17H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 15V6a2 2 0 0 1 1.796-1.99L5 4h1V2.5a.5.5 0 0 1 1 0V4h6V2.5a.5.5 0 0 1 .5-.5m-7 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1.202c.296.494.709.91 1.207 1.208a3.502 3.502 0 0 0 4.995-1.594l.096-.24a.5.5 0 0 0-.899-.427l-.043.092A2.5 2.5 0 0 1 8 12h.5a.5.5 0 0 0 0-1zm7-4a.5.5 0 0 0-.5.5v1.201a3.498 3.498 0 0 0-6.204.39l-.097.245a.5.5 0 0 0 .9.425l.044-.092a2.502 2.502 0 0 1 3.698-1.28c.256.163.478.37.658.611H11.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSubscriptionFilled.iconName = "subscription--filled";

export default IconSubscriptionFilled;
