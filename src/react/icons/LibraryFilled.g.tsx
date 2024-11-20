import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLibraryFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7.674 3.906A2 2 0 0 0 6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5c0-.404-.12-.78-.326-1.094m1.652 0A2 2 0 0 0 9 5v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1c-.7 0-1.317.36-1.674.906m6.174 1.81a2 2 0 0 0-.621 1.841l2.17 11.802a2 2 0 0 0 2.328 1.606l.984-.181a2 2 0 0 0 1.605-2.329l-2.17-11.802a2 2 0 0 0-2.329-1.606l-.983.181a2 2 0 0 0-.984.487Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLibraryFilled.iconName = "library--filled";

export default IconLibraryFilled;
