import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCursorFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.8144 8.12426L5.51255 2.95125C3.91852 2.37469 2.37496 3.91824 2.95152 5.51228L8.12454 19.8141C8.76043 21.5722 11.246 21.5743 11.8849 19.8174L13.6813 14.8771C13.8835 14.3212 14.3214 13.8832 14.8774 13.681L19.8176 11.8846C21.5746 11.2457 21.5724 8.76015 19.8144 8.12426Z" />
		</svg>
	);
};

IconCursorFilled.iconName = "cursor--filled";

export default IconCursorFilled;
