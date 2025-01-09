import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconProfileFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 8.5h2.25v2.75H8.5V9a.5.5 0 0 1 .5-.5M8.5 12.75V15a.5.5 0 0 0 .5.5h2.25v-2.75zM12.75 12.75v2.75H15a.5.5 0 0 0 .5-.5v-2.25zM15.5 11.25V9a.5.5 0 0 0-.5-.5h-2.25v2.75z" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconProfileFilled.iconName = "profile--filled";

export default IconProfileFilled;
