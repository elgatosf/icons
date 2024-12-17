import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconView = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M2.277 11.118C3.5 9.237 6.827 5 12 5c5.172 0 8.5 4.237 9.724 6.118a1.6 1.6 0 0 1 0 1.764C20.5 14.763 17.172 19 12 19s-8.5-4.237-9.723-6.118a1.61 1.61 0 0 1 0-1.764m1.257.817C4.73 10.098 7.665 6.5 12 6.5s7.271 3.598 8.466 5.435a.1.1 0 0 1 .021.065.1.1 0 0 1-.021.065C19.27 13.902 16.335 17.5 12 17.5s-7.271-3.598-8.466-5.435A.1.1 0 0 1 3.513 12c0-.016.004-.037.021-.065"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconView.iconName = "view";

export default IconView;
