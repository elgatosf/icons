import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleTranslateColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#DBDBDB" d="M20.668 22c.73 0 1.33-.59 1.33-1.31V7.325c0-.721-.6-1.31-1.33-1.31H7.684L12.894 22z" />
			<path
				fill="#DCDCDC"
				d="M20.668 6.616c.194 0 .378.076.517.212.136.134.212.31.212.497V20.69a.69.69 0 0 1-.212.497.73.73 0 0 1-.517.212H13.33L8.511 6.616zm0-.601H7.684L12.894 22h7.774c.73 0 1.33-.59 1.33-1.31V7.325c0-.721-.6-1.31-1.33-1.31"
			/>
			<path fill="#4352B8" d="M11.665 18.224 12.895 22l3.42-3.776z" />
			<path
				fill="#607988"
				d="M20.756 11.538v-.783H16.98V9.489h-1.226v1.266h-2.41v.783h4.796c-.256.904-.823 1.757-1.376 2.42-.98-1.16-.984-1.536-.984-1.536h-1.018s.042.565 1.417 2.175c-.447.457-.786.728-.786.728l.313.977s.473-.406 1.064-1.033a44 44 0 0 0 2.348 2.337l.643-.643c-1.06-.961-1.837-1.725-2.408-2.338.765-.905 1.542-2.045 1.706-3.089h1.695v.002z"
			/>
			<path fill="#4285F4" d="M3.332 2c-.731 0-1.33.599-1.33 1.332v13.563c0 .732.599 1.33 1.33 1.33h12.984L11.106 2z" />
			<path fill="url(#prefix__a)" d="M12.706 6.015h7.962c.73 0 1.33.589 1.33 1.31v8.018z" />
			<path
				fill="#EEE"
				d="M9.443 10.627c-.05.607-.57 1.506-1.825 1.506-1.088 0-1.97-.9-1.97-2.007s.882-2.008 1.97-2.008c.619 0 1.031.269 1.268.487l.825-.793a3.03 3.03 0 0 0-2.094-.814 3.127 3.127 0 0 0-3.125 3.126c0 1.725 1.4 3.125 3.125 3.125 1.808 0 3.002-1.268 3.002-3.057 0-.257-.033-.445-.075-.637H7.62v1.07z"
			/>
			<path
				fill="url(#prefix__b)"
				d="M20.668 6.015h-8.272L11.106 2H3.331c-.731 0-1.33.599-1.33 1.332v13.563c0 .732.599 1.33 1.33 1.33h8.332L12.894 22h7.774c.73 0 1.33-.589 1.33-1.31V7.325c0-.721-.6-1.31-1.33-1.31"
			/>
			<defs>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="translate(3.308 2.388)scale(28.013)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity={0.1} />
					<stop offset={1} stopColor="#fff" stopOpacity={0} />
				</radialGradient>
				<linearGradient id="prefix__a" x1={12.706} x2={21.998} y1={10.679} y2={10.679} gradientUnits="userSpaceOnUse">
					<stop stopColor="#fff" stopOpacity={0.2} />
					<stop offset={1} stopColor="#fff" stopOpacity={0.02} />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoGoogleTranslateColor.iconName = "logo-google-translate--color";

export default IconLogoGoogleTranslateColor;
