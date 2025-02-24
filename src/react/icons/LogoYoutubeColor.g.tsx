import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
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
				fill="#F03"
				d="M23.496 6.223a3 3 0 0 0-2.122-2.121c-1.87-.502-9.376-.502-9.376-.502s-7.505 0-9.376.502A3.01 3.01 0 0 0 .5 6.223C0 8.094 0 12 0 12s0 3.906.502 5.777a3 3 0 0 0 2.122 2.122C4.494 20.4 12 20.4 12 20.4s7.506 0 9.376-.502a3 3 0 0 0 2.122-2.122C24 15.907 24 12 24 12s-.002-3.906-.504-5.777"
			/>
			<path fill="#fff" d="m9.599 15.6 6.233-3.6-6.233-3.599z" />
		</svg>
	);
};

IconLogoYoutubeColor.iconName = "logo-youtube--color";

export default IconLogoYoutubeColor;
