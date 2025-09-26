import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGrok = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<g clipPath="url(#prefix__a)">
				<path d="M5.984 5.649a8.975 8.975 0 0 1 9.752-1.965 7.8 7.8 0 0 1 1.829.999l-2.705 1.25c-2.519-1.057-5.404-.337-7.166 1.426-2.307 2.308-2.83 6.257-.324 8.93l.25.256L0 23.36c.483-.666 1.083-1.296 1.681-1.925 1.688-1.776 3.363-3.535 2.34-6.022-1.367-3.328-.57-7.228 1.963-9.764M23.822.568c-2.509 3.46-3.734 5.15-2.75 9.383l-.006-.007c.678 2.881-.047 6.076-2.388 8.42-2.951 2.956-7.674 3.614-11.563.953l2.711-1.257c2.482.976 5.198.548 7.15-1.406s2.39-4.8 1.409-7.169c-.187-.449-.746-.562-1.137-.273l-7.98 5.9 11.43-11.497v.01L24 .32z" />
			</g>
			<defs>
				<clipPath id="prefix__a">
					<path d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

IconLogoGrok.iconName = "logo-grok";

export default IconLogoGrok;
