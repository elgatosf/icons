import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMultiActionSwitchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14.25 15.5a3.25 3.25 0 0 1 0 6.5h-4.5a3.25 3.25 0 0 1 0-6.5zM9.75 17a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
						clipRule="evenodd"
					/>
					<path d="M11.985 2.21a.73.73 0 0 1 .917-.093l.114.093 4.416 4.416c.759.759.759 1.99 0 2.749l-4.416 4.416a.73.73 0 0 1-1.031-1.032L16.4 8.343a.486.486 0 0 0 0-.686L11.985 3.24l-.093-.114a.73.73 0 0 1 .093-.917" />
					<path d="M15.985 2.21a.73.73 0 0 1 .917-.093l.114.093 4.416 4.416c.759.759.759 1.99 0 2.749l-4.416 4.416a.73.73 0 0 1-1.031-1.032L20.4 8.343a.486.486 0 0 0 0-.686L15.985 3.24l-.093-.114a.73.73 0 0 1 .093-.917M6.625 2.569a1.944 1.944 0 0 1 2.75 0l4.056 4.057c.759.759.759 1.99 0 2.749L9.374 13.43c-.759.759-1.99.76-2.749 0L2.57 9.375a1.944 1.944 0 0 1 0-2.75z" />
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
						d="M11.5 13a2.5 2.5 0 0 1 0 5h-3a2.5 2.5 0 0 1 0-5zm-3 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
						clipRule="evenodd"
					/>
					<path d="M5.585 2.58c.781-.78 2.048-.78 2.83 0l3.004 3.005c.78.781.781 2.049 0 2.83l-3.005 3.004c-.78.781-2.048.781-2.829 0L2.58 8.414a2 2 0 0 1 0-2.829z" />
					<path d="M10.272 2.147a.5.5 0 0 1 .707 0l3.44 3.44c.78.781.781 2.049 0 2.83l-3.437 3.437a.5.5 0 0 1-.707-.707l3.437-3.438c.39-.39.39-1.024 0-1.415l-3.44-3.44a.5.5 0 0 1 0-.707" />
					<path d="M13.272 2.147a.5.5 0 0 1 .707 0l3.44 3.44c.78.781.781 2.049 0 2.83l-3.437 3.437a.5.5 0 0 1-.707-.707l3.437-3.438c.39-.39.39-1.024 0-1.415l-3.44-3.44a.5.5 0 0 1 0-.707" />
				</svg>
			);
	}
};

IconMultiActionSwitchFilled.iconName = "multi-action-switch--filled";

export default IconMultiActionSwitchFilled;
