import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDial = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 9.92282 4.24508 8.01967 5.48256 6.54322L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L6.54322 5.48256C8.01967 4.24508 9.92282 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
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
						d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C6.52315 2 5.17132 2.53405 4.12598 3.41895L7.85352 7.14648L7.91797 7.22461C8.04613 7.41869 8.02438 7.68265 7.85352 7.85352C7.68265 8.02438 7.41869 8.04613 7.22461 7.91797L7.14648 7.85352L3.41895 4.12598C2.53405 5.17132 2 6.52315 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
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
						d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 8.24696 3.64441 6.64443 4.70926 5.41637L9.14645 9.85355C9.34171 10.0488 9.65829 10.0488 9.85355 9.85355C10.0488 9.65829 10.0488 9.34171 9.85355 9.14645L5.41637 4.70926C6.64443 3.64441 8.24696 3 10 3C13.866 3 17 6.13401 17 10Z"
					/>
				</svg>
			);
	}
};

IconDial.iconName = "dial";

export default IconDial;
