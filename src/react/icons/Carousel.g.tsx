import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCarousel = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.78033 13.7197C9.07322 14.0126 9.07322 14.4874 8.78033 14.7803C8.48744 15.0732 8.01256 15.0732 7.71967 14.7803L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.71967 9.21967C8.01256 8.92678 8.48744 8.92678 8.78033 9.21967C9.07322 9.51256 9.07322 9.98744 8.78033 10.2803L7.06066 12L8.78033 13.7197Z" />
			<path d="M15.2197 13.7197C14.9268 14.0126 14.9268 14.4874 15.2197 14.7803C15.5126 15.0732 15.9874 15.0732 16.2803 14.7803L18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697L16.2803 9.21967C15.9874 8.92678 15.5126 8.92678 15.2197 9.21967C14.9268 9.51256 14.9268 9.98744 15.2197 10.2803L16.9393 12L15.2197 13.7197Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5Z"
			/>
		</svg>
	);
};

IconCarousel.iconName = "carousel";

export default IconCarousel;
