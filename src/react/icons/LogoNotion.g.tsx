import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoNotion = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="m14.538 2.64-10.406.768C3.292 3.481 3 4.03 3 4.688v11.407c0 .512.182.95.62 1.536l2.447 3.18c.402.512.767.622 1.534.586l12.085-.732c1.021-.073 1.314-.548 1.314-1.352V6.479c0-.416-.164-.536-.648-.89l-3.404-2.4c-.804-.585-1.132-.659-2.41-.55M7.874 6.269c-.987.066-1.211.081-1.771-.375L4.679 4.761c-.145-.147-.072-.33.293-.366l10.003-.731c.84-.073 1.278.22 1.606.475l1.716 1.243c.073.037.256.256.036.256l-10.33.622zm-1.15 12.934V8.308c0-.476.145-.695.583-.732l11.865-.695c.403-.036.585.22.585.695v10.822c0 .476-.074.878-.73.915l-11.355.658c-.657.036-.949-.183-.949-.768m11.208-10.31c.072.328 0 .657-.33.695l-.547.108v8.044c-.475.256-.913.402-1.278.402-.584 0-.73-.183-1.168-.73l-3.579-5.631v5.447l1.132.257s0 .658-.913.658l-2.518.146c-.073-.147 0-.512.255-.585l.658-.182v-7.203l-.913-.074c-.073-.33.11-.804.62-.841l2.703-.182 3.723 5.703V9.88l-.949-.11c-.073-.402.219-.695.583-.731z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoNotion.iconName = "logo-notion";

export default IconLogoNotion;
