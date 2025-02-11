import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderOpen = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M4 21h15.705a2 2 0 0 0 1.935-1.495l1.957-7.5A2 2 0 0 0 22 9.528V7.5a2 2 0 0 0-2-2h-7.3a.5.5 0 0 1-.345-.138l-1.9-1.81A2 2 0 0 0 9.074 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2M20.5 9.5H6.045a2 2 0 0 0-1.935 1.495l-.61 2.338V5a.5.5 0 0 1 .5-.5h5.075a.5.5 0 0 1 .345.138l1.9 1.81A2 2 0 0 0 12.7 7H20a.5.5 0 0 1 .5.5zm-.795 10a.5.5 0 0 0 .484-.374l1.956-7.5a.5.5 0 0 0-.484-.626H6.045a.5.5 0 0 0-.484.374l-1.956 7.5a.5.5 0 0 0 .484.626z"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
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
					<path
						fillRule="evenodd"
						d="M9.086 3.586A2 2 0 0 0 7.672 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11.809a2 2 0 0 0 1.897-1.367l1.666-5A2 2 0 0 0 18 8.069V7a2 2 0 0 0-2-2h-5.086a1 1 0 0 1-.707-.293zM17 8V7a1 1 0 0 0-1-1h-5.086A2 2 0 0 1 9.5 5.414L8.379 4.293A1 1 0 0 0 7.672 4H4a1 1 0 0 0-1 1v6.75l.794-2.382A2 2 0 0 1 5.692 8zM4.025 16h11.784a1 1 0 0 0 .948-.684l1.667-5A1 1 0 0 0 17.475 9H5.692a1 1 0 0 0-.95.684l-1.666 5A1 1 0 0 0 4.025 16"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFolderOpen.iconName = "folder-open";

export default IconFolderOpen;
