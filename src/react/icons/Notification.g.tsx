import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNotification = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M7.172 16H4.5A1.5 1.5 0 0 1 3 14.5v-.879c0-.398.158-.779.44-1.06l1.267-1.268A1 1 0 0 0 5 10.586V8a5 5 0 0 1 10 0v2.586a1 1 0 0 0 .293.707l1.268 1.268A1.5 1.5 0 0 1 17 13.62v.879a1.5 1.5 0 0 1-1.5 1.5h-2.672q-.026.076-.056.148a3 3 0 0 1-5.6-.148M6 10.586V8a4 4 0 1 1 8 0v2.586A2 2 0 0 0 14.586 12l1.268 1.268a.5.5 0 0 1 .146.353v.879a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-.879a.5.5 0 0 1 .146-.353L5.414 12A2 2 0 0 0 6 10.586M8.268 16a2 2 0 0 0 3.464 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconNotification.iconName = "notification";

export default IconNotification;
