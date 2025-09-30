import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCity = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.75 1.75C12.75 1.33579 12.4142 1 12 1C11.5858 1 11.25 1.33579 11.25 1.75V3H9.5C8.39543 3 7.5 3.89543 7.5 5V10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12.0704C21 11.4017 20.6658 10.7772 20.1094 10.4063L16.6094 8.07293C16.5733 8.04883 16.5368 8.0261 16.5 8.00469V5C16.5 3.89543 15.6046 3 14.5 3H12.75V1.75ZM9 5C9 4.72386 9.22386 4.5 9.5 4.5H14.5C14.7761 4.5 15 4.72386 15 5V7.79932C14.1728 8.01664 13.5 8.75503 13.5 9.73703V20.5H10.5V12C10.5 11.0681 9.86261 10.285 9 10.063V5ZM15.561 9.23983L15.2843 9.28596C15.1212 9.36417 15 9.52866 15 9.73703V20.5H19C19.2761 20.5 19.5 20.2761 19.5 20V12.0704C19.5 11.9032 19.4164 11.7471 19.2773 11.6543L15.7773 9.32101C15.7084 9.27506 15.6346 9.24889 15.561 9.23983ZM8.5 11.5H5C4.72386 11.5 4.5 11.7239 4.5 12V20C4.5 20.2761 4.72386 20.5 5 20.5H9V12C9 11.7239 8.77614 11.5 8.5 11.5Z"
			/>
		</svg>
	);
};

IconCity.iconName = "city";

export default IconCity;
