import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWebstormColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4.68571 20.0857L2 4.08571L7 2.02856L10.1714 3.91428L13.0857 2.34285L19.1714 4.68571L15.7429 22L4.68571 20.0857Z"
				fill="url(#paint0_linear_3603_1323)"
			/>
			<path
				d="M22.0013 8.77143L19.4299 2.4L14.7442 2L7.51562 8.94286L9.45848 17.8857L13.0871 20.4571L22.0013 15.1429L19.8013 11.0571L22.0013 8.77143Z"
				fill="url(#paint1_linear_3603_1323)"
			/>
			<path d="M18 7.82862L19.8 11.0572L22 8.77148L20.4 4.80005L18 7.82862Z" fill="url(#paint2_linear_3603_1323)" />
			<path d="M18.171 5.82861H5.82812V18.1715H18.171V5.82861Z" fill="black" />
			<path d="M11.6286 15.8572H7V16.6286H11.6286V15.8572Z" fill="white" />
			<path
				d="M13.0586 11.8L13.7157 11C14.1729 11.3715 14.6586 11.6286 15.23 11.6286C15.6872 11.6286 15.9443 11.4572 15.9443 11.1429V11.1143C15.9443 10.8286 15.7729 10.6858 14.9157 10.4572C13.8872 10.2 13.2586 9.91433 13.2586 8.88576V8.85719C13.2586 7.91433 14.0015 7.31433 15.03 7.31433C15.7729 7.31433 16.4015 7.5429 16.9157 7.97147L16.3443 8.82862C15.8872 8.51433 15.4586 8.31433 15.03 8.31433C14.6015 8.31433 14.3729 8.51433 14.3729 8.77147V8.80005C14.3729 9.1429 14.6015 9.25719 15.4586 9.48576C16.4872 9.77147 17.0586 10.1429 17.0586 11.0286V11.0572C17.0586 12.0858 16.2872 12.6572 15.2015 12.6572C14.43 12.6286 13.6586 12.3429 13.0586 11.8Z"
				fill="white"
			/>
			<path
				d="M12.0565 7.42859L11.285 10.4L10.4279 7.42859H9.57076L8.68504 10.4L7.91362 7.42859H6.74219L8.19933 12.5429H9.14219L9.99933 9.57145L10.8279 12.5429H11.7993L13.2565 7.42859H12.0565Z"
				fill="white"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_3603_1323"
					x1={9.16229}
					y1={2.41711}
					x2={14.338}
					y2={21.05}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.2849} stopColor="#00CDD7" />
					<stop offset={0.9409} stopColor="#2086D7" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_3603_1323"
					x1={10.7785}
					y1={4.78123}
					x2={19.5342}
					y2={17.6203}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.1398} stopColor="#FFF045" />
					<stop offset={0.3656} stopColor="#00CDD7" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_3603_1323"
					x1={19.452}
					y1={6.36862}
					x2={20.6017}
					y2={10.4412}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.2849} stopColor="#00CDD7" />
					<stop offset={0.9409} stopColor="#2086D7" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoWebstormColor.iconName = "logo-webstorm--color";

export default IconLogoWebstormColor;
