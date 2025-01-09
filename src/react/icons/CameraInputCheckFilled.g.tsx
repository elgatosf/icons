import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraInputCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.703 3.445 7 6H4a2 2 0 0 0-2 2v4.25h5.379l-1.47-1.47a.75.75 0 1 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 0 1-1.06-1.06l1.47-1.47H2V19a2 2 0 0 0 2 2h8.022a6.46 6.46 0 0 1-1.01-3.099c-.53-.106-1.04-.299-1.512-.57a.75.75 0 1 1 .75-1.3 3.5 3.5 0 0 0 .846.35 6.51 6.51 0 0 1 4.039-4.937 3.5 3.5 0 0 0-4.885-1.475.75.75 0 0 1-.75-1.3 5 5 0 0 1 7.109 2.392q.437-.06.891-.061c1.747 0 3.332.689 4.5 1.81V8a2 2 0 0 0-2-2h-3l-1.703-2.555A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.646-1.854a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.146-3.147a.5.5 0 0 1 .708 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraInputCheckFilled.iconName = "camera-input-check--filled";

export default IconCameraInputCheckFilled;
