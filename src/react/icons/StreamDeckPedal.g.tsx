import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckPedal = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5ZM12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V19C22 20.1046 21.1046 21 20 21H19.0968C18.3631 21 17.7125 20.6025 17.3644 20H6.63561C6.2875 20.6025 5.63691 21 4.90323 21H4C2.89543 21 2 20.1046 2 19V6ZM6.98593 18.5H17.0141L15.3092 5.5H8.69085L6.98593 18.5ZM7.178 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V19C3.5 19.2761 3.72386 19.5 4 19.5H4.90323C5.15424 19.5 5.36635 19.3139 5.39899 19.065L7.178 5.5ZM16.822 5.5L18.601 19.065C18.6337 19.3139 18.8458 19.5 19.0968 19.5H20C20.2761 19.5 20.5 19.2761 20.5 19V6C20.5 5.72386 20.2761 5.5 20 5.5H16.822Z"
			/>
		</svg>
	);
};

IconStreamDeckPedal.iconName = "stream-deck-pedal";

export default IconStreamDeckPedal;
