import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoNotionColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#000"
				d="M14.537 2.64c1.278-.11 1.608-.037 2.411.548l3.404 2.4c.484.355.648.475.648.89v12.835c0 .804-.293 1.28-1.314 1.352l-12.084.732c-.768.036-1.134-.073-1.536-.585l-2.446-3.18c-.439-.587-.62-1.025-.62-1.537V4.687c0-.658.292-1.206 1.132-1.279z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M6.724 19.203V8.308c0-.476.147-.695.584-.732l11.866-.695c.402-.036.584.22.584.695v10.822c0 .476-.074.878-.73.915l-11.355.658c-.657.036-.949-.183-.949-.768m10.88-9.615c.329-.038.402-.367.329-.696l-2.52.147c-.365.036-.657.329-.584.732l.95.109v5.045l-3.724-5.703-2.702.182c-.512.037-.694.512-.62.841l.912.074v7.203l-.658.182c-.255.073-.328.438-.255.585l2.518-.146c.914 0 .914-.658.914-.658l-1.132-.257v-5.447l3.578 5.63c.438.548.584.731 1.168.731.366 0 .803-.146 1.278-.402V9.696z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				d="M7.875 6.269c-.987.066-1.21.081-1.771-.375L4.679 4.761c-.145-.146-.072-.33.293-.366l10.003-.73c.84-.074 1.278.219 1.606.474l1.716 1.243c.073.037.256.256.036.256l-10.33.622z"
			/>
		</svg>
	);
};

IconLogoNotionColor.iconName = "logo-notion--color";

export default IconLogoNotionColor;
