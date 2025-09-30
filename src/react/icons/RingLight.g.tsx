import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRingLight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.75 17.9653C16.8166 17.5872 20 14.1654 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.1654 7.18341 17.5872 11.25 17.9653V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V17.9653ZM15.2612 15.6239C14.3026 16.181 13.1886 16.5 12 16.5C10.8114 16.5 9.69737 16.181 8.73877 15.6239L10.775 14.4483C11.4017 14.0865 11.5741 13.997 11.7401 13.9617C11.9115 13.9253 12.0886 13.9253 12.2599 13.9617C12.426 13.997 12.5983 14.0865 13.225 14.4483L15.2612 15.6239ZM16.5539 14.6381L13.8874 13.0986C13.3908 12.8113 13.0005 12.5856 12.5718 12.4945C12.1948 12.4144 11.8052 12.4144 11.4283 12.4945C10.9995 12.5856 10.6093 12.8113 10.1126 13.0986L7.44615 14.6382C6.24502 13.4587 5.5 11.8164 5.5 10C5.5 6.41015 8.41015 3.5 12 3.5C15.5899 3.5 18.5 6.41015 18.5 10C18.5 11.8164 17.755 13.4587 16.5539 14.6381Z"
			/>
		</svg>
	);
};

IconRingLight.iconName = "ring-light";

export default IconRingLight;
