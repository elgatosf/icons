import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEyedropper = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m10.25 9.75-.336-.336C8.654 8.154 9.547 6 11.328 6h.844a2 2 0 0 0 1.414-.586L15 4a3.536 3.536 0 1 1 5 5l-1.414 1.414A2 2 0 0 0 18 11.828v.844c0 1.781-2.154 2.674-3.414 1.414l-.336-.336-6.375 6.374a2 2 0 0 1-.888.516l-1.61.44c-1.493.406-2.863-.964-2.456-2.457l.44-1.61a2 2 0 0 1 .514-.889zm8.69-1.81-1.415 1.414a3.5 3.5 0 0 0-1.025 2.474v.844a.5.5 0 0 1-.854.353l-4.671-4.671a.5.5 0 0 1 .353-.854h.844a3.5 3.5 0 0 0 2.474-1.025l1.415-1.414a2.036 2.036 0 0 1 2.878 2.878m-7.63 2.87-6.374 6.375a.5.5 0 0 0-.129.222l-.439 1.611a.5.5 0 0 0 .614.614l1.61-.44a.5.5 0 0 0 .223-.128l6.374-6.375z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconEyedropper.iconName = "eyedropper";

export default IconEyedropper;
