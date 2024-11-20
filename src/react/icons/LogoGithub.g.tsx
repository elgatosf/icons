import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGithub = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.008 2C6.474 2 2 6.507 2 12.083c0 4.457 2.867 8.23 6.843 9.565.498.1.68-.217.68-.484 0-.234-.017-1.035-.017-1.87-2.784.601-3.364-1.202-3.364-1.202-.447-1.168-1.11-1.469-1.11-1.469-.911-.617.067-.617.067-.617 1.01.066 1.54 1.035 1.54 1.035.895 1.535 2.337 1.101 2.917.834.083-.651.348-1.102.63-1.352-2.22-.234-4.557-1.102-4.557-4.975 0-1.101.397-2.003 1.027-2.704-.1-.25-.447-1.285.1-2.67 0 0 .845-.268 2.75 1.034a9.6 9.6 0 0 1 2.502-.334 9.6 9.6 0 0 1 2.502.334c1.906-1.302 2.75-1.035 2.75-1.035.548 1.386.2 2.42.1 2.671.647.701 1.028 1.603 1.028 2.704 0 3.873-2.337 4.725-4.574 4.975.365.317.68.918.68 1.87 0 1.352-.017 2.437-.017 2.77 0 .268.183.585.68.485A10.075 10.075 0 0 0 22 12.083C22.016 6.507 17.526 2 12.008 2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGithub.iconName = "logo-github";

export default IconLogoGithub;
