import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveDxFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.1964 14.572L21.0003 10.0664C21.9569 9.51413 22.2846 8.29095 21.7324 7.33437L19.2324 3.00424C18.6801 2.04765 17.4569 1.7199 16.5003 2.27219L8.6964 6.77777L13.1964 14.572Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.39736 7.52777L2.99655 10.0686C2.03996 10.6209 1.71221 11.8441 2.2645 12.8006L4.7645 17.1308C5.31678 18.0873 6.53997 18.4151 7.49655 17.8628L11.8974 15.322L7.39736 7.52777ZM8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
			/>
			<path d="M6.5 19.9999V19.6311C7.0937 19.6311 7.69538 19.4798 8.24649 19.1616L11 17.5719V19.9999C11 21.1045 10.1046 21.9999 9 21.9999H8.5C7.39543 21.9999 6.5 21.1045 6.5 19.9999Z" />
		</svg>
	);
};

IconWaveDxFilled.iconName = "wave-dx--filled";

export default IconWaveDxFilled;
