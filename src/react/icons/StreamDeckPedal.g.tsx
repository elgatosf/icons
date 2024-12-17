import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckPedal = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-.903a2 2 0 0 1-1.733-1H6.636a2 2 0 0 1-1.733 1H4a2 2 0 0 1-2-2zm4.986 12.5h10.028l-1.705-13H8.691zm.192-13H4a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h.903a.5.5 0 0 0 .496-.435zm9.644 0 1.779 13.565a.5.5 0 0 0 .496.435H20a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckPedal.iconName = "stream-deck-pedal";

export default IconStreamDeckPedal;
