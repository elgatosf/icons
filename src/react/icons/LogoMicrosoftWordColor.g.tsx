import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftWordColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4.5 16.545L11.5 8L19.5 13.5526V19.25C19.5 20.2165 18.7165 21 17.75 21H7.5C5.84315 21 4.5 19.6568 4.5 18V16.545Z"
				fill="url(#paint0_radial_8546_456)"
			/>
			<path
				d="M4.5 10.5192C4.5 9.2766 5.50735 8.26925 6.75 8.26925H16.9445L19.5 7V13.25C19.5 14.2165 18.7165 15 17.75 15H7.5C5.84315 15 4.5 16.3432 4.5 18V10.5192Z"
				fill="url(#paint1_linear_8546_456)"
			/>
			<path
				d="M4.5 10.5192C4.5 9.2766 5.50735 8.26925 6.75 8.26925H16.9445L19.5 7V13.25C19.5 14.2165 18.7165 15 17.75 15H7.5C5.84315 15 4.5 16.3432 4.5 18V10.5192Z"
				fill="url(#paint2_radial_8546_456)"
				fillOpacity={0.6}
			/>
			<path
				d="M4.5 10.5192C4.5 9.2766 5.50735 8.26925 6.75 8.26925H16.9445L19.5 7V13.25C19.5 14.2165 18.7165 15 17.75 15H7.5C5.84315 15 4.5 16.3432 4.5 18V10.5192Z"
				fill="url(#paint3_radial_8546_456)"
				fillOpacity={0.1}
			/>
			<path
				d="M4.5 6C4.5 4.34315 5.84315 3 7.5 3H17.75C18.7165 3 19.5 3.7835 19.5 4.75V7.25C19.5 8.2165 18.7165 9 17.75 9H7.5C5.84315 9 4.5 10.3432 4.5 12V6Z"
				fill="url(#paint4_linear_8546_456)"
			/>
			<path
				d="M4.5 6C4.5 4.34315 5.84315 3 7.5 3H17.75C18.7165 3 19.5 3.7835 19.5 4.75V7.25C19.5 8.2165 18.7165 9 17.75 9H7.5C5.84315 9 4.5 10.3432 4.5 12V6Z"
				fill="url(#paint5_radial_8546_456)"
				fillOpacity={0.8}
			/>
			<path
				d="M8.375 11.5H3.625C2.72754 11.5 2 12.2275 2 13.125V17.875C2 18.7725 2.72754 19.5 3.625 19.5H8.375C9.27246 19.5 10 18.7725 10 17.875V13.125C10 12.2275 9.27246 11.5 8.375 11.5Z"
				fill="url(#paint6_radial_8546_456)"
			/>
			<path
				d="M8.375 11.5H3.625C2.72754 11.5 2 12.2275 2 13.125V17.875C2 18.7725 2.72754 19.5 3.625 19.5H8.375C9.27246 19.5 10 18.7725 10 17.875V13.125C10 12.2275 9.27246 11.5 8.375 11.5Z"
				fill="url(#paint7_radial_8546_456)"
				fillOpacity={0.65}
			/>
			<path
				d="M8.74351 13.2144L7.75891 17.7852L6.58196 17.7858L6.00066 15.0429L5.39216 17.7858H4.20399L3.25781 13.2149H4.22829L4.8121 16.2315L5.39216 13.2149H6.58196L7.18926 16.2315L7.75891 13.2149L8.74351 13.2144Z"
				fill="white"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_8546_456"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(19.0627 20.9996) scale(23.7867 10.0747)"
				>
					<stop offset={0.180414} stopColor="#1657F4" />
					<stop offset={0.574542} stopColor="#0036C4" />
				</radialGradient>
				<linearGradient
					id="paint1_linear_8546_456"
					x1={4.5}
					y1={12.5}
					x2={15.9873}
					y2={12.5}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#66C0FF" />
					<stop offset={0.25606} stopColor="#0094F0" />
				</linearGradient>
				<radialGradient
					id="paint2_radial_8546_456"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(19.5 7.3579) rotate(133.546) scale(14.6824 36.1597)"
				>
					<stop offset={0.140259} stopColor="#D471FF" />
					<stop offset={0.830508} stopColor="#509DF5" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="paint3_radial_8546_456"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(17.3056 14.6154) rotate(90) scale(9.3077 50.8235)"
				>
					<stop offset={0.283333} stopColor="#4F006F" stopOpacity={0} />
					<stop offset={1} stopColor="#4F006F" />
				</radialGradient>
				<linearGradient
					id="paint4_linear_8546_456"
					x1={4.5}
					y1={7.5}
					x2={19.4959}
					y2={7.7477}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#9DEAFF" />
					<stop offset={0.201276} stopColor="#3BD5FF" />
				</linearGradient>
				<radialGradient
					id="paint5_radial_8546_456"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(19.5 3.29281) rotate(166.855) scale(14.7475 35.3218)"
				>
					<stop offset={0.0606583} stopColor="#E4A7FE" />
					<stop offset={0.538869} stopColor="#E4A7FE" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="paint6_radial_8546_456"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(2 11.5) rotate(45) scale(11.3137)"
				>
					<stop offset={0.0811439} stopColor="#367AF2" />
					<stop offset={0.871875} stopColor="#001A8F" />
				</radialGradient>
				<radialGradient
					id="paint7_radial_8546_456"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(6 16.3) rotate(90) scale(5.6 6.3825)"
				>
					<stop offset={0.586954} stopColor="#2763E5" stopOpacity={0} />
					<stop offset={0.973806} stopColor="#58AAFE" />
				</radialGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftWordColor.iconName = "logo-microsoft-word--color";

export default IconLogoMicrosoftWordColor;
