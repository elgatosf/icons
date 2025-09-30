import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolder = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H9.075C9.58855 3 10.0824 3.19755 10.4543 3.55172L12.3552 5.36207C12.4481 5.45061 12.5716 5.5 12.7 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19C22 20.1046 21.1046 21 20 21ZM20 19.5H4C3.72386 19.5 3.5 19.2761 3.5 19V11H20.5V19C20.5 19.2761 20.2761 19.5 20 19.5ZM20.5 9.5H3.5V5C3.5 4.72386 3.72386 4.5 4 4.5H9.075C9.20339 4.5 9.32686 4.54939 9.41983 4.63793L11.3207 6.44828C11.6926 6.80245 12.1864 7 12.7 7H20C20.2761 7 20.5 7.22386 20.5 7.5V9.5Z"
					/>
				</svg>
			);
		default:
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.08579 3.58579C8.71071 3.21071 8.20201 3 7.67157 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V7C18 5.89543 17.1046 5 16 5H10.9142C10.649 5 10.3946 4.89464 10.2071 4.70711L9.08579 3.58579ZM9.5 5.41421L8.37868 4.29289C8.19114 4.10536 7.93679 4 7.67157 4H4C3.44772 4 3 4.44772 3 5V8H17V7C17 6.44772 16.5523 6 16 6H10.9142C10.3838 6 9.87507 5.78928 9.5 5.41421ZM3 9H17V15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15V9Z"
					/>
				</svg>
			);
	}
};

IconFolder.iconName = "folder";

export default IconFolder;
