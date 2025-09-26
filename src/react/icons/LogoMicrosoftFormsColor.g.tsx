import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftFormsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#036C70" d="M22 12v8.451c0 .47-.381.851-.851.851H7.503a.85.85 0 0 1-.852-.85V12l7.907-.93z" />
			<path fill="#37C6D0" d="M7.503 2.698h13.646c.47 0 .851.381.851.85V12H6.651V3.549c0-.47.382-.851.852-.851" />
			<path
				fill="#1A9BA1"
				d="M15.023 14.326h4.652v4.65h-4.652zM17.35 10.14a2.79 2.79 0 1 0 0-5.582 2.79 2.79 0 0 0 0 5.582"
			/>
			<path fill="#036C70" d="M17.349 8.744a1.395 1.395 0 1 0 0-2.79 1.395 1.395 0 0 0 0 2.79" />
			<path
				fill="#000"
				d="M12.312 6.419h-5.66v11.628h5.66c.47 0 .851-.382.851-.852V7.27a.85.85 0 0 0-.851-.851"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M11.847 6.884H6.65v11.628h5.196c.47 0 .85-.382.85-.852V7.735a.85.85 0 0 0-.85-.851"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.847 6.884H6.65V17.58h5.196c.47 0 .85-.381.85-.85V7.734a.85.85 0 0 0-.85-.851"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.382 6.884h-4.73V17.58h4.73c.47 0 .85-.381.85-.85V7.734a.85.85 0 0 0-.85-.851"
				opacity={0.2}
			/>
			<path
				fill="url(#prefix__a)"
				d="M2.851 6.884h8.526c.47 0 .85.381.85.85v8.526c0 .47-.38.852-.85.852H2.85A.845.845 0 0 1 2 16.265v-8.53c0-.47.381-.851.851-.851"
			/>
			<path fill="#fff" d="M8.842 10.13h-2.4v1.512H8.68v.898H6.442v2.232H5.358V9.228h3.489z" />
			<defs>
				<linearGradient id="prefix__a" x1={3.778} x2={10.455} y1={6.218} y2={17.782} gradientUnits="userSpaceOnUse">
					<stop stopColor="#058F92" />
					<stop offset={0.5} stopColor="#038489" />
					<stop offset={1} stopColor="#026D71" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftFormsColor.iconName = "logo-microsoft-forms--color";

export default IconLogoMicrosoftFormsColor;
