import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoNvidiaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#76B900"
				d="M8.776 8.974V7.622c.134-.008.267-.017.4-.017 3.707-.117 6.136 3.189 6.136 3.189s-2.621 3.64-5.434 3.64q-.566-.001-1.094-.176V10.15c1.444.175 1.737.81 2.596 2.254l1.929-1.62s-1.411-1.844-3.782-1.844c-.25-.009-.5.008-.75.033m0-4.474v2.02l.4-.025c5.151-.175 8.515 4.224 8.515 4.224s-3.856 4.69-7.872 4.69a6 6 0 0 1-1.035-.091v1.252c.284.034.576.058.86.058 3.74 0 6.444-1.911 9.065-4.165.434.35 2.212 1.194 2.58 1.561-2.488 2.087-8.29 3.765-11.578 3.765-.317 0-.618-.017-.918-.05V19.5H23v-15zm0 9.758v1.068C5.32 14.71 4.36 11.111 4.36 11.111s1.661-1.836 4.416-2.137v1.169h-.008c-1.444-.176-2.58 1.177-2.58 1.177s.643 2.278 2.588 2.938M2.641 10.96s2.045-3.022 6.143-3.34V6.52C4.244 6.887.32 10.727.32 10.727s2.22 6.427 8.456 7.012V16.57c-4.574-.567-6.135-5.61-6.135-5.61"
			/>
		</svg>
	);
};

IconLogoNvidiaColor.iconName = "logo-nvidia--color";

export default IconLogoNvidiaColor;
