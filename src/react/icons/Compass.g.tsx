import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompass = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6.91403 15.7808C6.57559 16.6027 7.39753 17.4246 8.21946 17.0862L14.115 14.6586C14.3615 14.5571 14.5573 14.3613 14.6589 14.1147L17.0864 8.21922C17.4249 7.39728 16.6029 6.57535 15.781 6.91379L9.88552 9.34134C9.63894 9.44288 9.44312 9.63869 9.34159 9.88527L6.91403 15.7808ZM15.2425 8.75771L10.6493 10.649L13.3512 13.3509L15.2425 8.75771Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
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
						d="M13.8536 6.14645C13.995 6.28788 14.0385 6.49999 13.9642 6.6857L11.9642 11.6857C11.9134 11.8127 11.8127 11.9134 11.6857 11.9642L6.6857 13.9642C6.49999 14.0385 6.28788 13.995 6.14645 13.8536C6.00502 13.7121 5.96148 13.5 6.03576 13.3143L8.03576 8.3143C8.08658 8.18725 8.18725 8.08658 8.3143 8.03576L13.3143 6.03576C13.5 5.96148 13.7121 6.00502 13.8536 6.14645ZM8.88465 8.88465L11.1153 11.1153L12.6025 7.39753L8.88465 8.88465Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
					/>
				</svg>
			);
	}
};

IconCompass.iconName = "compass";

export default IconCompass;
