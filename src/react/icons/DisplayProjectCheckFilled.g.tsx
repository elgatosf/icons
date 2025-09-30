import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayProjectCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 3C7.89543 3 7 3.89543 7 5V6.5H15C16.933 6.5 18.5 8.067 18.5 10V11.0764C19.6077 11.2475 20.6231 11.6982 21.4718 12.3542C21.7997 11.998 22 11.5224 22 11V5C22 3.89543 21.1046 3 20 3H9Z" />
			<path d="M17 10V11.0189C13.6438 11.2743 11 14.0784 11 17.5C11 17.6682 11.0064 17.835 11.0189 18H4C2.89543 18 2 17.1046 2 16V10C2 8.89543 2.89543 8 4 8H15C16.1046 8 17 8.89543 17 10Z" />
			<path d="M11.25 19.5C11.2717 19.5 11.2932 19.5009 11.3144 19.5027C11.4509 19.9246 11.6293 20.3276 11.8448 20.7069C11.7077 20.8851 11.4923 21 11.25 21H7.75C7.33579 21 7 20.6642 7 20.25C7 19.8358 7.33579 19.5 7.75 19.5H11.25Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM16.8536 19.8536L20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536Z"
			/>
		</svg>
	);
};

IconDisplayProjectCheckFilled.iconName = "display-project-check--filled";

export default IconDisplayProjectCheckFilled;
