import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M2 4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0z" />
					<path
						fillRule="evenodd"
						d="M11 3.65a2 2 0 0 0-2 0L5 5.958A2 2 0 0 0 4 7.69v4.618a2 2 0 0 0 1 1.732l4 2.31q.185.106.383.17a5.5 5.5 0 0 1-.336-1.298L5.5 13.175a1 1 0 0 1-.5-.866V7.691l4.5 2.598v1.916a5.5 5.5 0 0 1 1-1.48v-.436L15 7.69v1.331q.516.047 1 .185V7.691a2 2 0 0 0-1-1.732zm-.5.865 4 2.31L10 9.423 5.5 6.825l4-2.31a1 1 0 0 1 1 0"
						clipRule="evenodd"
					/>
					<path d="M2 16a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0zM18 4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0z" />
					<path
						fillRule="evenodd"
						d="M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l1.146 1.147 2.646-2.647a.5.5 0 0 1 .708 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconArCheck.iconName = "ar-check";

export default IconArCheck;
