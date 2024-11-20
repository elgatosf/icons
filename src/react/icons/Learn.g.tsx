import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLearn = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.326 10.494 6 12.832v3.81a2 2 0 0 0 .97 1.715l4.001 2.4a2 2 0 0 0 2.058 0l4-2.4A2 2 0 0 0 18 16.642v-3.81l1.5-.955v4.373a.75.75 0 0 0 1.5 0v-5.327l.674-.43a1 1 0 0 0 0-1.687l-8.6-5.473a2 2 0 0 0-2.148 0l-8.6 5.473a1 1 0 0 0 0 1.688m1.468-.844 7.938 5.051a.5.5 0 0 0 .536 0l7.938-5.05-7.938-5.052a.5.5 0 0 0-.537 0zM7.5 16.642v-2.855l3.426 2.18a2 2 0 0 0 2.148 0l3.426-2.18v2.855a.5.5 0 0 1-.243.43l-4 2.4a.5.5 0 0 1-.514 0l-4-2.4a.5.5 0 0 1-.243-.43"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLearn.iconName = "learn";

export default IconLearn;
