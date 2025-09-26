import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSpeechFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.5 14.5A5.5 5.5 0 0 1 14 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 5.5 5.5 0 0 1 5.5-5.5M18.3 2.976a.75.75 0 0 1 .983.21l.042.064.2.36a12.5 12.5 0 0 1-.2 12.14.75.75 0 1 1-1.299-.75 11 11 0 0 0 .176-10.684L18.026 4l-.035-.068a.75.75 0 0 1 .31-.956M14.403 5.226a.75.75 0 0 1 .984.21l.04.064.129.23a8 8 0 0 1-.128 7.77.75.75 0 0 1-1.3-.75 6.5 6.5 0 0 0 .202-6.123l-.201-.377-.035-.068a.75.75 0 0 1 .31-.956M8.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
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
					<path d="M8 11a5 5 0 0 1 5 5 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 5 5 0 0 1 5-5M12.513 3.818a.5.5 0 0 1 .624.1l.06.082.185.348A6 6 0 0 1 13.196 10l-.06.082a.5.5 0 0 1-.806-.582 5 5 0 0 0 .155-4.71l-.155-.29-.042-.093a.5.5 0 0 1 .225-.59M8 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
					<path
						fillRule="evenodd"
						d="M15.111 11.683a.5.5 0 0 0 .683-.183 9 9 0 0 0 0-9 .5.5 0 0 0-.866.5 8 8 0 0 1 0 8 .5.5 0 0 0 .183.683"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSpeechFilled.iconName = "speech--filled";

export default IconSpeechFilled;
