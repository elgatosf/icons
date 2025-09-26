import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamelements = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.896.797a.117.117 0 0 1 .207 0l1.346 2.61-.005-.003c.056.107.077.23.06.35l-.454 3.182.855 1.81c.04.086.054.182.038.276l-.31 1.881c-.01.06-.098.06-.11 0l-.168-1.026a1.73 1.73 0 0 0-.436-.892l-.35.962a.06.06 0 0 1-.051.037h-.079l-.228.915c.272 1.267.843 3.112 2.087 3.113.972 0 2.285-1.608 2.475-2.352.07.466.166 1.094.595 1.094 1.034 0 1.877-2.212 1.951-2.826-.033-3.047-2-5.788-4.857-6.812l-.435-.845A8.01 8.01 0 0 1 18 10.005C18 14.412 14.41 18 10 18s-8-3.588-8-7.995a8.01 8.01 0 0 1 5.97-7.732l-.434.843C4.678 4.14 2.708 6.883 2.678 9.933c.078.623.92 2.82 1.95 2.82.431 0 .526-.627.597-1.093.19.745 1.502 2.352 2.474 2.352 1.244 0 1.815-1.847 2.087-3.114l-.227-.914h-.082a.06.06 0 0 1-.051-.037l-.35-.958a1.73 1.73 0 0 0-.431.888L8.477 10.9c-.01.061-.1.061-.11 0l-.31-1.879a.46.46 0 0 1 .038-.275l.85-1.8-.455-3.193a.58.58 0 0 1 .06-.35z" />
		</svg>
	);
};

IconLogoStreamelements.iconName = "logo-streamelements";

export default IconLogoStreamelements;
