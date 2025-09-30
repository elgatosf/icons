import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBookmark = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M14 3H6C5.44771 3 5 3.44771 5 4V16.4985C5 16.9157 5.48088 17.1495 5.80894 16.8917L9.07318 14.3265C9.61713 13.899 10.3829 13.899 10.9268 14.3265L14.1911 16.8917C14.5191 17.1495 15 16.9157 15 16.4985V4C15 3.44772 14.5523 3 14 3ZM14 2C15.1046 2 16 2.89543 16 4V16.4985C16 17.7502 14.5574 18.4513 13.5732 17.6779L10.3089 15.1128C10.1276 14.9703 9.87238 14.9703 9.69106 15.1128L6.42682 17.6779C5.44264 18.4513 4 17.7502 4 16.4985V4C4 2.89543 4.89543 2 6 2H14Z"
			/>
		</svg>
	);
};

IconBookmark.iconName = "bookmark";

export default IconBookmark;
