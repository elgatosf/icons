import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWindsurf = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.816 6.222h-.191a1.814 1.814 0 0 0-1.817 1.814v4.057c0 .81-.67 1.466-1.466 1.466-.474 0-.947-.239-1.227-.638l-4.143-5.917a1.84 1.84 0 0 0-1.508-.785c-.945 0-1.795.803-1.795 1.795v4.08a1.47 1.47 0 0 1-1.466 1.466c-.475 0-.947-.239-1.227-.639L2.34 6.3a.187.187 0 0 0-.34.107v3.537c0 .18.055.353.157.5l4.562 6.515c.27.385.668.67 1.126.775a1.803 1.803 0 0 0 2.204-1.748v-4.078c0-.81.656-1.466 1.466-1.466h.003c.488 0 .946.238 1.226.638l4.144 5.916a1.81 1.81 0 0 0 3.3-1.01v-4.079c0-.81.657-1.466 1.467-1.466h.161a.183.183 0 0 0 .184-.183V6.406a.183.183 0 0 0-.184-.184" />
		</svg>
	);
};

IconLogoWindsurf.iconName = "logo-windsurf";

export default IconLogoWindsurf;
