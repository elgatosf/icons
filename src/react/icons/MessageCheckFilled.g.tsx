import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 22C12.2628 22 12.5232 21.9899 12.7809 21.97C11.6771 20.805 11 19.2316 11 17.5C11 13.9101 13.9101 11 17.5 11C19.2315 11 20.805 11.6771 21.9699 12.7809C21.9898 12.5232 22 12.2628 22 12C22 6.47715 17.5228 2 12 2C6.47711 2 1.99996 6.47715 1.99996 12C1.99996 13.6539 2.40145 15.214 3.11228 16.5881L1.96041 20.8117C1.75682 21.5582 2.44179 22.2431 3.18829 22.0395L7.41182 20.8877C8.786 21.5985 10.3461 22 12 22Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536L20.3536 16.3536Z"
			/>
		</svg>
	);
};

IconMessageCheckFilled.iconName = "message-check--filled";

export default IconMessageCheckFilled;
