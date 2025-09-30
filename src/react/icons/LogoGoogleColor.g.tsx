import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M21.4182 10.1818H12V14.0546H17.3818C17.1455 15.3 16.4364 16.3546 15.3727 17.0637C14.4818 17.6637 13.3455 18.0273 12 18.0273C9.4 18.0273 7.19091 16.2728 6.4 13.9091H6.38818L6.4 13.9001C6.2 13.3001 6.08182 12.6638 6.08182 12.0001C6.08182 11.3365 6.2 10.7001 6.4 10.1001C7.19091 7.73649 9.4 5.98194 12 5.98194C13.4727 5.98194 14.7818 6.49103 15.8273 7.47285L18.6909 4.60921C16.9545 2.99103 14.7 2.00012 12 2.00012C8.09091 2.00003 4.71818 4.24549 3.07273 7.51821C2.39091 8.86367 2 10.3818 2 12C2 13.6182 2.39091 15.1364 3.07273 16.4818V16.4909C4.71818 19.7546 8.09091 22 12 22C14.7 22 16.9636 21.1091 18.6182 19.5819C20.5091 17.8364 21.6 15.2727 21.6 12.2273C21.6 11.5182 21.5364 10.8364 21.4182 10.1818Z"
				fill="#FC4C53"
			/>
			<mask
				id="mask0_2161_479"
				style={{
					maskType: "luminance",
				}}
				maskUnits="userSpaceOnUse"
				x={2}
				y={2}
				width={20}
				height={20}
			>
				<path
					d="M21.4182 10.1818H12V14.0546H17.3818C17.1455 15.3 16.4364 16.3546 15.3727 17.0637C14.4818 17.6637 13.3455 18.0273 12 18.0273C9.4 18.0273 7.19091 16.2728 6.4 13.9091H6.38818L6.4 13.9001C6.2 13.3001 6.08182 12.6638 6.08182 12.0001C6.08182 11.3365 6.2 10.7001 6.4 10.1001C7.19091 7.73649 9.4 5.98194 12 5.98194C13.4727 5.98194 14.7818 6.49103 15.8273 7.47285L18.6909 4.60921C16.9545 2.99103 14.7 2.00012 12 2.00012C8.09091 2.00003 4.71818 4.24549 3.07273 7.51821C2.39091 8.86367 2 10.3818 2 12C2 13.6182 2.39091 15.1364 3.07273 16.4818V16.4909C4.71818 19.7546 8.09091 22 12 22C14.7 22 16.9636 21.1091 18.6182 19.5819C20.5091 17.8364 21.6 15.2727 21.6 12.2273C21.6 11.5182 21.5364 10.8364 21.4182 10.1818Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_2161_479)">
				<path
					d="M4.40538 22.9467C8.29894 22.9467 11.4553 18.6857 11.4553 13.4295C11.4553 8.17334 8.29894 3.91235 4.40538 3.91235C0.511821 3.91235 -2.64453 8.17334 -2.64453 13.4295C-2.64453 18.6857 0.511821 22.9467 4.40538 22.9467Z"
					fill="url(#paint0_radial_2161_479)"
				/>
				<path
					d="M16.5647 32.601C24.4187 31.62 30.182 25.9925 29.4375 20.0316C28.6929 14.0707 21.7224 10.0337 13.8684 11.0147C6.0144 11.9957 0.251037 17.6233 0.995585 23.5841C1.74013 29.545 8.71065 33.582 16.5647 32.601Z"
					fill="url(#paint1_radial_2161_479)"
				/>
				<path
					d="M11.1855 8.61804L11.6318 13.7055L12.1985 17.1123L18.8909 23.3377L26.7158 8.88577L11.1855 8.61804Z"
					fill="url(#paint2_linear_2161_479)"
				/>
			</g>
			<defs>
				<radialGradient
					id="paint0_radial_2161_479"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(4.40537 13.4291) scale(7.05027 9.51681)"
				>
					<stop offset={0.368} stopColor="#FFCF09" />
					<stop offset={0.7176} stopColor="#FFCF09" stopOpacity={0.7} />
					<stop offset={1} stopColor="#FFCF09" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="paint1_radial_2161_479"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(15.217 21.8085) rotate(-7.1197) scale(14.3318 10.8774)"
				>
					<stop offset={0.3827} stopColor="#34A853" />
					<stop offset={0.7062} stopColor="#34A853" stopOpacity={0.7} />
					<stop offset={1} stopColor="#34A853" stopOpacity={0} />
				</radialGradient>
				<linearGradient
					id="paint2_linear_2161_479"
					x1={22.5068}
					y1={6.80595}
					x2={12.1336}
					y2={19.545}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.6711} stopColor="#4285F4" />
					<stop offset={0.8852} stopColor="#4285F4" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGoogleColor.iconName = "logo-google--color";

export default IconLogoGoogleColor;
