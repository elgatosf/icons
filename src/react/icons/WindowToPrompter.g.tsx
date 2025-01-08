import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowToPrompter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.5 9.75V7h-13v6a.5.5 0 0 0 .5.5h5.75a.75.75 0 0 1 0 1.5H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5.75a.75.75 0 0 1-1.5 0M4 3.5h12a.5.5 0 0 1 .5.5v1.5h-13V4a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M12.142 13.962A1.75 1.75 0 0 1 13.88 12h6.242c1.05 0 1.864.92 1.737 1.962l-.427 3.5A1.75 1.75 0 0 1 19.693 19h-5.387a1.75 1.75 0 0 1-1.737-1.538zm1.737-.462a.25.25 0 0 0-.248.28l.427 3.5a.25.25 0 0 0 .248.22h5.388a.25.25 0 0 0 .248-.22l.427-3.5a.25.25 0 0 0-.248-.28z"
				clipRule="evenodd"
			/>
			<path d="M12 21.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75" />
		</svg>
	);
};

IconWindowToPrompter.iconName = "window-to-prompter";

export default IconWindowToPrompter;
