import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUsbCFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M14 6C16.2091 6 18 7.79086 18 10C18 12.2091 16.2091 14 14 14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6H14ZM6 9.5C5.72386 9.5 5.5 9.72386 5.5 10C5.5 10.2761 5.72386 10.5 6 10.5H14L14.1006 10.4902C14.3286 10.4437 14.5 10.2417 14.5 10C14.5 9.75829 14.3286 9.55629 14.1006 9.50977L14 9.5H6Z" />
		</svg>
	);
};

IconUsbCFilled.iconName = "usb-c--filled";

export default IconUsbCFilled;
