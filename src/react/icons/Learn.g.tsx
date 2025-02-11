import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLearn = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M2.326 10.494 6 12.832v3.81a2 2 0 0 0 .971 1.715l4 2.4a2 2 0 0 0 2.058 0l4-2.4A2 2 0 0 0 18 16.642v-3.81l1.5-.955v4.373a.75.75 0 0 0 1.5 0v-5.327l.674-.43a1 1 0 0 0 0-1.687l-8.6-5.473a2 2 0 0 0-2.148 0l-8.6 5.473a1 1 0 0 0 0 1.688m1.468-.844 7.938 5.051a.5.5 0 0 0 .536 0l7.938-5.051-7.938-5.051a.5.5 0 0 0-.536 0zM7.5 16.642v-2.856l3.426 2.18a2 2 0 0 0 2.148 0l3.426-2.18v2.856a.5.5 0 0 1-.243.43l-4 2.399a.5.5 0 0 1-.514 0l-4-2.4a.5.5 0 0 1-.243-.429"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M9.25 3.201a1.5 1.5 0 0 1 1.5 0l6.5 3.753c1 .577 1 2.02 0 2.598l-.25.144V14.5a.5.5 0 1 1-1 0v-4.226l-1 .577v2.628a1.5 1.5 0 0 1-.75 1.3l-3.5 2.02a1.5 1.5 0 0 1-1.5 0l-3.5-2.02a1.5 1.5 0 0 1-.75-1.3v-2.628l-2.25-1.3a1.5 1.5 0 0 1 0-2.597zm.5.866L3.25 7.82a.5.5 0 0 0 0 .866l6.5 3.753a.5.5 0 0 0 .5 0l6.5-3.753a.5.5 0 0 0 0-.866l-6.5-3.753a.5.5 0 0 0-.5 0m1 9.238L14 11.428v2.051a.5.5 0 0 1-.25.433l-3.5 2.021a.5.5 0 0 1-.5 0l-3.5-2.02a.5.5 0 0 1-.25-.434v-2.05l3.25 1.876a1.5 1.5 0 0 0 1.5 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLearn.iconName = "learn";

export default IconLearn;
