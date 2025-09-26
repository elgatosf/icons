import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-1.282 1.283A2 2 0 0 1 22 6.5V19a2 2 0 0 1-2 2H4.06l-.78.78a.75.75 0 0 1-1.06 0m3.34-2.28H20a.5.5 0 0 0 .5-.5V6.5A.5.5 0 0 0 20 6h-.94l-3.034 3.035a5 5 0 0 1-6.992 6.992zm4.553-4.552a3.5 3.5 0 0 0 4.835-4.835z"
						clipRule="evenodd"
					/>
					<path d="m2 18.82 1.5-1.5V6.5A.5.5 0 0 1 4 6h2.76a2 2 0 0 0 1.561-.75l1.25-1.562a.5.5 0 0 1 .39-.188h4.078a.5.5 0 0 1 .39.188l1.202 1.502 1.067-1.067L15.6 2.75A2 2 0 0 0 14.04 2H9.96a2 2 0 0 0-1.561.75L7.15 4.313a.5.5 0 0 1-.39.188H4a2 2 0 0 0-2 2z" />
					<path d="m7.251 13.57 1.262-1.262a3.5 3.5 0 0 1 3.794-3.794L13.57 7.25a5 5 0 0 0-6.318 6.318" />
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
						d="M17.854 2.854a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708l.872-.873q.135.02.274.019h12a2 2 0 0 0 2-2V6a2 2 0 0 0-1.388-1.905zM15.707 5 13.16 7.547a4 4 0 0 1-5.613 5.613L4.707 16H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-7.445 7.445a3 3 0 0 0 4.184-4.184z"
						clipRule="evenodd"
					/>
					<path d="M13.7 3.6c.084.112.19.204.308.27l-.72.72a2 2 0 0 1-.388-.39l-.6-.8a1 1 0 0 0-.8-.4h-3a1 1 0 0 0-.8.4l-.6.8a2 2 0 0 1-1.6.8H4a1 1 0 0 0-1 1v8.879l-.86.86A2 2 0 0 1 2 15V6a2 2 0 0 1 2-2h1.5a1 1 0 0 0 .8-.4l.6-.8A2 2 0 0 1 8.5 2h3a2 2 0 0 1 1.6.8z" />
					<path d="M10 6c.554 0 1.082.113 1.562.317l-.785.785a3 3 0 0 0-3.675 3.675l-.785.785A4 4 0 0 1 10 6" />
				</svg>
			);
	}
};

IconCameraOff.iconName = "camera-off";

export default IconCameraOff;
