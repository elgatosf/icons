import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSendFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M15.93 8.225 5.928 3.033c-1.657-.86-3.485.818-2.768 2.543L4.792 9.5H10.5a.5.5 0 1 1 0 1H4.792L3.16 14.425c-.717 1.724 1.11 3.403 2.768 2.543l10.002-5.193c1.438-.746 1.438-2.803 0-3.55" />
		</svg>
	);
};

IconSendFilled.iconName = "send--filled";

export default IconSendFilled;
