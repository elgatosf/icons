import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoDropbox = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.013 6.382 7.006 9.765l5.007 3.382-5.007 3.383L2 13.129l5.006-3.382L2 6.382 7.006 3zM6.98 17.618l5.006-3.383 5.007 3.383L11.987 21zm5.032-4.489 5.006-3.382-5.006-3.365L16.993 3 22 6.382l-5.006 3.383L22 13.147l-5.006 3.383z" />
		</svg>
	);
};

IconLogoDropbox.iconName = "logo-dropbox";

export default IconLogoDropbox;
