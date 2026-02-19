import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAfterEffectsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				d="M17.7719 3H6.22811C4.44527 3 3 4.44527 3 6.22811V17.7719C3 19.5548 4.44527 21 6.22811 21H17.7719C19.5548 21 21 19.5548 21 17.7719V6.22811C21 4.44527 19.5548 3 17.7719 3Z"
				fill="#00005B"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.3877 9.49902C18.2698 9.49919 19.4589 10.7131 19.459 12.6572C19.459 12.9545 19.4336 13.2768 19.3965 13.5244H15.3467C15.5943 14.1436 16.1894 14.4404 17.1182 14.4404C17.7868 14.4404 18.3691 14.3164 18.9512 14.0439L18.9756 15.7656C18.3439 16.0876 17.6626 16.1992 16.7832 16.1992C14.6162 16.1991 13.168 14.9979 13.168 12.8184C13.168 10.8245 14.5548 9.49902 16.3877 9.49902ZM16.3994 11.1221C15.7928 11.1222 15.4086 11.4437 15.2725 12.1123H17.4404C17.3909 11.5303 17.0309 11.1221 16.3994 11.1221Z"
				fill="#9999FF"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.2227 16.0752H10.7959L10.3867 14.8125H7.27832L6.87012 16.0752H4.54102L7.60059 7.77832H10.251L13.2227 16.0752ZM7.93457 12.8428H9.74316L8.83887 10.0566L7.93457 12.8428Z"
				fill="#9999FF"
			/>
		</svg>
	);
};

IconLogoAfterEffectsColor.iconName = "logo-after-effects--color";

export default IconLogoAfterEffectsColor;
