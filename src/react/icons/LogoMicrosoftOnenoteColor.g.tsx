import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftOnenoteColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#CA64EA"
				d="M17.349 21.302H7.503a.85.85 0 0 1-.852-.851V3.549c0-.47.382-.851.852-.851h13.646c.47 0 .851.38.851.851v3.8z"
			/>
			<path fill="#AE4BD5" d="m22 12-2.325 1.395L17.35 12V7.349H22z" />
			<path fill="#9332BF" d="m22 16.651-2.325 1.396-2.325-1.396V12H22z" />
			<path fill="#7719AA" d="M17.35 16.651H22v3.78c0 .48-.39.871-.871.871h-3.78z" />
			<path
				fill="#000"
				d="M12.31 6.419H6.651v11.628h5.66a.855.855 0 0 0 .852-.853V7.27a.855.855 0 0 0-.853-.852"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.845 6.884H6.651v11.628h5.194a.856.856 0 0 0 .853-.853V7.736a.855.855 0 0 0-.853-.852"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M11.845 6.884H6.651V17.58h5.194a.855.855 0 0 0 .853-.852V7.736a.855.855 0 0 0-.853-.852"
				opacity={0.5}
			/>
			<path
				fill="#000"
				d="M11.38 6.884H6.651V17.58h4.73a.855.855 0 0 0 .852-.852V7.736a.855.855 0 0 0-.853-.852"
				opacity={0.5}
			/>
			<path
				fill="url(#prefix__a)"
				d="M2.853 6.884h8.527c.47 0 .853.381.853.852v8.528c0 .47-.382.852-.853.852H2.853A.853.853 0 0 1 2 16.264V7.736c0-.47.382-.852.853-.852"
			/>
			<path
				fill="#fff"
				d="M4.804 9.229H5.96l2.27 3.674q.155.247.233.398h.015a6 6 0 0 1-.033-.754V9.23h.986v5.542H8.349l-2.356-3.776a3 3 0 0 1-.21-.39h-.02q.036.412.03.827v3.34h-.99z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={3.778} x2={10.455} y1={6.218} y2={17.782} gradientUnits="userSpaceOnUse">
					<stop stopColor="#8324B3" />
					<stop offset={0.5} stopColor="#7A1BAC" />
					<stop offset={1} stopColor="#621197" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftOnenoteColor.iconName = "logo-microsoft-onenote--color";

export default IconLogoMicrosoftOnenoteColor;
