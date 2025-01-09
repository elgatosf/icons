import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeCreativeCloud = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M5.792 12.815a3.687 3.687 0 0 0 3.685 3.693h1.977s-1.208-.731-1.639-1.331v-.008h-.3c-1.3 0-2.4-1.092-2.4-2.385A2.35 2.35 0 0 1 11 11.008l1.508 1.554a.657.657 0 1 0 .946-.915l-1.531-1.57-.015-.015c-.67-.6-1.547-.93-2.447-.93a3.69 3.69 0 0 0-3.669 3.684" />
			<path d="M13.877 16.538a4.4 4.4 0 0 0 3.154-1.354 4.57 4.57 0 0 0 1.3-3.2c-.008-2.469-2-4.469-4.47-4.469-1.138 0-2.169.377-3 1.154h-.007a4.432 4.432 0 0 0 .115.046 7 7 0 0 1 1.146.623c.539-.377 1.085-.507 1.746-.507a3.163 3.163 0 0 1 3.154 3.154c0 .846-.33 1.661-.923 2.269a3.03 3.03 0 0 1-2.215.961c-.785 0-1.6-.361-2.239-1l-2.007-2.007a.64.64 0 0 0-.47-.2.64.64 0 0 0-.461.184.664.664 0 0 0-.008.931l2.015 2.03c.885.878 2.039 1.385 3.17 1.385" />
			<path
				fillRule="evenodd"
				d="M17.96 3H6.039a3.266 3.266 0 0 0-3.27 3.27v11.46A3.266 3.266 0 0 0 6.039 21H17.96a3.266 3.266 0 0 0 3.27-3.27V6.27A3.266 3.266 0 0 0 17.96 3M13.8 6.785a5.13 5.13 0 0 1 3.784 1.638 5.35 5.35 0 0 1 1.431 3.585c0 2.892-2.338 5.253-5.215 5.253H9.56c-1.215 0-2.369-.5-3.2-1.384a4.6 4.6 0 0 1-1.246-3.108c0-2.138 1.7-4.446 4.446-4.446.162 0 .331.015.5.03.916-.968 2.339-1.568 3.739-1.568"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobeCreativeCloud.iconName = "logo-adobe-creative-cloud";

export default IconLogoAdobeCreativeCloud;
