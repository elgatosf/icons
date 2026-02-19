import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeMediaEncoderColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.7178 9.49902C18.5998 9.49923 19.788 10.7131 19.7881 12.6572C19.7881 12.9545 19.7637 13.2768 19.7266 13.5244H15.6768C15.9245 14.1436 16.5194 14.4404 17.4482 14.4404C18.1168 14.4404 18.6993 14.3164 19.2812 14.0439L19.3057 15.7656C18.6741 16.0876 17.9925 16.1992 17.1133 16.1992C14.9462 16.1991 13.4971 14.9979 13.4971 12.8184C13.4971 10.8245 14.8849 9.49902 16.7178 9.49902ZM16.7295 11.1221C16.1227 11.1221 15.7388 11.4437 15.6025 12.1123H17.7695C17.72 11.5303 17.361 11.1221 16.7295 11.1221Z"
				fill="#9999FF"
			/>
			<path
				d="M8.66992 11.7412L9.8584 7.77832H12.4473L12.9668 16.0752H10.75L10.6387 12.917C10.6139 12.1246 10.5893 11.3321 10.5645 10.5273L9.31348 15.4316H7.82812L6.72559 10.7754C6.68842 11.4934 6.66342 12.2114 6.63867 12.917L6.49023 16.0752H4.40918L4.9541 7.77832H7.56738L8.66992 11.7412Z"
				fill="#9999FF"
			/>
		</svg>
	);
};

IconLogoAdobeMediaEncoderColor.iconName = "logo-adobe-media-encoder--color";

export default IconLogoAdobeMediaEncoderColor;
