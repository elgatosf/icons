import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowToPrompter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.5 9.75V7H3.5V13C3.5 13.2761 3.72386 13.5 4 13.5H9.75C10.1642 13.5 10.5 13.8358 10.5 14.25C10.5 14.6642 10.1642 15 9.75 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V9.75C18 10.1642 17.6642 10.5 17.25 10.5C16.8358 10.5 16.5 10.1642 16.5 9.75ZM4 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V5.5H3.5V4C3.5 3.72386 3.72386 3.5 4 3.5Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.1423 13.9619C12.0151 12.9191 12.8289 12 13.8794 12H20.1206C21.1711 12 21.9849 12.9191 21.8577 13.9619L21.4307 17.4619C21.3235 18.34 20.5781 19 19.6935 19H14.3065C13.4219 19 12.6765 18.34 12.5693 17.4619L12.1423 13.9619ZM13.8794 13.5C13.7293 13.5 13.6131 13.6313 13.6313 13.7803L14.0583 17.2803C14.0736 17.4057 14.1801 17.5 14.3065 17.5H19.6935C19.8199 17.5 19.9264 17.4057 19.9417 17.2803L20.3687 13.7803C20.3869 13.6313 20.2707 13.5 20.1206 13.5H13.8794Z"
			/>
			<path d="M12 21.25C12 20.8358 12.3358 20.5 12.75 20.5H21.25C21.6642 20.5 22 20.8358 22 21.25C22 21.6642 21.6642 22 21.25 22H12.75C12.3358 22 12 21.6642 12 21.25Z" />
		</svg>
	);
};

IconWindowToPrompter.iconName = "window-to-prompter";

export default IconWindowToPrompter;
