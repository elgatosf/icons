import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 2a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1zM4 18a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1zM16 2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM9 3.65a2 2 0 0 1 2 0l4 2.309a2 2 0 0 1 .427.33L10 9.422 4.573 6.29q.188-.192.427-.33zM15.927 7.155 10.5 10.29v.436A5.48 5.48 0 0 1 14.5 9c.52 0 1.023.072 1.5.207V7.691q0-.277-.073-.536M9.5 10.289v1.916A5.5 5.5 0 0 0 9 14.5c0 .714.136 1.396.383 2.021q-.198-.064-.383-.17l-4-2.31a2 2 0 0 1-1-1.732V7.691q0-.277.073-.536z" />
					<path
						fillRule="evenodd"
						d="M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l1.146 1.147 2.646-2.647a.5.5 0 0 1 .708 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconArCheckFilled.iconName = "ar-check--filled";

export default IconArCheckFilled;
