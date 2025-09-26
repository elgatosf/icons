import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCodeBlockFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8.22 5.22a.75.75 0 0 0-1.06 0l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25.056.052a.75.75 0 0 0 1.056-1.056l-.052-.056L8.06 12l2.72-2.72a.75.75 0 0 0 0-1.06m3.5 0a.75.75 0 1 0-1.06 1.06L15.94 12l-2.72 2.72-.052.056a.75.75 0 0 0 1.056 1.056l.056-.052 3.25-3.25a.75.75 0 0 0 0-1.06z"
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
						d="M15 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.854 7.146a.5.5 0 0 0-.63-.064l-.078.064-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5.079.065a.5.5 0 0 0 .693-.693l-.064-.079L6.707 10l2.147-2.146.064-.079a.5.5 0 0 0-.064-.629m2.921-.064a.5.5 0 0 0-.693.693l.064.079L13.294 10l-2.146 2.146-.065.079a.5.5 0 0 0 .693.693l.079-.064 2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCodeBlockFilled.iconName = "code-block--filled";

export default IconCodeBlockFilled;
