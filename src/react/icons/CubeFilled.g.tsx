import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCubeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.76931 6.382C3.84191 6.32534 3.91892 6.27333 4 6.22651L11 2.18506C11.6188 1.8278 12.3812 1.8278 13 2.18506L20 6.22652C20.0811 6.27333 20.1581 6.32534 20.2307 6.382L12 11.134L3.76931 6.382Z" />
					<path d="M3.01931 7.68104C3.00655 7.77224 3 7.86494 3 7.95856V16.0415C3 16.756 3.3812 17.4163 4 17.7735L11 21.815C11.0811 21.8618 11.1646 21.9025 11.25 21.937V12.433L3.01931 7.68104Z" />
					<path d="M12.75 21.937C12.8354 21.9025 12.9189 21.8618 13 21.815L20 17.7735C20.6188 17.4163 21 16.756 21 16.0415V7.95857C21 7.86494 20.9935 7.77224 20.9807 7.68104L12.75 12.433V21.937Z" />
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
					<path d="M11 2.49442C10.3812 2.13715 9.6188 2.13715 9 2.49442L4 5.38117C3.84118 5.47287 3.69801 5.58452 3.57292 5.71193L10.0001 9.42266L16.4271 5.712C16.302 5.58456 16.1588 5.47288 16 5.38117L11 2.49442Z" />
					<path d="M9.5 10.2886L3.07291 6.57795C3.02511 6.74999 3 6.92982 3 7.11322V12.8867C3 13.6013 3.3812 14.2615 4 14.6188L9 17.5055C9.15882 17.5972 9.32711 17.6654 9.5 17.71V10.2886Z" />
					<path d="M10.5 17.71V10.2887L16.9271 6.57804C16.9749 6.75006 17 6.92985 17 7.11322V12.8867C17 13.6013 16.6188 14.2615 16 14.6188L11 17.5055C10.8412 17.5972 10.6729 17.6654 10.5 17.71Z" />
				</svg>
			);
	}
};

IconCubeFilled.iconName = "cube--filled";

export default IconCubeFilled;
