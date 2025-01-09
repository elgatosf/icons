import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightStripOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-.938.939c.102.24.158.504.158.781v.5a2 2 0 0 1-2 2h-1.44l-3.322 3.323 4.504 3.17q-.06.066-.12.128A3 3 0 0 1 16.5 15h-4.146l-1.346-.947L8.56 16.5H16.5a4.5 4.5 0 0 0 3.474-1.64l.07.05A2.25 2.25 0 0 1 21 16.78V17a4 4 0 0 1-4 4H5c-.277 0-.541-.056-.781-.158l-.939.938a.75.75 0 0 1-1.06 0M7 18.06v1.44h1.5V18H7.06zm5.5 1.44H11V18h1.5zm2.5 0h1.5V18H15z"
				clipRule="evenodd"
			/>
			<path d="m8.52 12.302 3.229-3.23L11.647 9H7.5a3 3 0 0 0-2.242 1.007z" />
			<path
				fillRule="evenodd"
				d="m13.32 7.5 2.18-2.18V4.5h.82l1.5-1.5H7a4 4 0 0 0-4 4v.277c.01.698.341 1.381.955 1.813l.071.05A4.5 4.5 0 0 1 7.5 7.5zm-.32-3h-1.5V6H13zm-5.5 0H9V6H7.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLightStripOffFilled.iconName = "light-strip-off--filled";

export default IconLightStripOffFilled;
