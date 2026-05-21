import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleChatColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 3H8C4.68629 3 2 5.68629 2 9C2 12.3137 4.68629 15 8 15H16C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3Z"
				fill="#00AF57"
			/>
			<path
				d="M16.625 5.50012C20.1459 5.50012 23 8.35437 23 11.8751C23 15.396 20.1459 18.2501 16.625 18.2501H12.078L7.72087 21.1331C7.23837 21.4511 6.99725 21.6101 6.79938 21.6231C6.65877 21.6324 6.51839 21.6019 6.39432 21.5351C6.27025 21.4683 6.16751 21.3679 6.09788 21.2454C6 21.073 6 20.784 6 20.2062V18.1014C3.14013 17.4726 1 14.9239 1 11.8751C1 8.35437 3.85425 5.50012 7.375 5.50012H16.625Z"
				fill="#0EBC5F"
			/>
			<mask
				id="mask0_3602_565"
				style={{
					maskType: "alpha",
				}}
				maskUnits="userSpaceOnUse"
				x={1}
				y={5}
				width={22}
				height={17}
			>
				<path
					d="M16.625 5.50012C20.1459 5.50012 23 8.35437 23 11.8751C23 15.396 20.1459 18.2501 16.625 18.2501H12.0903L7.16175 21.4871C6.663 21.8146 6 21.4569 6 20.8602V18.1014C3.14013 17.4726 1 14.9239 1 11.8751C1 8.35437 3.85425 5.50012 7.375 5.50012H16.625Z"
					fill="#0EBC5F"
				/>
			</mask>
			<g mask="url(#mask0_3602_565)">
				<path
					d="M16 3H8C4.68629 3 2 5.68629 2 9C2 12.3137 4.68629 15 8 15H16C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3Z"
					fill="#0EBC5F"
				/>
				<path
					d="M16 3H8C4.68629 3 2 5.68629 2 9C2 12.3137 4.68629 15 8 15H16C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3Z"
					fill="url(#paint0_linear_3602_565)"
				/>
				<path
					d="M7.75 11.2501C7.75 11.2501 8.855 13.5001 12 13.5001C15.145 13.5001 16.25 11.3524 16.25 11.3524"
					stroke="white"
					strokeWidth={1.5}
					strokeLinecap="round"
				/>
			</g>
			<defs>
				<linearGradient id="paint0_linear_3602_565" x1={12} y1={3} x2={12} y2={15} gradientUnits="userSpaceOnUse">
					<stop offset={0.09} stopColor="#94D4FF" />
					<stop offset={0.28} stopColor="#78C9FF" />
					<stop offset={0.88} stopColor="#01AE58" stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGoogleChatColor.iconName = "logo-google-chat--color";

export default IconLogoGoogleChatColor;
