import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftExcelColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fill="#185C37"
				d="m14.558 11.535-7.907-1.396v10.31c0 .472.382.853.853.853h13.644c.47 0 .852-.381.852-.852V16.65z"
			/>
			<path fill="#21A366" d="M14.558 2.698H7.504a.853.853 0 0 0-.853.852V7.35L14.558 12l4.186 1.395L22 12V7.349z" />
			<path fill="#107C41" d="M6.651 7.349h7.907V12H6.651z" />
			<path
				fill="#000"
				d="M12.31 6.419H6.651v11.628h5.66a.855.855 0 0 0 .852-.853V7.27a.855.855 0 0 0-.853-.852"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M11.845 6.884H6.651v11.628h5.194a.855.855 0 0 0 .853-.853V7.736a.855.855 0 0 0-.853-.852"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.845 6.884H6.651V17.58h5.194a.855.855 0 0 0 .853-.852V7.736a.855.855 0 0 0-.853-.852"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.38 6.884H6.651V17.58h4.73a.855.855 0 0 0 .852-.852V7.736a.855.855 0 0 0-.853-.852"
				opacity={0.2}
			/>
			<path
				fill="url(#prefix__a)"
				d="M2.853 6.884h8.527c.47 0 .852.381.852.852v8.528c0 .47-.381.852-.852.852H2.853A.853.853 0 0 1 2 16.264V7.736c0-.47.382-.852.853-.852"
			/>
			<path
				fill="#fff"
				d="m4.64 14.771 1.794-2.779-1.643-2.764h1.322l.896 1.768q.125.251.17.375h.012q.09-.201.186-.39l.959-1.752h1.213l-1.685 2.748 1.728 2.794h-1.29l-1.037-1.94a1.6 1.6 0 0 1-.123-.259h-.016q-.045.132-.12.251L5.94 14.771z"
			/>
			<path fill="#33C481" d="M21.148 2.698h-6.59v4.65H22V3.55a.853.853 0 0 0-.852-.852" />
			<path fill="#107C41" d="M14.559 12H22v4.651h-7.442z" />
			<defs>
				<linearGradient id="prefix__a" x1={3.778} x2={10.455} y1={6.218} y2={17.782} gradientUnits="userSpaceOnUse">
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
