import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber8 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.85 14.275c0 2.24-1.932 3.01-3.752 3.01-1.778 0-3.948-.672-3.948-2.926 0-1.554 1.092-2.324 2.422-2.59-.462-.028-2.128-.49-2.128-2.296 0-2.058 1.918-2.758 3.584-2.758 1.61 0 3.57.658 3.57 2.688 0 1.33-.924 2.1-2.1 2.366.448.042 2.352.476 2.352 2.506m-2.198-4.662c0-.994-.728-1.582-1.624-1.582s-1.666.546-1.666 1.568c0 1.036.742 1.484 1.652 1.484.868 0 1.638-.49 1.638-1.47m.224 4.536c0-1.162-.896-1.708-1.904-1.708-.98 0-1.834.574-1.834 1.694 0 1.134.84 1.75 1.848 1.75.994 0 1.89-.602 1.89-1.736" />
		</svg>
	);
};

IconNumber8.iconName = "number8";

export default IconNumber8;
