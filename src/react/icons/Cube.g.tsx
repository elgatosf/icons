import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCube = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4 6.22651C3.3812 6.58378 3 7.24403 3 7.95856V16.0415C3 16.756 3.3812 17.4163 4 17.7735L11 21.815C11.6188 22.1722 12.3812 22.1722 13 21.815L20 17.7735C20.6188 17.4163 21 16.756 21 16.0415V7.95857C21 7.24403 20.6188 6.58378 20 6.22652L13 2.18506C12.3812 1.8278 11.6188 1.8278 11 2.18506L4 6.22651ZM5.25 7.23688L12 11.134L18.75 7.23688L12.25 3.4841C12.0953 3.39479 11.9047 3.39479 11.75 3.4841L5.25 7.23688ZM19.5 8.53592L12.75 12.433V20.2273L19.25 16.4745C19.4047 16.3852 19.5 16.2201 19.5 16.0415V8.53592ZM11.25 20.2273V12.433L4.5 8.53592V16.0415C4.5 16.2201 4.5953 16.3852 4.75 16.4745L11.25 20.2273Z"
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
						d="M9 2.49442C9.6188 2.13715 10.3812 2.13715 11 2.49442L16 5.38117C16.6188 5.73844 17 6.39869 17 7.11322V12.8867C17 13.6013 16.6188 14.2615 16 14.6188L11 17.5055C10.3812 17.8628 9.6188 17.8628 9 17.5055L4 14.6188C3.3812 14.2615 3 13.6013 3 12.8867V7.11322C3 6.39869 3.3812 5.73844 4 5.38117L9 2.49442ZM10.5 3.36045L15.5 6.2472L10.0001 9.42266L4.50001 6.24719L9.5 3.36045C9.8094 3.18181 10.1906 3.18181 10.5 3.36045ZM4 7.11322V12.8867C4 13.244 4.1906 13.5741 4.5 13.7527L9.5 16.6395L9.5 10.2886L4 7.11322ZM10.5 10.2887L16 7.11331V12.8867C16 13.244 15.8094 13.5741 15.5 13.7527L10.5 16.6395L10.5 10.2887Z"
					/>
				</svg>
			);
	}
};

IconCube.iconName = "cube";

export default IconCube;
