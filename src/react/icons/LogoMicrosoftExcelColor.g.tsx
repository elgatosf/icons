import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftExcelColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M14.5583 11.5349L6.65137 10.1395V20.4498C6.65137 20.9206 7.03307 21.3023 7.50392 21.3023H21.1476C21.6185 21.3023 22.0002 20.9206 22.0002 20.4498V16.6512L14.5583 11.5349Z"
				fill="#185C37"
			/>
			<path
				d="M14.5583 2.69763H7.50392C7.03307 2.69763 6.65137 3.07933 6.65137 3.55019V7.34879L14.5583 12L18.7444 13.3953L22.0002 12V7.34879L14.5583 2.69763Z"
				fill="#21A366"
			/>
			<path d="M6.65137 7.34888H14.5583V12H6.65137V7.34888Z" fill="#107C41" />
			<path
				opacity={0.1}
				d="M12.3104 6.41858H6.65137V18.0465H12.3104C12.7807 18.045 13.1615 17.6641 13.163 17.1939V7.27114C13.1615 6.80092 12.7807 6.42011 12.3104 6.41858Z"
				fill="black"
			/>
			<path
				opacity={0.2}
				d="M11.8453 6.88367H6.65137V18.5116H11.8453C12.3155 18.51 12.6964 18.1292 12.6979 17.659V7.73622C12.6964 7.26601 12.3155 6.8852 11.8453 6.88367Z"
				fill="black"
			/>
			<path
				opacity={0.2}
				d="M11.8453 6.88367H6.65137V17.5813H11.8453C12.3155 17.5798 12.6964 17.199 12.6979 16.7288V7.73622C12.6964 7.26601 12.3155 6.8852 11.8453 6.88367Z"
				fill="black"
			/>
			<path
				opacity={0.2}
				d="M11.3802 6.88367H6.65137V17.5813H11.3802C11.8504 17.5798 12.2312 17.199 12.2328 16.7288V7.73622C12.2312 7.26601 11.8504 6.8852 11.3802 6.88367Z"
				fill="black"
			/>
			<path
				d="M2.85256 6.88367H11.38C11.8508 6.88367 12.2325 7.26537 12.2325 7.73622V16.2637C12.2325 16.7345 11.8508 17.1162 11.38 17.1162H2.85256C2.3817 17.1162 2 16.7345 2 16.2637V7.73622C2 7.26537 2.3817 6.88367 2.85256 6.88367Z"
				fill="url(#paint0_linear_8543_254)"
			/>
			<path
				d="M4.64062 14.7712L6.43411 11.9921L4.79086 9.22839H6.11272L7.00946 10.9958C7.09226 11.1637 7.149 11.2884 7.1797 11.3707H7.19132C7.25024 11.2368 7.31225 11.1067 7.37737 10.9805L8.33597 9.22933H9.54946L7.86434 11.9768L9.59226 14.7712H8.30109L7.26528 12.8312C7.21649 12.7486 7.17509 12.6619 7.14156 12.5721H7.12622C7.09587 12.6601 7.05561 12.7444 7.00621 12.8233L5.9397 14.7712H4.64062Z"
				fill="white"
			/>
			<path
				d="M21.1479 2.69763H14.5586V7.34879H22.0005V3.55019C22.0005 3.07933 21.6188 2.69763 21.1479 2.69763Z"
				fill="#33C481"
			/>
			<path d="M14.5586 12H22.0005V16.6512H14.5586V12Z" fill="#107C41" />
			<defs>
				<linearGradient
					id="paint0_linear_8543_254"
					x1={3.7776}
					y1={6.2175}
					x2={10.455}
					y2={17.7824}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#18884F" />
					<stop offset={0.5} stopColor="#117E43" />
					<stop offset={1} stopColor="#0B6631" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftExcelColor.iconName = "logo-microsoft-excel--color";

export default IconLogoMicrosoftExcelColor;
