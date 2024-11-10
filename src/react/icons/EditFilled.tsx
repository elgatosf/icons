/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types.js";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconEditFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.604 20.98c.309.116.76-.013 1.665-.271l3.434-.981c.297-.085.445-.128.584-.191a2 2 0 0 0 .349-.205c.123-.09.232-.2.45-.418l8.384-8.384-5-5-8.384 8.384c-.218.218-.327.327-.418.45q-.12.165-.205.35c-.064.138-.106.287-.19.584L3.29 18.73c-.258.905-.387 1.357-.27 1.666a1 1 0 0 0 .583.584ZM14.53 4.47l5 5 .706-.706c.793-.793 1.189-1.189 1.337-1.646.13-.401.13-.834 0-1.236-.148-.457-.544-.853-1.337-1.645l-.474-.475c-.792-.792-1.188-1.188-1.644-1.336a2 2 0 0 0-1.236 0c-.456.148-.852.544-1.644 1.336z" />
				</svg>
			);
	}
};
export default IconEditFilled;
