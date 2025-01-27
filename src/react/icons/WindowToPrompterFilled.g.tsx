import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowToPrompterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5H2zM2 7h16v2.75a.75.75 0 0 1-.75.75h-3.382a3.25 3.25 0 0 0-3.23 3.611l.007.056a.75.75 0 0 1-.746.833H4a2 2 0 0 1-2-2zM12 21.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75" />
			<path d="M12.142 13.962A1.75 1.75 0 0 1 13.88 12h6.242c1.05 0 1.864.92 1.737 1.962l-.427 3.5A1.75 1.75 0 0 1 19.693 19h-5.387a1.75 1.75 0 0 1-1.737-1.538z" />
		</svg>
	);
};

IconWindowToPrompterFilled.iconName = "window-to-prompter--filled";

export default IconWindowToPrompterFilled;
