import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFlip = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.317 9.567a3.5 3.5 0 0 1 4.084 2.607l-.698-.699a.75.75 0 0 0-1.06 1.06l1.877 1.88a.75.75 0 0 0 1.061 0l1.878-1.88a.75.75 0 1 0-1.06-1.06l-.504.504a4.999 4.999 0 0 0-8.43-2.515.75.75 0 1 0 1.06 1.061 3.5 3.5 0 0 1 1.792-.958M12.683 16.433a3.5 3.5 0 0 1-4.084-2.607l.698.699a.75.75 0 0 0 1.06-1.06l-1.877-1.88a.75.75 0 0 0-1.061 0l-1.878 1.88a.75.75 0 1 0 1.06 1.06l.504-.504a5 5 0 0 0 8.43 2.514.75.75 0 1 0-1.06-1.06 3.5 3.5 0 0 1-1.792.958" />
			<path
				fillRule="evenodd"
				d="m17 6-1.703-2.555A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445L7 6H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-8.752.832A1.5 1.5 0 0 1 7 7.5H4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-3a1.5 1.5 0 0 1-1.248-.668L14.197 4.5H9.803z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraFlip.iconName = "camera-flip";

export default IconCameraFlip;
