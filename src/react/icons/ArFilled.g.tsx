import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0zM2 16a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0zM16 2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM18 16a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0zM9 3.65a2 2 0 0 1 2 0l4 2.309a2 2 0 0 1 .427.33L10 9.422 4.573 6.29q.188-.192.427-.33zM10.5 10.289l5.427-3.134q.072.259.073.536v4.618a2 2 0 0 1-1 1.732l-4 2.31q-.24.137-.5.204zM9.5 10.289v6.266a2 2 0 0 1-.5-.204l-4-2.31a2 2 0 0 1-1-1.732V7.691q0-.277.073-.536z" />
				</svg>
			);
	}
};

IconArFilled.iconName = "ar--filled";

export default IconArFilled;
