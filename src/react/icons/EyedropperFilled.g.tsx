import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEyedropperFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.90971 9.40977C8.65629 8.14923 9.54862 6 11.3283 6H12.1715C12.7019 6 13.2106 5.78928 13.5857 5.41421L14.9999 4C16.3806 2.61928 18.6192 2.61928 19.9999 4C21.3806 5.38071 21.3806 7.61929 19.9999 9L18.5857 10.4142C18.2106 10.7893 17.9999 11.298 17.9999 11.8284V12.6716C17.9999 14.4534 15.8456 15.3457 14.5857 14.0858L9.90971 9.40977Z"
			/>
			<path d="M13.1893 14.8106L7.87548 20.1244C7.62937 20.3705 7.32329 20.5482 6.9875 20.6397L5.37659 21.0791C3.88359 21.4863 2.51364 20.1163 2.92083 18.6233L3.36017 17.0124C3.45174 16.6766 3.62937 16.3705 3.87548 16.1244L9.18928 10.8106L10.2499 11.8713L12.1286 13.75L13.1893 14.8106Z" />
		</svg>
	);
};

IconEyedropperFilled.iconName = "eyedropper--filled";

export default IconEyedropperFilled;
