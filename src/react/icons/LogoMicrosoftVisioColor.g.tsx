import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftVisioColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#2B7CD3"
				d="M12.871 7.238h8.258c.48 0 .871.39.871.872v7.78c0 .482-.39.872-.871.872H12.87a.87.87 0 0 1-.871-.871V8.11c0-.482.39-.872.871-.872"
			/>
			<path
				fill="#41A5EE"
				d="M17.238 7.238a.85.85 0 0 1-.257.614l-3.553 3.553-.338.338q-.066.063-.138.119a.9.9 0 0 1-.476.138.85.85 0 0 1-.615-.257l-3.89-3.89a.863.863 0 0 1 0-1.23l3.89-3.89a.86.86 0 0 1 1.23 0l3.89 3.89a.85.85 0 0 1 .257.615"
			/>
			<path fill="#103F91" d="M17.238 16.762a4.762 4.762 0 1 1-9.523 0 4.762 4.762 0 0 1 9.523 0" />
			<path
				fill="#000"
				d="M13.429 7.634v10.161a.877.877 0 0 1-.872.872H8.114a4 4 0 0 1-.18-.476A4.762 4.762 0 0 1 12.476 12a.85.85 0 0 1-.614-.258l-3.89-3.89a.86.86 0 0 1-.115-1.09h4.7a.87.87 0 0 1 .772.475c.067.121.101.257.1.396"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M12.953 8.11v10.162a.877.877 0 0 1-.871.872h-3.73a3.4 3.4 0 0 1-.238-.477 4 4 0 0 1-.18-.476A4.762 4.762 0 0 1 12.476 12a.85.85 0 0 1-.614-.258l-3.89-3.89a.85.85 0 0 1-.258-.615h4.367c.242 0 .472.102.633.281.153.16.238.37.239.59"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.953 8.11v9.21a.88.88 0 0 1-.872.87H7.934A4.762 4.762 0 0 1 12.476 12a.85.85 0 0 1-.614-.257l-3.89-3.89a.85.85 0 0 1-.258-.615h4.367c.242 0 .472.102.633.281.153.16.238.37.239.59"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.476 8.11V12a.85.85 0 0 1-.615-.257l-3.89-3.89a.85.85 0 0 1-.257-.615h3.89c.48.002.87.391.872.872"
				opacity={0.2}
			/>
			<path fill="#000" d="M12.476 12v5.32a.88.88 0 0 1-.871.87H7.934A4.762 4.762 0 0 1 12.476 12" opacity={0.2} />
			<path
				fill="url(#prefix__a)"
				d="M2.873 7.238h8.73c.482 0 .873.391.873.873v8.73c0 .483-.39.874-.873.874h-8.73A.873.873 0 0 1 2 16.842v-8.73c0-.483.39-.874.873-.874"
			/>
			<path
				fill="#fff"
				d="M6.953 13.394q.24.708.285.895h.02q.043-.186.309-.958l1.27-3.692h1.168L7.85 15.313H6.6L4.476 9.64h1.2z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={3.82} x2={10.656} y1={6.556} y2={18.396} gradientUnits="userSpaceOnUse">
					<stop stopColor="#2368C4" />
					<stop offset={0.5} stopColor="#1A5DBE" />
					<stop offset={1} stopColor="#1146AC" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftVisioColor.iconName = "logo-microsoft-visio--color";

export default IconLogoMicrosoftVisioColor;
