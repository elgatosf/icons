import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCut = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.982 3.345a.75.75 0 0 1 1.3.75l-5.416 9.379 1.466 2.538a3.5 3.5 0 1 1 .137 3.238L12 14.974l-2.462 4.264-.007.012a3.5 3.5 0 1 1 .137-3.238l1.466-2.538-5.415-9.38a.75.75 0 0 1 1.3-.75L12 11.975zM8.237 18.49a2 2 0 1 0-.008.014l.003-.005zm7.531.009a2 2 0 1 0 3.464-2 2 2 0 0 0-3.464 2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCut.iconName = "cut";

export default IconCut;
