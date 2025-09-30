import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 4C2.89543 4 2 4.89543 2 6V7.5H22V6C22 4.89543 21.1046 4 20 4H4Z" />
			<path d="M22 9H2V18C2 19.1046 2.89543 20 4 20H10.9548C10.6609 19.2271 10.5 18.3887 10.5 17.5127C10.5 13.6467 13.634 10.5127 17.5 10.5127C19.2135 10.5127 20.7832 11.1284 22 12.1506V9Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM20.3536 15.6464C20.5488 15.8417 20.5488 16.1583 20.3536 16.3536L16.8536 19.8536C16.7598 19.9473 16.6326 20 16.5 20C16.3674 20 16.2402 19.9473 16.1464 19.8536L14.1464 17.8536C13.9512 17.6583 13.9512 17.3417 14.1464 17.1464C14.3417 16.9512 14.6583 16.9512 14.8536 17.1464L16.5 18.7929L19.6464 15.6464C19.8417 15.4512 20.1583 15.4512 20.3536 15.6464Z"
			/>
		</svg>
	);
};

IconWindowCheckFilled.iconName = "window-check--filled";

export default IconWindowCheckFilled;
