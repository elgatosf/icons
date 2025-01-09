import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftCopilot = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M14.85 2H6.73C4.439 2 3.064 5.028 2.147 8.057c-1.086 3.587-2.506 8.386 1.604 8.386h.1l-.004.002h.455c1.031 0 1.938.681 2.224 1.671l.64 2.212c.279.967 1.15 1.64 2.151 1.67L9.282 22H9.25h8.02c2.291 0 3.666-3.029 4.582-6.058 1.072-3.54 2.47-8.262-1.445-8.385l.005-.001h-.083l-.08-.001h-.355a2.315 2.315 0 0 1-2.167-1.662l-.655-2.23A2.315 2.315 0 0 0 14.851 2m1.88 5.556h-3.48c-.957 0-1.806.586-2.153 1.462-.619 2.127-1.243 4.304-1.655 5.745a2.315 2.315 0 0 1-2.228 1.68h-.43l.003.002h3.96c.966 0 1.824-.6 2.163-1.493.616-2.118 1.237-4.282 1.647-5.718a2.315 2.315 0 0 1 2.174-1.678"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoMicrosoftCopilot.iconName = "logo-microsoft-copilot";

export default IconLogoMicrosoftCopilot;
