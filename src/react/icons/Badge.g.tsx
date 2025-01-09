import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBadge = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="m19.25 7.526-7-4.042a.5.5 0 0 0-.5 0l-7 4.042a.5.5 0 0 0-.25.433v8.083a.5.5 0 0 0 .25.432l7 4.042a.5.5 0 0 0 .5 0l7-4.041a.5.5 0 0 0 .25-.434V7.96a.5.5 0 0 0-.25-.433M13 2.186a2 2 0 0 0-2 0l-7 4.04A2 2 0 0 0 3 7.96v8.083a2 2 0 0 0 1 1.731l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.96a2 2 0 0 0-1-1.732z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="m13.061 10.54-1.06-2.15-1.062 2.15-2.373.344 1.717 1.674-.405 2.363L12 13.805l2.122 1.116-.405-2.363 1.717-1.674zM9.943 9.168l-2.595.378a1 1 0 0 0-.554 1.705l1.877 1.83-.443 2.585A1 1 0 0 0 9.68 16.72L12 15.5l2.321 1.22a1 1 0 0 0 1.451-1.054l-.443-2.584 1.877-1.83a1 1 0 0 0-.554-1.706l-2.595-.378-1.16-2.351a1 1 0 0 0-1.794 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBadge.iconName = "badge";

export default IconBadge;
