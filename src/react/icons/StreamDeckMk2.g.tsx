import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckMk2 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M9 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8.988 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11.976 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M14.964 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
			<path
				fillRule="evenodd"
				d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-.5h16a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckMk2.iconName = "stream-deck-mk2";

export default IconStreamDeckMk2;
