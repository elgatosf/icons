import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoPlayStationColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#0070D1"
				d="M1.445 15.903c-.824.55-.55 1.594 1.21 2.089 1.814.604 3.792.77 5.716.44.11 0 .22-.056.275-.056v-1.869l-1.869.605c-.714.22-1.429.275-2.144.11-.55-.165-.44-.495.22-.77l3.793-1.319V13.1L3.37 14.913c-.66.22-1.32.55-1.924.99m12.753-8.245v5.332c2.253 1.099 4.012 0 4.012-2.859 0-2.913-1.044-4.232-4.067-5.277C12.549 4.304 10.9 3.81 9.25 3.48v15.886l3.848 1.154V7.163c0-.605 0-1.044.44-.88.604.165.659.77.659 1.375m7.146 6.98c-1.594-.55-3.298-.769-4.948-.604-.879.055-1.703.275-2.473.55l-.165.055v2.143l3.573-1.319c.715-.22 1.43-.275 2.144-.11.55.165.44.495-.22.77l-5.497 2.034v2.088l7.586-2.803c.55-.22 1.044-.495 1.484-.934.385-.55.22-1.32-1.484-1.87"
			/>
		</svg>
	);
};

IconLogoPlayStationColor.iconName = "logo-play-station--color";

export default IconLogoPlayStationColor;
