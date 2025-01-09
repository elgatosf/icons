import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleGeminiColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<g clipPath="url(#prefix__a)">
				<path
					fill="url(#prefix__b)"
					d="M12 24q0-2.49-.96-4.68-.93-2.19-2.55-3.81a11.9 11.9 0 0 0-3.81-2.55Q2.49 12 0 12q2.49 0 4.68-.93 2.19-.96 3.81-2.58t2.55-3.81Q12 2.49 12 0q0 2.49.93 4.68.96 2.19 2.58 3.81a12.3 12.3 0 0 0 3.81 2.58Q21.51 12 24 12q-2.49 0-4.68.96-2.19.93-3.81 2.55a12.3 12.3 0 0 0-2.58 3.81Q12 21.51 12 24"
				/>
			</g>
			<defs>
				<radialGradient
					id="prefix__b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(24.19889 8.18296 -65.55084 193.84876 2.382 9.754)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.067} stopColor="#9168C0" />
					<stop offset={0.343} stopColor="#5684D1" />
					<stop offset={0.672} stopColor="#1BA1E3" />
				</radialGradient>
				<clipPath id="prefix__a">
					<path fill="#fff" d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

IconLogoGoogleGeminiColor.iconName = "logo-google-gemini--color";

export default IconLogoGoogleGeminiColor;
