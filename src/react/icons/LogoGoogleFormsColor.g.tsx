import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleFormsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M18.1199 15H11.8799C10.223 15 8.87988 16.3431 8.87988 18C8.87988 19.6568 10.223 21 11.8799 21H18.1199C19.7767 21 21.1199 19.6568 21.1199 18C21.1199 16.3431 19.7767 15 18.1199 15Z"
				fill="#969DFF"
			/>
			<path
				d="M8.87987 18C8.87987 16.3431 7.53673 15 5.87988 15C4.22303 15 2.87988 16.3431 2.87988 18C2.87988 19.6568 4.22303 21 5.87988 21C7.53673 21 8.87987 19.6568 8.87987 18Z"
				fill="#B8C0FF"
			/>
			<path
				d="M8.87987 12C8.87987 10.3431 7.53673 9 5.87988 9C4.22303 9 2.87988 10.3431 2.87988 12C2.87988 13.6568 4.22303 15 5.87988 15C7.53673 15 8.87987 13.6568 8.87987 12Z"
				fill="#5746E3"
			/>
			<path
				d="M18.1199 9H11.8799C10.223 9 8.87988 10.3431 8.87988 12C8.87988 13.6568 10.223 15 11.8799 15H18.1199C19.7767 15 21.1199 13.6568 21.1199 12C21.1199 10.3431 19.7767 9 18.1199 9Z"
				fill="#5746E3"
			/>
			<mask
				id="mask0_3602_689"
				style={{
					maskType: "alpha",
				}}
				maskUnits="userSpaceOnUse"
				x={8}
				y={3}
				width={14}
				height={6}
			>
				<path
					d="M18.1199 3H11.8799C10.223 3 8.87988 4.34314 8.87988 5.99999C8.87988 7.65684 10.223 8.99999 11.8799 8.99999H18.1199C19.7767 8.99999 21.1199 7.65684 21.1199 5.99999C21.1199 4.34314 19.7767 3 18.1199 3Z"
					fill="#5F54F4"
				/>
			</mask>
			<g mask="url(#mask0_3602_689)">
				<path
					d="M18.1199 3H11.8799C10.223 3 8.87988 4.34314 8.87988 5.99999C8.87988 7.65684 10.223 8.99999 11.8799 8.99999H18.1199C19.7767 8.99999 21.1199 7.65684 21.1199 5.99999C21.1199 4.34314 19.7767 3 18.1199 3Z"
					fill="#7372FE"
				/>
				<g filter="url(#filter0_f_3602_689)">
					<path
						d="M7.19987 10.32C9.58574 10.32 11.5199 8.38591 11.5199 6.00005C11.5199 3.61418 9.58574 1.68005 7.19987 1.68005C4.81401 1.68005 2.87988 3.61418 2.87988 6.00005C2.87988 8.38591 4.81401 10.32 7.19987 10.32Z"
						fill="#64AFFF"
					/>
				</g>
			</g>
			<path
				d="M8.87987 5.99999C8.87987 4.34314 7.53673 3 5.87988 3C4.22303 3 2.87988 4.34314 2.87988 5.99999C2.87988 7.65684 4.22303 8.99999 5.87988 8.99999C7.53673 8.99999 8.87987 7.65684 8.87987 5.99999Z"
				fill="#7372FE"
			/>
			<path d="M11.8799 6H18.1199" stroke="white" strokeWidth={1.44} strokeLinecap="round" />
			<path
				d="M5.87945 7.43993C6.67474 7.43993 7.31945 6.79522 7.31945 5.99993C7.31945 5.20465 6.67474 4.55994 5.87945 4.55994C5.08416 4.55994 4.43945 5.20465 4.43945 5.99993C4.43945 6.79522 5.08416 7.43993 5.87945 7.43993Z"
				fill="white"
			/>
			<defs>
				<filter
					id="filter0_f_3602_689"
					x={0.511087}
					y={-0.688742}
					width={13.3772}
					height={13.3776}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation={1.1844} result="effect1_foregroundBlur_3602_689" />
				</filter>
			</defs>
		</svg>
	);
};

IconLogoGoogleFormsColor.iconName = "logo-google-forms--color";

export default IconLogoGoogleFormsColor;
