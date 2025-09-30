import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBackspaceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.90244 4.68298C7.28222 4.24896 7.83086 4 8.40759 4H20.0001C21.1046 4 22.0001 4.89543 22.0001 6V18C22.0001 19.1046 21.1046 20 20.0001 20H8.40759C7.83086 20 7.28222 19.751 6.90244 19.317L1.6524 13.317C0.992596 12.563 0.992597 11.437 1.6524 10.683L6.90244 4.68298ZM17.7803 8.21967C18.0732 8.51256 18.0732 8.98744 17.7803 9.28033L15.0607 12L17.7803 14.7197C18.0732 15.0126 18.0732 15.4874 17.7803 15.7803C17.4874 16.0732 17.0126 16.0732 16.7197 15.7803L14 13.0607L11.2803 15.7803C10.9874 16.0732 10.5126 16.0732 10.2197 15.7803C9.92678 15.4874 9.92678 15.0126 10.2197 14.7197L12.9393 12L10.2197 9.28033C9.92678 8.98744 9.92678 8.51256 10.2197 8.21967C10.5126 7.92678 10.9874 7.92678 11.2803 8.21967L14 10.9393L16.7197 8.21967C17.0126 7.92678 17.4874 7.92678 17.7803 8.21967Z"
			/>
		</svg>
	);
};

IconBackspaceFilled.iconName = "backspace--filled";

export default IconBackspaceFilled;
