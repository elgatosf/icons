/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconLogoNotion = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		// case 's':
		// case 'm':
		// case 'l':
		default:
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
						d="m14.537 2.64-10.404.77C3.292 3.48 3 4.029 3 4.687v11.408c0 .512.182.95.62 1.536l2.447 3.18c.402.513.767.622 1.534.586l12.085-.731c1.021-.073 1.314-.55 1.314-1.353V6.479c0-.416-.164-.535-.648-.89l-3.404-2.4c-.804-.585-1.132-.659-2.41-.55zM7.875 6.27c-.987.066-1.211.081-1.771-.374L4.679 4.76c-.145-.146-.072-.33.293-.366l10.003-.73c.84-.074 1.278.219 1.606.474l1.716 1.244c.073.037.256.255.036.255l-10.33.622-.128.009Zm-1.15 12.934V8.308c0-.476.145-.695.583-.732l11.865-.695c.403-.036.585.22.585.695v10.822c0 .476-.074.878-.73.915l-11.355.658c-.657.036-.949-.183-.949-.768Zm11.207-10.31c.073.328 0 .658-.329.695l-.547.109v8.044c-.475.255-.913.401-1.278.401-.584 0-.73-.183-1.168-.73l-3.579-5.631v5.447l1.132.257s0 .658-.913.658l-2.518.146c-.073-.147 0-.512.255-.585l.658-.182V10.32l-.913-.074c-.073-.329.11-.804.62-.84l2.703-.183 3.723 5.704V9.88l-.949-.11c-.073-.402.219-.695.583-.73l2.52-.148Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoNotion;
