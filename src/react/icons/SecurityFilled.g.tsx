import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSecurityFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m11.029 2.54-7 3.889c-.635.352-1.038 1.025-.994 1.75.496 8.203 6.09 12.194 8.182 13.407.49.284 1.076.284 1.566 0 2.091-1.213 7.686-5.204 8.182-13.407.044-.725-.359-1.398-.994-1.75l-7-3.89a2 2 0 0 0-1.942 0m4.501 7.74a.75.75 0 0 0-1.06-1.06L11 12.69l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"
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
						d="m4.008 5.424 5-2.857a2 2 0 0 1 1.984 0l5 2.857c.623.356 1.017 1.024.972 1.74-.435 6.865-4.669 9.694-6.314 10.54-.411.212-.889.212-1.3 0-1.645-.846-5.879-3.675-6.314-10.54-.045-.716.349-1.384.972-1.74m8.346 3.43a.5.5 0 0 0-.707-.708L9 10.793 7.854 9.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSecurityFilled.iconName = "security--filled";

export default IconSecurityFilled;
