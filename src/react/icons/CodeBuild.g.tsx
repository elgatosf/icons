import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCodeBuild = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.72 14.22a.75.75 0 0 1 1.06 1.06L3.06 18l2.72 2.72.052.056a.75.75 0 0 1-1.056 1.056l-.056-.052-3.25-3.25a.75.75 0 0 1 0-1.06zM8.22 14.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25-.056.052a.75.75 0 0 1-1.056-1.056l.052-.057L10.94 18 8.22 15.28a.75.75 0 0 1 0-1.06" />
					<path d="M5 5.072C5 3.532 6.667 2.57 8 3.34l12 6.928c1.333.77 1.333 2.694 0 3.464l-5.358 3.092a.749.749 0 1 1-.75-1.298l5.358-3.093a.5.5 0 0 0 0-.866l-12-6.929a.5.5 0 0 0-.75.434v6.693a.75.75 0 0 1-1.5 0zM4.72 14.22a.75.75 0 0 1 1.06 1.06L3.06 18l2.72 2.72.052.056a.75.75 0 0 1-1.056 1.056l-.056-.052-3.25-3.25a.75.75 0 0 1 0-1.06z" />
					<path d="M8.22 14.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25-.056.052a.75.75 0 0 1-1.056-1.056l.052-.057L10.94 18 8.22 15.28a.75.75 0 0 1 0-1.06" />
					<path d="M5 5.072C5 3.532 6.667 2.57 8 3.34l12 6.928c1.333.77 1.333 2.694 0 3.464l-5.358 3.092a.749.749 0 1 1-.75-1.298l5.358-3.093a.5.5 0 0 0 0-.866l-12-6.929a.5.5 0 0 0-.75.434v6.693a.75.75 0 0 1-1.5 0z" />
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
					<path d="M4.225 12.082a.501.501 0 0 1 .693.693l-.064.078L2.707 15l2.147 2.146.064.078a.501.501 0 0 1-.693.694l-.078-.065-2.5-2.5a.5.5 0 0 1 0-.707l2.5-2.5zM7.147 12.146a.5.5 0 0 1 .629-.064l.078.064 2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5-.078.065a.5.5 0 0 1-.694-.694l.065-.078L9.293 15l-2.146-2.147-.065-.078a.5.5 0 0 1 .065-.629" />
					<path d="M4 4.804c0-1.54 1.667-2.502 3-1.732l9 5.196c1.333.77 1.333 2.694 0 3.464l-4.257 2.457a.5.5 0 0 1-.5-.866l4.257-2.457a1 1 0 0 0 0-1.732l-9-5.196a1 1 0 0 0-1.5.866V10.5a.5.5 0 0 1-1 0z" />
				</svg>
			);
	}
};

IconCodeBuild.iconName = "code-build";

export default IconCodeBuild;
