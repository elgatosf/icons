import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber8SquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.299 10.126c0-.78-.572-1.243-1.276-1.243s-1.31.43-1.31 1.232c0 .814.584 1.166 1.299 1.166.682 0 1.287-.385 1.287-1.155M13.475 13.69c0-.913-.704-1.342-1.496-1.342-.77 0-1.441.451-1.441 1.331 0 .891.66 1.375 1.452 1.375.78 0 1.485-.473 1.485-1.364" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10.026 10.79c0 1.76-1.518 2.364-2.948 2.364-1.397 0-3.102-.528-3.102-2.299 0-1.22.858-1.826 1.903-2.035-.363-.022-1.672-.385-1.672-1.804 0-1.617 1.507-2.167 2.816-2.167 1.265 0 2.805.517 2.805 2.112 0 1.045-.726 1.65-1.65 1.86.352.032 1.848.373 1.848 1.968"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNumber8SquareFilled.iconName = "number8-square--filled";

export default IconNumber8SquareFilled;
