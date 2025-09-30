import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPresentationFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M1 3.75C1 3.33579 1.33579 3 1.75 3H22.25C22.6642 3 23 3.33579 23 3.75C23 4.16421 22.6642 4.5 22.25 4.5H21V15C21 16.1046 20.1046 17 19 17H12.75V17.9393L15.5303 20.7197C15.8232 21.0126 15.8232 21.4874 15.5303 21.7803C15.2374 22.0732 14.7626 22.0732 14.4697 21.7803L12 19.3107L9.53033 21.7803C9.23744 22.0732 8.76256 22.0732 8.46967 21.7803C8.17678 21.4874 8.17678 21.0126 8.46967 20.7197L11.25 17.9393V17H5C3.89543 17 3 16.1046 3 15V4.5H1.75C1.33579 4.5 1 4.16421 1 3.75ZM8 8.25C8 7.83579 8.33579 7.5 8.75 7.5H15.25C15.6642 7.5 16 7.83579 16 8.25C16 8.66421 15.6642 9 15.25 9H8.75C8.33579 9 8 8.66421 8 8.25ZM8.75 11C8.33579 11 8 11.3358 8 11.75C8 12.1642 8.33579 12.5 8.75 12.5H15.25C15.6642 12.5 16 12.1642 16 11.75C16 11.3358 15.6642 11 15.25 11H8.75Z"
			/>
		</svg>
	);
};

IconPresentationFilled.iconName = "presentation--filled";

export default IconPresentationFilled;
