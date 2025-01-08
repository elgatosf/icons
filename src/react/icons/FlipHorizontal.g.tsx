import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipHorizontal = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0z" />
			<path
				fillRule="evenodd"
				d="M3 17.25a.75.75 0 0 0 1.28.53l5.25-5.25a.75.75 0 0 0 0-1.06L4.28 6.22A.75.75 0 0 0 3 6.75zM7.94 12 4.5 15.44V8.56zM21 17.25a.75.75 0 0 1-1.28.53l-5.25-5.25a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.28.53zM16.06 12l3.44 3.44V8.56z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlipHorizontal.iconName = "flip-horizontal";

export default IconFlipHorizontal;
