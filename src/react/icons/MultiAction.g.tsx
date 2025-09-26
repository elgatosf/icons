import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMultiAction = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11.985 5.21a.73.73 0 0 1 .917-.093l.114.093 5.416 5.416c.759.759.759 1.99 0 2.749l-5.416 5.416a.73.73 0 0 1-1.031-1.032l5.416-5.415a.485.485 0 0 0 0-.687l-5.416-5.416-.093-.114a.73.73 0 0 1 .093-.917" />
					<path d="M15.985 5.21a.73.73 0 0 1 .917-.093l.114.093 5.416 5.416c.759.759.759 1.99 0 2.749l-5.416 5.416a.73.73 0 0 1-1.031-1.032l5.416-5.415a.485.485 0 0 0 0-.687l-5.416-5.416-.093-.114a.73.73 0 0 1 .093-.917" />
					<path
						fillRule="evenodd"
						d="M6.625 5.57c.76-.76 1.99-.76 2.75 0l5.056 5.056c.759.759.759 1.99 0 2.749L9.374 18.43c-.759.76-1.99.76-2.749 0L1.57 13.375a1.945 1.945 0 0 1 0-2.75zM8.343 6.6a.486.486 0 0 0-.687 0L2.6 11.656a.487.487 0 0 0 0 .687L7.656 17.4c.19.19.497.19.687 0l5.058-5.057a.486.486 0 0 0 0-.687z"
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
						d="M5.585 4.58c.781-.78 2.048-.78 2.83 0l4.004 4.005a2 2 0 0 1 0 2.83l-4.005 4.004a2 2 0 0 1-2.829 0L1.58 11.414a2 2 0 0 1 0-2.829zm2.122.707a1 1 0 0 0-1.415 0L2.287 9.292c-.39.39-.39 1.025 0 1.415l4.005 4.005c.39.39 1.025.39 1.415 0l4.005-4.005c.39-.39.39-1.024 0-1.415z"
						clipRule="evenodd"
					/>
					<path d="M10.272 4.147a.5.5 0 0 1 .707 0l4.44 4.44c.781.781.781 2.048 0 2.83l-4.437 4.437a.5.5 0 0 1-.707-.707l4.437-4.438c.39-.39.39-1.024 0-1.415l-4.44-4.44a.5.5 0 0 1 0-.707" />
					<path d="M13.272 4.147a.5.5 0 0 1 .707 0l4.44 4.44c.781.781.781 2.048 0 2.83l-4.437 4.437a.5.5 0 0 1-.707-.707l4.437-4.438c.39-.39.39-1.024 0-1.415l-4.44-4.44a.5.5 0 0 1 0-.707" />
				</svg>
			);
	}
};

IconMultiAction.iconName = "multi-action";

export default IconMultiAction;
