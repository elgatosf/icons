import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftSharepointColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.5 14C12.8137 14 15.5 11.3137 15.5 8C15.5 4.68629 12.8137 2 9.5 2C6.1863 2 3.5 4.68629 3.5 8C3.5 11.3137 6.1863 14 9.5 14Z"
				fill="url(#paint0_linear_8545_390)"
			/>
			<path
				d="M9.5 14C12.8137 14 15.5 11.3137 15.5 8C15.5 4.68629 12.8137 2 9.5 2C6.1863 2 3.5 4.68629 3.5 8C3.5 11.3137 6.1863 14 9.5 14Z"
				fill="url(#paint1_radial_8545_390)"
				fillOpacity={0.2}
			/>
			<path
				d="M9.5 14C12.8137 14 15.5 11.3137 15.5 8C15.5 4.68629 12.8137 2 9.5 2C6.1863 2 3.5 4.68629 3.5 8C3.5 11.3137 6.1863 14 9.5 14Z"
				fill="url(#paint2_radial_8545_390)"
				fillOpacity={0.31}
			/>
			<path
				d="M9.5 14C12.8137 14 15.5 11.3137 15.5 8C15.5 4.68629 12.8137 2 9.5 2C6.1863 2 3.5 4.68629 3.5 8C3.5 11.3137 6.1863 14 9.5 14Z"
				fill="url(#paint3_radial_8545_390)"
				fillOpacity={0.7}
			/>
			<path
				d="M14.9727 18C17.7341 18 19.9727 15.7614 19.9727 13C19.9727 10.2386 17.7341 8 14.9727 8C12.2113 8 9.97266 10.2386 9.97266 13C9.97266 15.7614 12.2113 18 14.9727 18Z"
				fill="url(#paint4_linear_8545_390)"
			/>
			<path
				d="M14.9727 18C17.7341 18 19.9727 15.7614 19.9727 13C19.9727 10.2386 17.7341 8 14.9727 8C12.2113 8 9.97266 10.2386 9.97266 13C9.97266 15.7614 12.2113 18 14.9727 18Z"
				fill="url(#paint5_radial_8545_390)"
				fillOpacity={0.5}
			/>
			<path
				d="M14.9727 18C17.7341 18 19.9727 15.7614 19.9727 13C19.9727 10.2386 17.7341 8 14.9727 8C12.2113 8 9.97266 10.2386 9.97266 13C9.97266 15.7614 12.2113 18 14.9727 18Z"
				fill="url(#paint6_radial_8545_390)"
				fillOpacity={0.7}
			/>
			<path
				d="M10.25 22C12.5972 22 14.5 20.0972 14.5 17.75C14.5 15.4028 12.5972 13.5 10.25 13.5C7.9028 13.5 6 15.4028 6 17.75C6 20.0972 7.9028 22 10.25 22Z"
				fill="url(#paint7_linear_8545_390)"
			/>
			<path
				d="M10.25 22C12.5972 22 14.5 20.0972 14.5 17.75C14.5 15.4028 12.5972 13.5 10.25 13.5C7.9028 13.5 6 15.4028 6 17.75C6 20.0972 7.9028 22 10.25 22Z"
				fill="url(#paint8_linear_8545_390)"
				fillOpacity={0.32}
			/>
			<path
				d="M8.375 11.5H3.625C2.72754 11.5 2 12.2275 2 13.125V17.875C2 18.7725 2.72754 19.5 3.625 19.5H8.375C9.27246 19.5 10 18.7725 10 17.875V13.125C10 12.2275 9.27246 11.5 8.375 11.5Z"
				fill="url(#paint9_radial_8545_390)"
			/>
			<path
				d="M8.375 11.5H3.625C2.72754 11.5 2 12.2275 2 13.125V17.875C2 18.7725 2.72754 19.5 3.625 19.5H8.375C9.27246 19.5 10 18.7725 10 17.875V13.125C10 12.2275 9.27246 11.5 8.375 11.5Z"
				fill="url(#paint10_radial_8545_390)"
				fillOpacity={0.6}
			/>
			<path
				d="M4.27734 16.8419L5.14405 16.4039C5.24175 16.5951 5.3692 16.736 5.5264 16.8265C5.6857 16.917 5.8599 16.9622 6.04895 16.9622C6.25925 16.9622 6.41965 16.9211 6.5301 16.8388C6.6406 16.7545 6.6958 16.628 6.6958 16.4594C6.6958 16.3278 6.6427 16.2167 6.5365 16.1263C6.4303 16.0337 6.2423 15.9638 5.9725 15.9165C5.45845 15.826 5.08455 15.6677 4.85089 15.4415C4.61935 15.2153 4.50357 14.9335 4.50357 14.5963C4.50357 14.1768 4.65652 13.8416 4.96241 13.5907C5.2683 13.3398 5.6719 13.2144 6.17325 13.2144C6.511 13.2144 6.8084 13.2812 7.06545 13.4149C7.32245 13.5485 7.5264 13.7398 7.6772 13.9886L6.82965 14.4112C6.73615 14.2714 6.63525 14.1706 6.52695 14.1089C6.4186 14.0452 6.28265 14.0133 6.11905 14.0133C5.92365 14.0133 5.77495 14.0544 5.673 14.1367C5.57315 14.2189 5.5232 14.3259 5.5232 14.4575C5.5232 14.5706 5.571 14.6703 5.6666 14.7567C5.7643 14.841 5.95975 14.9099 6.2529 14.9634C6.74575 15.0538 7.1132 15.2184 7.3554 15.4569C7.5997 15.6934 7.7218 15.9926 7.7218 16.3545C7.7218 16.7946 7.5763 17.1432 7.2853 17.4002C6.99425 17.6573 6.579 17.7858 6.0394 17.7858C5.64855 17.7858 5.2959 17.7035 4.98153 17.539C4.66927 17.3725 4.43454 17.1401 4.27734 16.8419Z"
				fill="white"
			/>
			<path
				d="M4.27637 16.886L5.14366 16.4333C5.24141 16.6309 5.36896 16.7766 5.52626 16.8701C5.68566 16.9636 5.85996 17.0104 6.04916 17.0104C6.25961 17.0104 6.42011 16.9679 6.53061 16.8828C6.64116 16.7957 6.69641 16.665 6.69641 16.4907C6.69641 16.3546 6.64326 16.2398 6.53701 16.1463C6.43071 16.0506 6.24261 15.9784 5.97266 15.9295C5.45821 15.836 5.08411 15.6723 4.85029 15.4385C4.6186 15.2046 4.50275 14.9134 4.50275 14.5648C4.50275 14.1312 4.6558 13.7847 4.96189 13.5254C5.26801 13.266 5.67186 13.1364 6.17351 13.1364C6.51151 13.1364 6.80906 13.2055 7.06631 13.3436C7.32351 13.4818 7.52756 13.6795 7.67846 13.9367L6.83036 14.3735C6.73681 14.229 6.63586 14.1248 6.52746 14.061C6.41901 13.9951 6.28301 13.9622 6.11931 13.9622C5.92376 13.9622 5.77496 14.0047 5.67291 14.0897C5.57301 14.1748 5.52306 14.2853 5.52306 14.4213C5.52306 14.5382 5.57091 14.6413 5.66656 14.7306C5.76431 14.8178 5.95991 14.889 6.25321 14.9442C6.74636 15.0378 7.11411 15.2078 7.35646 15.4544C7.60091 15.6988 7.72311 16.0081 7.72311 16.3822C7.72311 16.8371 7.57751 17.1974 7.28631 17.4631C6.99506 17.7288 6.57951 17.8617 6.03961 17.8617C5.64846 17.8617 5.29561 17.7767 4.98102 17.6066C4.66855 17.4344 4.43367 17.1942 4.27637 16.886Z"
				fill="white"
			/>
			<defs>
				<linearGradient id="paint0_linear_8545_390" x1={5} y1={3.5} x2={13} y2={14} gradientUnits="userSpaceOnUse">
					<stop stopColor="#00E3DF" />
					<stop offset={0.410156} stopColor="#0097A8" />
					<stop offset={1} stopColor="#007791" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(11.3359 15.6599) rotate(-112.448) scale(9.21305 16.5646)"
				>
					<stop offset={0.28573} stopColor="#003B5D" />
					<stop offset={0.612265} stopColor="#004A6C" stopOpacity={0.688298} />
					<stop offset={0.968041} stopColor="#006F94" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="paint2_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(11.5477 13.0127) rotate(-112.063) scale(7.77595 13.9636)"
				>
					<stop offset={0.259744} stopColor="#002A42" />
					<stop offset={0.612265} stopColor="#004261" stopOpacity={0.688298} />
					<stop offset={0.968041} stopColor="#006F94" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="paint3_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(12.9243 2.63534) rotate(124.447) scale(6.50535)"
				>
					<stop stopColor="#78EDFF" />
					<stop offset={1} stopColor="#2CCFCA" stopOpacity={0} />
				</radialGradient>
				<linearGradient
					id="paint4_linear_8545_390"
					x1={11.2227}
					y1={9.25}
					x2={17.8893}
					y2={18}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00E3DF" />
					<stop offset={0.476427} stopColor="#00A2B8" />
					<stop offset={0.945063} stopColor="#00637C" />
				</linearGradient>
				<radialGradient
					id="paint5_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(12.1081 17.1667) rotate(-70.8012) scale(6.17685 11.1294)"
				>
					<stop stopColor="#003B5D" />
					<stop offset={0.492035} stopColor="#004C6C" stopOpacity={0.72} />
					<stop offset={0.968041} stopColor="#007A86" stopOpacity={0} />
				</radialGradient>
				<radialGradient
					id="paint6_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(17.8263 8.52945) rotate(124.447) scale(5.42115)"
				>
					<stop stopColor="#78EDFF" />
					<stop offset={1} stopColor="#2CCFCA" stopOpacity={0} />
				</radialGradient>
				<linearGradient
					id="paint7_linear_8545_390"
					x1={7.275}
					y1={13.925}
					x2={11.525}
					y2={22.425}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.0534989} stopColor="#75FFF6" />
					<stop offset={0.51144} stopColor="#00C7D1" />
					<stop offset={0.96002} stopColor="#0096AD" />
				</linearGradient>
				<linearGradient
					id="paint8_linear_8545_390"
					x1={14.4805}
					y1={22.0004}
					x2={12.2094}
					y2={18.8129}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.259744} stopColor="#0E5A5D" />
					<stop offset={0.535716} stopColor="#126C6B" stopOpacity={0.688298} />
					<stop offset={0.968041} stopColor="#1C948A" stopOpacity={0} />
				</linearGradient>
				<radialGradient
					id="paint9_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(2 11.5) rotate(45) scale(11.3137)"
				>
					<stop offset={0.0625} stopColor="#00B6BD" />
					<stop offset={0.890131} stopColor="#00495C" />
				</radialGradient>
				<radialGradient
					id="paint10_radial_8545_390"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(6 16.3) rotate(90) scale(5.6 6.375)"
				>
					<stop offset={0.566964} stopColor="#1E8581" stopOpacity={0} />
					<stop offset={0.973806} stopColor="#1ECBE6" />
				</radialGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftSharepointColor.iconName = "logo-microsoft-sharepoint--color";

export default IconLogoMicrosoftSharepointColor;
