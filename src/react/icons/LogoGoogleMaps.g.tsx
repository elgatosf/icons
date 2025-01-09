import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleMaps = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M11.992 1c.815 0 1.613.133 2.345.366a7.66 7.66 0 0 1 4.49 3.775 7.7 7.7 0 0 1 .864 3.542c0 3.295-1.49 5.166-3.27 7.399-.735.922-1.519 1.906-2.267 3.077-.738 1.138-1.031 2.061-1.24 2.719-.234.735-.362 1.139-.889 1.139s-.655-.4-.89-1.133c-.208-.654-.502-1.572-1.238-2.709a31 31 0 0 0-1.314-1.879 76 76 0 0 0-.951-1.207c-1.01-1.264-1.93-2.417-2.541-3.765-.482-1.047-.765-2.211-.765-3.658 0-1.863.682-3.592 1.796-4.922A7.66 7.66 0 0 1 11.992 1m2.261 9.562a2.938 2.938 0 0 1-5.188-1.896c0-.682.227-1.319.623-1.81l.06-.07.002-.003A2.98 2.98 0 0 1 12.01 5.74a2.938 2.938 0 0 1 2.368 4.681z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleMaps.iconName = "logo-google-maps";

export default IconLogoGoogleMaps;
