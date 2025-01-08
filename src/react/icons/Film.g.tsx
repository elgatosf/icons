import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilm = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3.638 6.153a2 2 0 0 0-1.414 2.45L3 11.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H8.598l9.857-2.641a2 2 0 0 0 1.414-2.45l-.259-.966a2 2 0 0 0-2.45-1.414zm13.911-2.175-.65.174-1.276 2.413 2.444-.655a.5.5 0 0 0 .353-.612l-.259-.966a.5.5 0 0 0-.612-.354m-4.997 1.339 2.37-.635-1.277 2.413-2.369.634zm-1.977.53L9.3 8.259l-2.37.635 1.277-2.412zM6.228 7.01 4.952 9.424l-.891.239-.389-1.45a.5.5 0 0 1 .354-.611zM4.5 11.5H19a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFilm.iconName = "film";

export default IconFilm;
