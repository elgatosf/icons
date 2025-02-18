import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLutFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.75a.75.75 0 0 1-.75.75H9.5a3 3 0 0 0-3 3v5.75a.75.75 0 0 1-.75.75H4a2 2 0 0 1-2-2z" />
					<path d="M8 10a2 2 0 0 1 2-2h1.667v3.672H8zM13.167 11.672V8h3.666v3.672zM18.333 11.672V8h1.671a2 2 0 0 1 2 2v1.672zM18.333 13.172h3.671v3.879h-3.671zM18.333 18.55h3.671V20a2 2 0 0 1-2 2h-1.671zM16.833 18.55V22h-3.666v-3.45zM11.667 18.55V22H10a2 2 0 0 1-2-2v-1.45zM11.667 17.05H8v-3.878h3.667zM16.833 17.05v-3.878h-3.666v3.879z" />
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
					<path
						fillRule="evenodd"
						d="M3.5 1A2.5 2.5 0 0 0 1 3.5v5.232A2.27 2.27 0 0 0 3.268 11c.428 0 .732-.347.732-.775V7a3 3 0 0 1 3-3h3.5a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 8.5 1zM5 7a2 2 0 0 1 2-2h.667v2.668H5zm3.667.668V5h2.666v2.668zm3.666 0V5H13a2 2 0 0 1 2 2v.668zm0 1H15v2.664h-2.667zm0 3.664H15V13a2 2 0 0 1-2 2h-.667zm-1 0V15H8.667v-2.668zm-3.666 0V15H7a2 2 0 0 1-2-2v-.668zm0-1H5V8.668h2.667zm3.666 0V8.668H8.667v2.664z"
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
					<path d="M2 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5H9a3 3 0 0 0-3 3v3.5a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2z" />
					<path d="M7 9a2 2 0 0 1 2-2h1v3H7zM11 10V7h3v3zM15 10V7h1a2 2 0 0 1 2 2v1zM15 11h3v3h-3zM15 15h3v.997a2 2 0 0 1-2 2h-1zM14 15v2.997h-3V15zM10 15v2.997H9a2 2 0 0 1-2-2V15zM10 14H7v-3h3zM14 14v-3h-3v3z" />
				</svg>
			);
	}
};

IconLutFilled.iconName = "lut--filled";

export default IconLutFilled;
