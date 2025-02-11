import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEditFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.604 20.98c.309.116.76-.013 1.665-.271l3.434-.981c.297-.085.445-.128.584-.191q.185-.085.349-.205c.123-.09.232-.2.45-.418l8.384-8.384-5-5-8.384 8.384c-.218.218-.327.327-.417.45a2 2 0 0 0-.206.35c-.064.138-.106.286-.19.584L3.29 18.73c-.258.905-.387 1.357-.27 1.666a1 1 0 0 0 .583.584M14.53 4.47l5 5 .706-.706c.793-.793 1.189-1.189 1.337-1.646a2 2 0 0 0 0-1.236c-.148-.457-.544-.853-1.337-1.646l-.474-.474c-.792-.792-1.188-1.188-1.644-1.336a2 2 0 0 0-1.236 0c-.456.148-.852.544-1.644 1.336z" />
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
					<path d="m15.414 3.414 1.172 1.172a2 2 0 0 1 0 2.828l-1.232 1.232-4-4 1.232-1.232a2 2 0 0 1 2.828 0M10.646 5.354l-6.312 6.312a2 2 0 0 0-.483.782l-.902 2.706c-.391 1.173.724 2.288 1.897 1.897l2.706-.902a2 2 0 0 0 .782-.483l6.313-6.312z" />
				</svg>
			);
	}
};

IconEditFilled.iconName = "edit--filled";

export default IconEditFilled;
