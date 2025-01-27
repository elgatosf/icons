import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSteam = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.43 14.915C3.68 19.016 7.49 22 11.998 22c5.521 0 10-4.478 10-10s-4.478-10-10-10S2.36 6.122 2.02 11.334q0 .004.004.007l5.37 2.218q.22-.15.469-.25a2.8 2.8 0 0 1 1.171-.206l2.447-3.556v-.05l-.003-.003a3.804 3.804 0 0 1 3.797-3.803 3.804 3.804 0 0 1 0 7.606h-.087L11.692 15.8a2.774 2.774 0 0 1-3.837 2.637 2.76 2.76 0 0 1-1.638-1.959z" />
			<path d="M8.098 17.85a2.136 2.136 0 0 0 2.797-1.153v.003a2.13 2.13 0 0 0 .003-1.64 2.12 2.12 0 0 0-1.156-1.163 2.12 2.12 0 0 0-1.578-.025l1.28.528a1.576 1.576 0 0 1-1.209 2.912L6.998 16.8c.225.472.616.847 1.1 1.05" />
			<path
				fillRule="evenodd"
				d="M12.751 9.497a2.54 2.54 0 0 0 2.531 2.534 2.537 2.537 0 0 0 2.532-2.534 2.537 2.537 0 0 0-2.532-2.534 2.537 2.537 0 0 0-2.53 2.534m2.535-1.91c-1.05 0-1.9.854-1.9 1.904s.85 1.903 1.9 1.903 1.9-.853 1.9-1.903-.854-1.903-1.9-1.903"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoSteam.iconName = "logo-steam";

export default IconLogoSteam;
