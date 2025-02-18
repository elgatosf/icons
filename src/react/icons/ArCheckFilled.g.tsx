import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.25 3.5a.75.75 0 0 0 0-1.5H4a2 2 0 0 0-2 2v1.25a.75.75 0 0 0 1.5 0V4a.5.5 0 0 1 .5-.5zM3.5 18.75a.75.75 0 0 0-1.5 0V20a2 2 0 0 0 2 2h1.25a.75.75 0 0 0 0-1.5H4a.5.5 0 0 1-.5-.5zM20.5 5.25a.75.75 0 0 0 1.5 0V4a2 2 0 0 0-2-2h-1.25a.75.75 0 0 0 0 1.5H20a.5.5 0 0 1 .5.5zM13 4.495a2 2 0 0 0-2 0L6 7.38a2 2 0 0 0-.23.156L12 11.134l6.23-3.597A2 2 0 0 0 18 7.38zM12.75 12.433l6.23-3.597q.02.137.02.277v2.06A6.5 6.5 0 0 0 17.5 11a6.48 6.48 0 0 0-4.75 2.063zM11.25 12.433v3.276c-.163.569-.25 1.17-.25 1.791s.087 1.222.25 1.791v.337a2 2 0 0 1-.25-.122l-5-2.887a2 2 0 0 1-1-1.732V9.113q0-.14.02-.277z" />
					<path
						fillRule="evenodd"
						d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.646-1.854a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.146-3.147a.5.5 0 0 1 .708 0"
						clipRule="evenodd"
					/>
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
