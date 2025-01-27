import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightStripOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-.938.939c.102.24.158.504.158.781v.5a2 2 0 0 1-2 2h-1.44l-3.323 3.323 5.808 4.087A2.25 2.25 0 0 1 21 16.782V17a4 4 0 0 1-4 4H5c-.277 0-.541-.056-.781-.158l-.939.938a.75.75 0 0 1-1.06 0m3.34-2.28H7v-1.44zm3-3h5.925l-3.477-2.447zm3.524-3.524 4.961 3.492a4.5 4.5 0 0 0 1.755-.6L13.16 11.9zM8.5 19.5V18H11v1.5zm4 0V18H15v1.5zm4 0V18h.115a6 6 0 0 0 2.374-.539.8.8 0 0 0 .162-.076q.174-.087.341-.183A2.496 2.496 0 0 1 17 19.5zM9.596 11.225l-1.077 1.077L3.955 9.09A2.25 2.25 0 0 1 3 7.22V7a4 4 0 0 1 4-4h10.82L15.5 5.32V4.5H13V6h1.82l-1.5 1.5H9.516l2.234 1.572-1.077 1.077-3.717-2.616a4.5 4.5 0 0 0-1.755.599zM7 4.5h.5V6l-.115.001a6 6 0 0 0-2.374.538.8.8 0 0 0-.161.077 6 6 0 0 0-.342.182A2.497 2.497 0 0 1 7 4.5m2 0h2.5V6H9z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLightStripOff.iconName = "light-strip-off";

export default IconLightStripOff;
