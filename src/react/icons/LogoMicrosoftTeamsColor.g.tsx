import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftTeamsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#5059C9"
				d="M15.951 9.674h5.166c.488 0 .884.396.884.884v4.706a3.25 3.25 0 0 1-3.248 3.248h-.015a3.25 3.25 0 0 1-3.249-3.248v-5.128c0-.255.207-.462.462-.462M19.443 8.744a2.093 2.093 0 1 0 0-4.186 2.093 2.093 0 0 0 0 4.186"
			/>
			<path
				fill="#7B83EB"
				d="M12.93 8.744a3.023 3.023 0 1 0 0-6.046 3.023 3.023 0 0 0 0 6.046M16.962 9.674H8.434a.874.874 0 0 0-.852.895v5.367a5.246 5.246 0 0 0 5.116 5.366 5.246 5.246 0 0 0 5.116-5.366v-5.367a.874.874 0 0 0-.852-.895"
			/>
			<path
				fill="#000"
				d="M13.164 9.674v7.521a.856.856 0 0 1-.851.852H7.992a5.664 5.664 0 0 1-.41-2.112v-5.367a.873.873 0 0 1 .851-.894z"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M12.699 9.674v7.986a.856.856 0 0 1-.851.851H8.21a6 6 0 0 1-.218-.464 5.664 5.664 0 0 1-.41-2.112v-5.367a.873.873 0 0 1 .851-.894z"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.699 9.674v7.056a.86.86 0 0 1-.852.851H7.83a5.7 5.7 0 0 1-.247-1.646v-5.367a.873.873 0 0 1 .851-.894z"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.233 9.674v7.056a.86.86 0 0 1-.85.851H7.828a5.7 5.7 0 0 1-.247-1.646v-5.367a.873.873 0 0 1 .851-.894z"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M13.163 7.27v1.465c-.079.005-.153.01-.232.01s-.154-.005-.233-.01a2.6 2.6 0 0 1-.465-.075A3.02 3.02 0 0 1 9.991 6.42h2.321c.47.001.85.381.851.85"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M12.698 7.735v1a2.6 2.6 0 0 1-.465-.074 3.02 3.02 0 0 1-2.093-1.777h1.707c.469.002.849.382.85.85"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.698 7.735v1a2.6 2.6 0 0 1-.465-.074 3.02 3.02 0 0 1-2.093-1.777h1.707c.469.002.849.382.85.85"
				opacity={0.2}
			/>
			<path fill="#000" d="M12.233 7.735v.925a3.02 3.02 0 0 1-2.093-1.776h1.242c.469.001.849.381.85.85" opacity={0.2} />
			<path
				fill="url(#prefix__a)"
				d="M2.853 6.884h8.527c.47 0 .852.381.852.852v8.528c0 .47-.381.852-.852.852H2.853A.853.853 0 0 1 2 16.264V7.736c0-.47.382-.852.853-.852"
			/>
			<path fill="#fff" d="M9.36 10.13H7.656v4.641H6.57V10.13H4.873v-.9H9.36z" />
			<defs>
				<linearGradient id="prefix__a" x1={3.778} x2={10.455} y1={6.217} y2={17.782} gradientUnits="userSpaceOnUse">
					<stop stopColor="#5A62C3" />
					<stop offset={0.5} stopColor="#4D55BD" />
					<stop offset={1} stopColor="#3940AB" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftTeamsColor.iconName = "logo-microsoft-teams--color";

export default IconLogoMicrosoftTeamsColor;
