import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconElementsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M22 6C22 4.89543 21.1046 4 20 4H10C8.89543 4 8 4.89543 8 6V12C8 13.1046 8.89543 14 10 14H20C21.1046 14 22 13.1046 22 12V6Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.75 7C5.33579 7 5 7.33579 5 7.75V15C5 16.1046 5.89543 17 7 17H18.25C18.6642 17 19 16.6642 19 16.25C19 15.8358 18.6642 15.5 18.25 15.5H7C6.72386 15.5 6.5 15.2761 6.5 15V7.75C6.5 7.33579 6.16421 7 5.75 7Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.75 10C2.33579 10 2 10.3358 2 10.75V18C2 19.1046 2.89543 20 4 20H15.25C15.6642 20 16 19.6642 16 19.25C16 18.8358 15.6642 18.5 15.25 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V10.75C3.5 10.3358 3.16421 10 2.75 10Z"
			/>
		</svg>
	);
};

IconElementsFilled.iconName = "elements--filled";

export default IconElementsFilled;
