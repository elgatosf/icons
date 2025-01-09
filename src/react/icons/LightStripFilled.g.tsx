import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightStripFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 7.219V7a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2H7.5a4.5 4.5 0 0 0-3.474 1.64l-.07-.05A2.25 2.25 0 0 1 3 7.22M17 4.5h-1.5V6H17zm-5.5 0H13V6h-1.5zM9 4.5H7.5V6H9z"
				clipRule="evenodd"
			/>
			<path d="M5.258 10.007A3 3 0 0 1 7.5 9h4.147l7.095 4.993q-.06.066-.12.128A3 3 0 0 1 16.5 15h-4.146z" />
			<path
				fillRule="evenodd"
				d="M21 16.781V17a4 4 0 0 1-4 4H5a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2h11.5a4.5 4.5 0 0 0 3.474-1.64l.07.05A2.25 2.25 0 0 1 21 16.78M7 19.5h1.5V18H7zm5.5 0H11V18h1.5zm2.5 0h1.5V18H15z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLightStripFilled.iconName = "light-strip--filled";

export default IconLightStripFilled;
