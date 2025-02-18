import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHdmi = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.75 12a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
					<path
						fillRule="evenodd"
						d="M5.828 17.5a2 2 0 0 1-1.414-.586l-1.828-1.828A2 2 0 0 1 2 13.672V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.672a2 2 0 0 1-.586 1.414l-1.828 1.828a2 2 0 0 1-1.414.586zm14.526-3.475-1.829 1.829a.5.5 0 0 1-.353.146H5.828a.5.5 0 0 1-.353-.146l-1.829-1.829a.5.5 0 0 1-.146-.353V10a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v3.672a.5.5 0 0 1-.146.353"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M6 12.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M4.5 7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="m1.44 8.94 1.62 1.62a1.5 1.5 0 0 0 1.061.44h7.758a1.5 1.5 0 0 0 1.06-.44l1.622-1.62A1.5 1.5 0 0 0 15 7.878V5.5A1.5 1.5 0 0 0 13.5 4h-11A1.5 1.5 0 0 0 1 5.5v2.379c0 .398.158.779.44 1.06M2.5 5h11a.5.5 0 0 1 .5.5v2.379a.5.5 0 0 1-.146.353l-1.622 1.622a.5.5 0 0 1-.353.146H4.12a.5.5 0 0 1-.353-.146L2.146 8.232A.5.5 0 0 1 2 7.88V5.5a.5.5 0 0 1 .5-.5"
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
					<path d="M5.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="m2.44 11.94 1.62 1.62a1.5 1.5 0 0 0 1.061.44h9.758a1.5 1.5 0 0 0 1.06-.44l1.622-1.62A1.5 1.5 0 0 0 18 10.878V8.5A1.5 1.5 0 0 0 16.5 7h-13A1.5 1.5 0 0 0 2 8.5v2.379c0 .398.158.779.44 1.06M3.5 8h13a.5.5 0 0 1 .5.5v2.379a.5.5 0 0 1-.146.353l-1.622 1.622a.5.5 0 0 1-.353.146H5.12a.5.5 0 0 1-.353-.146l-1.622-1.622A.5.5 0 0 1 3 10.88V8.5a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHdmi.iconName = "hdmi";

export default IconHdmi;
