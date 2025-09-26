import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCodeBlock = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.72 8.22a.75.75 0 1 1 1.06 1.06L8.06 12l2.72 2.72.052.056a.75.75 0 0 1-1.056 1.056l-.056-.052-3.25-3.25a.75.75 0 0 1 0-1.06zM13.22 8.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25-.056.052a.75.75 0 0 1-1.056-1.056l.052-.056L15.94 12l-2.72-2.72a.75.75 0 0 1 0-1.06" />
					<path
						fillRule="evenodd"
						d="M19.204 3.01A2 2 0 0 1 21 5v14l-.01.204a2 2 0 0 1-1.786 1.785L19 21H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 19V5a2 2 0 0 1 1.796-1.99L5 3h14zM5 4.5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5z"
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
					<path d="M8.225 7.082a.5.5 0 0 1 .693.693l-.064.079L6.707 10l2.147 2.146.064.079a.5.5 0 0 1-.693.693l-.079-.064-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5zM11.147 7.146a.5.5 0 0 1 .628-.064l.079.064 2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5-.079.065a.5.5 0 0 1-.693-.693l.064-.079L13.294 10l-2.146-2.146-.065-.079a.5.5 0 0 1 .064-.629" />
					<path
						fillRule="evenodd"
						d="M15.204 3.01A2 2 0 0 1 17 5v10l-.01.204a2 2 0 0 1-1.786 1.785L15 17H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 15V5a2 2 0 0 1 1.796-1.99L5 3h10zM5 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCodeBlock.iconName = "code-block";

export default IconCodeBlock;
