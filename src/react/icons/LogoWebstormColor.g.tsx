import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoWebstormColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="url(#prefix__paint0_linear_3603_1323)" d="M4.68571 20.0857L2 4.08571L7 2.02856L10.1714 3.91428L13.0857 2.34285L19.1714 4.68571L15.7429 22L4.68571 20.0857Z" /><path fill="url(#prefix__paint1_linear_3603_1323)" d="M22.0004 8.77143L19.4289 2.4L14.7432 2L7.51465 8.94286L9.45751 17.8857L13.0861 20.4571L22.0004 15.1429L19.8004 11.0571L22.0004 8.77143Z" /><path fill="url(#prefix__paint2_linear_3603_1323)" d="M18 7.82862L19.8 11.0572L22 8.77148L20.4 4.80005L18 7.82862Z" /><path fill="black" d="M18.172 5.82861H5.8291V18.1715H18.172V5.82861Z" /><path fill="white" d="M11.6286 15.8572H7V16.6286H11.6286V15.8572Z" /><path fill="white" d="M13.0576 11.8L13.7148 11C14.1719 11.3715 14.6576 11.6286 15.229 11.6286C15.6862 11.6286 15.9433 11.4572 15.9433 11.1429V11.1143C15.9433 10.8286 15.7719 10.6858 14.9148 10.4572C13.8862 10.2 13.2576 9.91433 13.2576 8.88576V8.85719C13.2576 7.91433 14.0005 7.31433 15.029 7.31433C15.7719 7.31433 16.4005 7.5429 16.9148 7.97147L16.3433 8.82862C15.8862 8.51433 15.4576 8.31433 15.029 8.31433C14.6005 8.31433 14.3719 8.51433 14.3719 8.77147V8.80005C14.3719 9.1429 14.6005 9.25719 15.4576 9.48576C16.4862 9.77147 17.0576 10.1429 17.0576 11.0286V11.0572C17.0576 12.0858 16.2862 12.6572 15.2005 12.6572C14.429 12.6286 13.6576 12.3429 13.0576 11.8Z" /><path fill="white" d="M12.0575 7.42859L11.286 10.4L10.4289 7.42859H9.57174L8.68602 10.4L7.91459 7.42859H6.74316L8.20031 12.5429H9.14316L10.0003 9.57145L10.8289 12.5429H11.8003L13.2575 7.42859H12.0575Z" /><defs><linearGradient id="paint0_linear_3603_1323" x1={9.162} x2={14.338} y1={2.417} y2={21.05} gradientUnits="userSpaceOnUse"><stop offset={0.285} stopColor="#00CDD7" /><stop offset={0.941} stopColor="#2086D7" /></linearGradient><linearGradient id="paint1_linear_3603_1323" x1={10.777} x2={19.533} y1={4.781} y2={17.62} gradientUnits="userSpaceOnUse"><stop offset={0.14} stopColor="#FFF045" /><stop offset={0.366} stopColor="#00CDD7" /></linearGradient><linearGradient id="paint2_linear_3603_1323" x1={19.452} x2={20.602} y1={6.369} y2={10.441} gradientUnits="userSpaceOnUse"><stop offset={0.285} stopColor="#00CDD7" /><stop offset={0.941} stopColor="#2086D7" /></linearGradient></defs>
		</svg>
	);
};

LogoWebstormColor.iconName = "logo-webstorm--color";

export default LogoWebstormColor;