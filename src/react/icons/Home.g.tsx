import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHome = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M10.5 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.978A2 2 0 0 1 3.772 7.4l7-5.444a2 2 0 0 1 2.456 0l7 5.444A2 2 0 0 1 21 8.98V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-6h-3zM9 13a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 13v6a.5.5 0 0 0 .5.5H19a.5.5 0 0 0 .5-.5V8.978a.5.5 0 0 0-.193-.394l-7-5.445a.5.5 0 0 0-.614 0l-7 5.445a.5.5 0 0 0-.193.394V19a.5.5 0 0 0 .5.5h3.5A.5.5 0 0 0 9 19z"
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
					<path
						fillRule="evenodd"
						d="M10.646 3.202a1 1 0 0 0-1.292 0l-5 4.23A1 1 0 0 0 4 8.196V15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4.5A1.5 1.5 0 0 1 9.5 9h1a1.5 1.5 0 0 1 1.5 1.5V15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8.196a1 1 0 0 0-.354-.764zm-1.938-.764a2 2 0 0 1 2.584 0l5 4.23A2 2 0 0 1 17 8.197V15a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.196a2 2 0 0 1 .708-1.527z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHome.iconName = "home";

export default IconHome;
