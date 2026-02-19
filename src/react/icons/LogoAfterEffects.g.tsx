import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAfterEffects = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.3994 11.1221C17.0309 11.1221 17.3909 11.5303 17.4404 12.1123H15.2725C15.4086 11.4437 15.7928 11.1222 16.3994 11.1221Z" />
			<path d="M9.74316 12.8428H7.93457L8.83887 10.0566L9.74316 12.8428Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.7715 3C19.5543 3 21 4.44568 21 6.22852V17.7715C21 19.5543 19.5543 21 17.7715 21H6.22852C4.44568 21 3 19.5543 3 17.7715V6.22852C3 4.44568 4.44568 3 6.22852 3H17.7715ZM16.3877 9.49902C14.5548 9.49902 13.168 10.8245 13.168 12.8184C13.168 14.9979 14.6162 16.1991 16.7832 16.1992C17.6626 16.1992 18.3439 16.0876 18.9756 15.7656L18.9512 14.0439C18.3691 14.3164 17.7868 14.4404 17.1182 14.4404C16.1894 14.4404 15.5943 14.1436 15.3467 13.5244H19.3965C19.4336 13.2768 19.459 12.9545 19.459 12.6572C19.4589 10.7131 18.2698 9.49919 16.3877 9.49902ZM7.60059 7.77832L4.54102 16.0752H6.87012L7.27832 14.8125H10.3867L10.7959 16.0752H13.2227L10.251 7.77832H7.60059Z"
			/>
		</svg>
	);
};

IconLogoAfterEffects.iconName = "logo-after-effects";

export default IconLogoAfterEffects;
