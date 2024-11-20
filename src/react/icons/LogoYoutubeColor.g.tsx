import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoYoutubeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="red"
				d="M22.538 6.705a2.76 2.76 0 0 0-1.945-1.945c-1.715-.46-8.595-.46-8.595-.46s-6.88 0-8.595.46a2.76 2.76 0 0 0-1.945 1.945C1 8.42 1 12 1 12s0 3.58.46 5.296a2.76 2.76 0 0 0 1.945 1.945C5.12 19.7 12 19.7 12 19.7s6.88 0 8.595-.46a2.76 2.76 0 0 0 1.945-1.945C23 15.58 23 12 23 12s-.002-3.58-.462-5.295"
			/>
			<path fill="#fff" d="m9.799 15.3 5.714-3.3-5.714-3.299z" />
		</svg>
	);
};

IconLogoYoutubeColor.iconName = "logo-youtube--color";

export default IconLogoYoutubeColor;
