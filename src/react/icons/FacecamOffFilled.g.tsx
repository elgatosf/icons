import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L20.06 5c.6.007 1.165.283 1.455.809C22.108 6.88 23 8.992 23 11.99v.018c0 3-.892 5.11-1.485 6.182-.294.532-.869.809-1.476.809H6.06l-2.78 2.78a.75.75 0 0 1-1.061 0Zm7.532-6.471a4 4 0 0 0 5.557-5.557l-1.092 1.092a2.5 2.5 0 0 1-3.373 3.373L9.752 15.31ZM8.07 12.75l-5.53 5.532-.055-.09C1.892 17.118 1 15.005 1 12s.892-5.12 1.485-6.191C2.779 5.277 3.354 5 3.96 5h11.86l-3.07 3.07a4 4 0 0 0-4.68 4.68m-2.82 0h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFacecamOffFilled.iconName = "facecam-off--filled";

export default IconFacecamOffFilled;
