import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftPowerpointColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#ED6C47" d="M14.093 12.93 12.698 2.698h-.104a9.225 9.225 0 0 0-9.198 9.198V12z" />
			<path fill="#FF8F6B" d="M12.802 2.698h-.104V12l4.651 1.86L22.001 12v-.104a9.225 9.225 0 0 0-9.199-9.198" />
			<path fill="#D35230" d="M22 12v.102a9.227 9.227 0 0 1-9.2 9.2h-.205a9.226 9.226 0 0 1-9.2-9.2V12z" />
			<path
				fill="#000"
				d="M13.163 7.27v9.925a.857.857 0 0 1-.851.852H5.59a9.123 9.123 0 0 1-2.195-5.944v-.205a9.1 9.1 0 0 1 1.497-5.014c.103-.158.21-.317.326-.465h7.093a.86.86 0 0 1 .851.85"
				opacity={0.1}
			/>
			<path
				fill="#000"
				d="M12.698 7.735v9.925a.856.856 0 0 1-.851.851H6.014a8 8 0 0 1-.423-.464 9.123 9.123 0 0 1-2.195-5.944v-.205a9.1 9.1 0 0 1 1.497-5.014h6.954a.86.86 0 0 1 .85.85"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.698 7.735v8.995a.86.86 0 0 1-.851.851H5.219a9.12 9.12 0 0 1-1.823-5.479v-.204a9.1 9.1 0 0 1 1.497-5.014h6.954a.86.86 0 0 1 .85.851"
				opacity={0.2}
			/>
			<path
				fill="#000"
				d="M12.233 7.735v8.995a.86.86 0 0 1-.851.851H5.219a9.12 9.12 0 0 1-1.823-5.479v-.204a9.1 9.1 0 0 1 1.497-5.014h6.489a.86.86 0 0 1 .85.851"
				opacity={0.2}
			/>
			<path
				fill="url(#prefix__a)"
				d="M2.853 6.884h8.527c.47 0 .852.381.852.852v8.528c0 .47-.381.852-.852.852H2.853A.853.853 0 0 1 2 16.264V7.736c0-.47.382-.852.853-.852"
			/>
			<path
				fill="#fff"
				d="M7.21 9.158a2.34 2.34 0 0 1 1.552.455c.373.332.572.818.54 1.317.007.347-.086.688-.266.985a1.8 1.8 0 0 1-.757.669 2.6 2.6 0 0 1-1.138.239H6.063v2.004H4.958v-5.67zm-1.148 2.799h.95c.302.022.6-.067.84-.251a.93.93 0 0 0 .285-.733q0-.938-1.09-.938h-.985z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={3.778} x2={10.455} y1={6.218} y2={17.782} gradientUnits="userSpaceOnUse">
					<stop stopColor="#CA4C28" />
					<stop offset={0.5} stopColor="#C5401E" />
					<stop offset={1} stopColor="#B62F14" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoMicrosoftPowerpointColor.iconName = "logo-microsoft-powerpoint--color";

export default IconLogoMicrosoftPowerpointColor;
