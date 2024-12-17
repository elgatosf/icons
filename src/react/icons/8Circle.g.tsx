import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const Icon8Circle = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M12.077 16.154c1.43 0 2.948-.605 2.948-2.365 0-1.595-1.496-1.936-1.848-1.969.924-.209 1.65-.814 1.65-1.859 0-1.595-1.54-2.112-2.805-2.112-1.309 0-2.816.55-2.816 2.167 0 1.42 1.31 1.782 1.672 1.804-1.045.21-1.903.814-1.903 2.035 0 1.771 1.705 2.3 3.102 2.3Zm-.055-7.27c.704 0 1.276.461 1.276 1.242 0 .77-.605 1.155-1.287 1.155-.715 0-1.298-.352-1.298-1.166 0-.803.605-1.232 1.31-1.232Zm-.044 3.464c.792 0 1.496.43 1.496 1.342 0 .891-.704 1.364-1.485 1.364-.792 0-1.452-.484-1.452-1.375 0-.88.671-1.33 1.441-1.33Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Icon8Circle.iconName = "8-circle";

export default Icon8Circle;
