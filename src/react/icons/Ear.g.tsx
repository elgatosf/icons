import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconEar = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M11.863 3.5c-3.718 0-6.417 3.535-5.44 7.12l.05.183a.75.75 0 1 1-1.447.394l-.05-.182C3.739 6.475 7.157 2 11.864 2A7.137 7.137 0 0 1 19 9.137v.43a7.57 7.57 0 0 1-2.363 5.494l-1.752 1.66c-.46.437-.784.998-.93 1.616l-.042.18A4.517 4.517 0 0 1 5 17.484V17a.75.75 0 0 1 1.5 0v.483a3.017 3.017 0 0 0 5.953.691l.043-.18a4.75 4.75 0 0 1 1.357-2.362l1.752-1.66A6.07 6.07 0 0 0 17.5 9.568v-.43A5.637 5.637 0 0 0 11.863 3.5" />
			<path d="M9.967 11.64c-2.75-1.904-1.29-6.14 1.972-6.14 1.95 0 3.56 1.58 3.56 3.543V9.5a.75.75 0 1 1-1.5 0v-.457A2.06 2.06 0 0 0 11.94 7c-1.873 0-2.591 2.386-1.118 3.406C13.295 12.12 12.083 16 9.073 16H8.5a.75.75 0 0 1 0-1.5h.573c1.54 0 2.16-1.985.894-2.86" />
		</svg>
	);
};

IconEar.iconName = "ear";

export default IconEar;
