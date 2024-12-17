import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolume2 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m6 16 3.293 3.293c.63.63 1.707.184 1.707-.707V5.414c0-.89-1.077-1.337-1.707-.707L6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2zm0-1.5a1.5 1.5 0 0 1 1.06.44l2.44 2.439V6.62L7.06 9.06A1.5 1.5 0 0 1 6 9.5H4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5z"
				clipRule="evenodd"
			/>
			<path d="M12.768 9.171a.75.75 0 0 1 1.06 0 4 4 0 0 1 0 5.657.75.75 0 1 1-1.06-1.06 2.5 2.5 0 0 0 0-3.536.75.75 0 0 1 0-1.06Z" />
			<path d="M16.303 6.697a.75.75 0 0 0-1.06 1.06 6 6 0 0 1 0 8.486.75.75 0 0 0 1.06 1.06 7.5 7.5 0 0 0 0-10.606" />
		</svg>
	);
};

IconVolume2.iconName = "volume-2";

export default IconVolume2;
