import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEffect = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M7.82453 8.09153C8.13677 6.58237 9.466 5.5 11.0071 5.5H12.25C12.6642 5.5 13 5.16421 13 4.75C13 4.33579 12.6642 4 12.25 4H11.0071C8.75471 4 6.81199 5.58192 6.35564 7.78762L6.10481 9H3.75C3.33579 9 3 9.33579 3 9.75C3 10.1642 3.33579 10.5 3.75 10.5H5.79446L4.01555 19.098C3.93163 19.5037 4.19242 19.9005 4.59805 19.9844C5.00367 20.0684 5.40052 19.8076 5.48445 19.402L7.32623 10.5H12.3365L14.7508 14.3227L10.4626 18.7268C10.1737 19.0236 10.18 19.4984 10.4768 19.7874C10.7736 20.0763 11.2484 20.07 11.5374 19.7732L15.5746 15.6269L18.1158 19.6505C18.337 20.0007 18.8002 20.1053 19.1504 19.8841C19.5006 19.6629 19.6052 19.1997 19.384 18.8495L16.6507 14.5217L20.7874 10.2732C21.0763 9.97644 21.07 9.50161 20.7732 9.21265C20.4764 8.92368 20.0016 8.93002 19.7126 9.22679L15.8269 13.2175L13.384 9.34951C13.2466 9.13193 13.0072 9 12.7499 9H7.63657L7.82453 8.09153Z" />
		</svg>
	);
};

IconEffect.iconName = "effect";

export default IconEffect;
