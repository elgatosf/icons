import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M5.25 3.5a.75.75 0 0 0 0-1.5H4a2 2 0 0 0-2 2v1.25a.75.75 0 0 0 1.5 0V4a.5.5 0 0 1 .5-.5zM3.5 18.75a.75.75 0 0 0-1.5 0V20a2 2 0 0 0 2 2h1.25a.75.75 0 0 0 0-1.5H4a.5.5 0 0 1-.5-.5zM21.25 6a.75.75 0 0 1-.75-.75V4a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H20a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-.75.75M18.75 20.5a.75.75 0 0 0 0 1.5H20a2 2 0 0 0 2-2v-1.25a.75.75 0 0 0-1.5 0V20a.5.5 0 0 1-.5.5zM11 4.495a2 2 0 0 1 2 0l5 2.886a2 2 0 0 1 .23.156L12 11.134 5.77 7.537q.108-.085.23-.156zM12.75 12.433l6.23-3.597q.02.137.02.277v5.774a2 2 0 0 1-1 1.732l-5 2.887a2 2 0 0 1-.25.122zM11.25 19.628v-7.195L5.02 8.836Q5 8.973 5 9.113v5.774a2 2 0 0 0 1 1.732l5 2.887q.122.07.25.122" />
				</svg>
			);
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
					<path d="M2 4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0zM2 16a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0zM16 2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM18 16a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0zM9 3.65a2 2 0 0 1 2 0l4 2.309a2 2 0 0 1 .427.33L10 9.422 4.573 6.29q.188-.192.427-.33zM10.5 10.289l5.427-3.134q.072.259.073.536v4.618a2 2 0 0 1-1 1.732l-4 2.31q-.24.137-.5.204zM9.5 10.289v6.266a2 2 0 0 1-.5-.204l-4-2.31a2 2 0 0 1-1-1.732V7.691q0-.277.073-.536z" />
				</svg>
			);
	}
};

IconArFilled.iconName = "ar--filled";

export default IconArFilled;
