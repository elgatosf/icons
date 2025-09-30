import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRingLightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 10C20 14.1654 16.8166 17.5872 12.75 17.9653V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V17.9653C7.18341 17.5872 4 14.1654 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10ZM16.5539 14.6381C17.755 13.4587 18.5 11.8164 18.5 10C18.5 6.41015 15.5899 3.5 12 3.5C8.41015 3.5 5.5 6.41015 5.5 10C5.5 11.8164 6.24502 13.4587 7.44615 14.6382L10.1126 13.0986C10.6093 12.8113 10.9995 12.5856 11.4283 12.4945C11.8052 12.4144 12.1948 12.4144 12.5718 12.4945C13.0005 12.5856 13.3908 12.8113 13.8874 13.0986L16.5539 14.6381Z"
			/>
		</svg>
	);
};

IconRingLightFilled.iconName = "ring-light--filled";

export default IconRingLightFilled;
