import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeadphonesAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6041 3.5 20.3532 7.16054 20.4958 11.73C21.0485 12.0175 21.5546 12.3821 22 12.8096V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V17.25C2 17.6642 2.33579 18 2.75 18C3.16421 18 3.5 17.6642 3.5 17.25V12Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 15C5 13.8954 5.89543 13 7 13H8C9.10457 13 10 13.8954 10 15V20C10 21.1046 9.10457 22 8 22H7C5.89543 22 5 21.1046 5 20V15ZM7 14.5H8C8.27614 14.5 8.5 14.7239 8.5 15V20C8.5 20.2761 8.27614 20.5 8 20.5H7C6.72386 20.5 6.5 20.2761 6.5 20V15C6.5 14.7239 6.72386 14.5 7 14.5Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z"
			/>
		</svg>
	);
};

IconHeadphonesAdd.iconName = "headphones-add";

export default IconHeadphonesAdd;
