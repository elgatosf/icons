import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWebstormColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="url(#prefix__a)" d="M4.686 20.086 2 4.086l5-2.057 3.171 1.885 2.915-1.571 6.085 2.343L15.743 22z" />
			<path
				fill="url(#prefix__b)"
				d="M22 8.771 19.43 2.4 14.743 2 7.515 8.943l1.943 8.943 3.628 2.571L22 15.143l-2.2-4.086z"
			/>
			<path fill="url(#prefix__c)" d="m18 7.829 1.8 3.228L22 8.771 20.4 4.8z" />
			<path fill="#000" d="M18.172 5.829H5.829v12.343h12.343z" />
			<path
				fill="#fff"
				d="M11.629 15.857H7v.772h4.629zM13.058 11.8l.657-.8c.457.371.943.629 1.514.629.457 0 .714-.172.714-.486v-.029c0-.285-.171-.428-1.028-.657-1.029-.257-1.657-.543-1.657-1.571v-.029c0-.943.743-1.543 1.771-1.543.743 0 1.372.229 1.886.657l-.572.858c-.457-.315-.885-.515-1.314-.515-.428 0-.657.2-.657.457V8.8c0 .343.229.457 1.086.686 1.028.285 1.6.657 1.6 1.543v.028c0 1.029-.772 1.6-1.857 1.6a3.38 3.38 0 0 1-2.143-.857M12.058 7.429l-.772 2.971-.857-2.971h-.857L8.686 10.4l-.771-2.971H6.743L8.2 12.543h.943L10 9.57l.829 2.972h.971l1.457-5.114z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={9.162} x2={14.338} y1={2.417} y2={21.05} gradientUnits="userSpaceOnUse">
					<stop offset={0.285} stopColor="#00CDD7" />
					<stop offset={0.941} stopColor="#2086D7" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={10.777} x2={19.533} y1={4.781} y2={17.62} gradientUnits="userSpaceOnUse">
					<stop offset={0.14} stopColor="#FFF045" />
					<stop offset={0.366} stopColor="#00CDD7" />
				</linearGradient>
				<linearGradient id="prefix__c" x1={19.452} x2={20.602} y1={6.369} y2={10.441} gradientUnits="userSpaceOnUse">
					<stop offset={0.285} stopColor="#00CDD7" />
					<stop offset={0.941} stopColor="#2086D7" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoWebstormColor.iconName = "logo-webstorm--color";

export default IconLogoWebstormColor;
