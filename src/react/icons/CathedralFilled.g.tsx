import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCathedralFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.48136 3.00473C6.27023 1.92795 4.72987 1.92794 4.51873 3.00472L3.03737 10.5594C3.01252 10.6862 3 10.8151 3 10.9443L3.00007 20C3.00007 21.1046 3.8955 22 5.00007 22L8.5 22C9.60457 22 10.5 21.1046 10.5 20V17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5V20C13.5 21.1046 14.3954 22 15.5 22L18.9999 22C20.1045 22 20.9999 21.1046 20.9999 20L21 10.9443C21 10.8151 20.9875 10.6862 20.9626 10.5594L19.4813 3.00472C19.2701 1.92794 17.7298 1.92795 17.5186 3.00473L16.0374 10.5594C16.0125 10.6862 16 10.8151 16 10.9442L16 11.5L12.75 8.25V6.75C12.75 6.33579 12.4142 6 12 6C11.5858 6 11.25 6.33579 11.25 6.75V8.25L8 11.5L8 10.9442C8 10.8151 7.98748 10.6862 7.96263 10.5594L6.48136 3.00473ZM6.32438 10H4.67563L5.50003 5.7957L6.32438 10ZM19.3244 10H17.6756L18.5 5.7957L19.3244 10Z"
			/>
		</svg>
	);
};

IconCathedralFilled.iconName = "cathedral--filled";

export default IconCathedralFilled;
