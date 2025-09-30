import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipVerticalCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.75 3C6.44665 3 6.17318 3.18273 6.05709 3.46299C5.941 3.74324 6.00517 4.06583 6.21967 4.28033L11.4697 9.53033C11.7626 9.82322 12.2374 9.82322 12.5303 9.53033L17.7803 4.28033C17.9948 4.06583 18.059 3.74324 17.9429 3.46299C17.8268 3.18273 17.5533 3 17.25 3H6.75ZM12 7.93934L8.56066 4.5H15.4393L12 7.93934Z"
			/>
			<path d="M11.4697 14.4697C11.5809 14.3584 11.7184 14.2894 11.8623 14.2627C11.3849 15.0922 11.0854 16.037 11.0157 17.045L8.56066 19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H6.75C6.44665 21 6.17318 20.8173 6.05709 20.537C5.941 20.2568 6.00517 19.9342 6.21967 19.7197L11.4697 14.4697Z" />
			<path d="M3 12C3 12.4142 3.33579 12.75 3.75 12.75H12.25C12.6642 12.75 13 12.4142 13 12C13 11.5858 12.6642 11.25 12.25 11.25H3.75C3.33579 11.25 3 11.5858 3 12Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536L20.3536 16.3536Z"
			/>
		</svg>
	);
};

IconFlipVerticalCheck.iconName = "flip-vertical-check";

export default IconFlipVerticalCheck;
