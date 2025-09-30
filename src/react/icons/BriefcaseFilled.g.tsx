import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBriefcaseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7H20C21.1046 7 22 7.89543 22 9V11C22 12.1653 21.5017 13.2142 20.7066 13.9453C19.9943 14.6002 19.0438 15 18 15H12.75V14.25C12.75 13.8358 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.8358 11.25 14.25V15H6C4.95616 15 4.00571 14.6002 3.29344 13.9453C2.4983 13.2142 2 12.1653 2 11V9C2 7.89543 2.89543 7 4 7H8ZM10 4.5H14C14.2761 4.5 14.5 4.72386 14.5 5V7H9.5V5C9.5 4.72386 9.72386 4.5 10 4.5Z"
			/>
			<path d="M3 15.6105V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15.6105C20.1372 16.1731 19.1068 16.5 18 16.5H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V16.5H6C4.89321 16.5 3.86278 16.1731 3 15.6105Z" />
		</svg>
	);
};

IconBriefcaseFilled.iconName = "briefcase--filled";

export default IconBriefcaseFilled;
