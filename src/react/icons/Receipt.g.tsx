import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconReceipt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.75 6a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM7 9.75A.75.75 0 0 1 7.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 7 9.75M7.75 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM13.5 9.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M14.25 12a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
					<path
						fillRule="evenodd"
						d="M6 2a2 2 0 0 0-2 2v17.25a.75.75 0 0 0 1.29.521l1.877-1.942 1.877 1.942a.75.75 0 0 0 1.079 0L12 19.83l1.877 1.942a.75.75 0 0 0 1.079 0l1.877-1.942 1.878 1.942A.75.75 0 0 0 20 21.25V4a2 2 0 0 0-2-2zm-.5 2a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v15.395l-1.127-1.166a.75.75 0 0 0-1.079 0l-1.877 1.942-1.878-1.942a.75.75 0 0 0-1.078 0L9.583 20.17l-1.877-1.942a.75.75 0 0 0-1.079 0L5.5 19.395z"
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
					<path d="M10.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM12.5 8a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM12.5 5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
					<path
						fillRule="evenodd"
						d="M14 2a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.794.404l-2.456-1.787-2.456 1.787a.5.5 0 0 1-.588 0L7.25 16.117l-2.456 1.787A.5.5 0 0 1 4 17.5V4a2 2 0 0 1 2-2zM6 3a1 1 0 0 0-1 1v12.518l1.956-1.422.068-.042a.5.5 0 0 1 .52.042L10 16.882l2.456-1.786.068-.042a.5.5 0 0 1 .52.042L15 16.518V4a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconReceipt.iconName = "receipt";

export default IconReceipt;
