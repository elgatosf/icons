import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoQtColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#2CDE85"
				d="M7.826 9.139q.447-.812 1.625-.81 1.18-.001 1.619.81.435.81.434 2.602c0 1.188-.143 2.04-.42 2.538q-.426.751-1.633.753c-.806 0-1.355-.26-1.639-.767-.285-.506-.427-1.357-.427-2.538 0-1.189.15-2.047.44-2.588"
			/>
			<path
				fill="#2CDE85"
				fillRule="evenodd"
				d="M22 4.5v12.175L19.226 19.5H2V7.325L4.774 4.5zm-6.871 11.085q.4.5 1.472.5.45 0 1.289-.167l-.062-1.124-1.036.041c-.307 0-.504-.083-.58-.256q-.113-.25-.115-1.042v-2.839h1.745v-1.2h-1.745V7.624h-1.37v1.874h-.968v1.194h.968v2.998q.001 1.395.402 1.895m-3.777 2.464 1.302-.617-1.056-1.743c.49-.333.838-.819 1.056-1.457q.319-.948.32-2.5c0-1.568-.258-2.727-.783-3.477q-.779-1.133-2.734-1.131-1.953.001-2.74 1.138-.789 1.135-.79 3.478c0 1.555.258 2.7.776 3.422q.78 1.083 2.754 1.083c.355 0 .607-.028.77-.077z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoQtColor.iconName = "logo-qt--color";

export default IconLogoQtColor;
