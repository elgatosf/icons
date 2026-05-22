import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGmailColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M18.25 5.50012H23V19.2501C23 20.0785 22.3284 20.7501 21.5 20.7501H19C18.8011 20.7501 18.6103 20.6711 18.4697 20.5304C18.329 20.3898 18.25 20.199 18.25 20.0001V5.50012Z"
				fill="url(#paint0_linear_3601_359)"
			/>
			<path
				d="M5.74999 5.50012H1V19.2501C1 20.0785 1.67162 20.7501 2.5 20.7501H4.99999C5.1989 20.7501 5.38967 20.6711 5.53032 20.5304C5.67097 20.3898 5.74999 20.199 5.74999 20.0001V5.50012Z"
				fill="#FC413D"
			/>
			<path
				d="M4.90326 3.80716C3.89914 2.96316 2.40102 3.09291 1.55702 4.09703C0.713024 5.10103 0.842774 6.59915 1.8469 7.44327L11.3566 15.4369C11.5368 15.5883 11.7647 15.6714 12.0001 15.6714C12.2355 15.6714 12.4633 15.5883 12.6435 15.4369L22.1532 7.44315C23.1572 6.59915 23.287 5.10103 22.443 4.0969C21.599 3.09291 20.1008 2.96316 19.0968 3.80716L12 9.77264L4.90326 3.80716Z"
				fill="url(#paint1_linear_3601_359)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_3601_359"
					x1={20.625}
					y1={5.50012}
					x2={20.625}
					y2={20.7501}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#60D673" />
					<stop offset={0.17} stopColor="#42C868" />
					<stop offset={0.39} stopColor="#0EBC5F" />
					<stop offset={0.62} stopColor="#00A9BB" />
					<stop offset={0.86} stopColor="#3C90FF" />
					<stop offset={1} stopColor="#3186FF" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_3601_359"
					x1={1.00002}
					y1={5.7664}
					x2={23}
					y2={5.7664}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.08} stopColor="#FF63A0" />
					<stop offset={0.3} stopColor="#FC413D" />
					<stop offset={0.5} stopColor="#FC413D" />
					<stop offset={0.65} stopColor="#FC413D" />
					<stop offset={0.72} stopColor="#FC5C30" />
					<stop offset={0.86} stopColor="#FEB10C" />
					<stop offset={0.91} stopColor="#FEC700" />
					<stop offset={0.96} stopColor="#FFDB0F" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGmailColor.iconName = "logo-gmail--color";

export default IconLogoGmailColor;
