import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftWordColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#41A5EE"
				d="M21.148 2.698H7.504a.853.853 0 0 0-.853.852V7.35l7.907 2.325L22 7.35V3.55a.853.853 0 0 0-.852-.852"
			/>
			<path fill="#2B7CD3" d="M22 7.349H6.651V12l7.907 1.395L22 12z" />
			<path fill="#185ABD" d="M6.651 12v4.651l7.442.93 7.907-.93V12z" />
			<path fill="#103F91" d="M7.504 21.302h13.644c.47 0 .852-.381.852-.852V16.65H6.651v3.799c0 .47.382.852.853.852" />
			<path
				fill="#000"
				d="M12.31 6.419H6.651v11.628h5.66a.855.855 0 0 0 .852-.853V7.27a.855.855 0 0 0-.853-.852"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M11.845 6.884H6.651v11.628h5.194a.856.856 0 0 0 .853-.853V7.736a.855.855 0 0 0-.853-.852"
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
				d="M2.853 6.884h8.527c.47 0 .853.381.853.852v8.528c0 .47-.382.852-.853.852H2.853A.853.853 0 0 1 2 16.264V7.736c0-.47.382-.852.853-.852"
			/>
			<path
				fill="#fff"
				d="M5.499 13.422q.026.197.033.345h.02q.01-.14.046-.337t.064-.332l.896-3.87h1.16l.93 3.812q.081.355.116.719h.015q.027-.353.097-.698l.742-3.834h1.055L9.37 14.77H8.137L7.253 11.1a9 9 0 0 1-.147-.786h-.015q-.015.135-.06.402-.045.266-.072.394l-.83 3.66H4.875L3.565 9.23h1.074l.808 3.877q.027.12.052.316"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={3.778} x2={10.455} y1={6.218} y2={17.782} gradientUnits="userSpaceOnUse">
					<stop stopColor="#2368C4" />
					<stop offset={0.5} stopColor="#1A5DBE" />
					<stop offset={1} stopColor="#1146AC" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftWordColor.iconName = "logo-microsoft-word--color";

export default IconLogoMicrosoftWordColor;
