import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSaveFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7 7.5L7.01074 7.7041C7.1062 8.64565 7.85435 9.3938 8.7959 9.48926L9 9.5H15L15.2041 9.48926C16.2128 9.387 17 8.53565 17 7.5V3.18164C17.2157 3.2799 17.4151 3.41512 17.5859 3.58594L20.4141 6.41406C20.7891 6.78906 20.9999 7.2978 21 7.82812V19C21 20.1046 20.1046 21 19 21H17V14L16.9893 13.7959C16.8938 12.8543 16.1457 12.1062 15.2041 12.0107L15 12H9L8.7959 12.0107C7.85435 12.1062 7.1062 12.8543 7.01074 13.7959L7 14V21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H7V7.5Z" />
					<path d="M15 13.5C15.2761 13.5 15.5 13.7239 15.5 14V21H8.5V14C8.5 13.7239 8.72386 13.5 9 13.5H15Z" />
					<path d="M15.5 7.5C15.5 7.77614 15.2761 8 15 8H9C8.72386 8 8.5 7.77614 8.5 7.5V3H15.5V7.5Z" />
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
					<path d="M6 6C6 7.10457 6.89543 8 8 8H12C13.1046 8 14 7.10457 14 6V3.18164C14.2157 3.2799 14.4151 3.41512 14.5859 3.58594L16.4141 5.41406C16.7891 5.78906 16.9999 6.2978 17 6.82812V15C17 16.1046 16.1046 17 15 17H14V12C14 10.8954 13.1046 10 12 10H8C6.96435 10 6.113 10.7872 6.01074 11.7959L6 12V17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H6V6Z" />
					<path d="M12 11C12.5523 11 13 11.4477 13 12V17H7V12C7 11.4477 7.44772 11 8 11H12Z" />
					<path d="M13 6C13 6.55228 12.5523 7 12 7H8C7.44772 7 7 6.55228 7 6V3H13V6Z" />
				</svg>
			);
	}
};

IconSaveFilled.iconName = "save--filled";

export default IconSaveFilled;
