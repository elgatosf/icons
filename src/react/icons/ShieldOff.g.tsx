import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShieldOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M6.06 16.883a17 17 0 0 0 5.157 4.703c.49.284 1.076.284 1.566 0 2.091-1.213 7.686-5.204 8.182-13.407.044-.725-.359-1.398-.994-1.75L17.75 5.194l-1.104 1.103 2.598 1.443c.174.097.23.248.225.348-.452 7.466-5.527 11.092-7.438 12.2-.018.011-.027.011-.03.011s-.012 0-.03-.01a15.4 15.4 0 0 1-4.834-4.483zm.268-2.39-1.102 1.102c-1.135-1.949-2.008-4.397-2.19-7.416-.045-.725.358-1.398.993-1.75l7-3.89a2 2 0 0 1 1.942 0l3.414 1.897-1.103 1.103-3.04-1.688a.5.5 0 0 0-.485 0l-7 3.889c-.174.097-.23.248-.224.348.155 2.573.86 4.69 1.795 6.405" />
			<path d="M2.22 20.72a.75.75 0 1 0 1.06 1.06l18.5-18.5a.75.75 0 0 0-1.06-1.06z" />
		</svg>
	);
};

IconShieldOff.iconName = "shield-off";

export default IconShieldOff;
