import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGlobe = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0m-7.58 6.708c-.25.282-.395.292-.42.292-.026 0-.17-.01-.42-.292-.248-.28-.518-.744-.765-1.402-.452-1.205-.763-2.891-.809-4.806h3.988c-.046 1.915-.357 3.6-.809 4.806-.247.658-.517 1.121-.766 1.402M11.994 9.5H8.006c.046-1.915.357-3.6.809-4.806.247-.658.517-1.121.766-1.402C9.83 3.01 9.974 3 10 3s.17.01.42.292c.248.28.518.744.765 1.402.452 1.206.762 2.891.809 4.806m1 1c-.062 2.678-.618 5-1.428 6.324a7 7 0 0 0 5.416-6.324zm3.988-1h-3.988c-.062-2.678-.618-5-1.428-6.324A7 7 0 0 1 16.983 9.5m-9.976 0c.062-2.678.618-5 1.427-6.324A7 7 0 0 0 3.018 9.5zm-3.988 1a7 7 0 0 0 5.415 6.324c-.81-1.325-1.365-3.646-1.427-6.324z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconGlobe.iconName = "globe";

export default IconGlobe;
