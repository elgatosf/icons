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
const IconLogoBitcoin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10.736 14.588c.896.236 2.852.753 3.163-.497.32-1.278-1.579-1.704-2.504-1.912l-.27-.062-.602 2.415zm.844-3.53c.747.2 2.375.634 2.659-.502.29-1.162-1.293-1.513-2.066-1.684a7 7 0 0 1-.226-.052l-.546 2.191.18.047Z" />
					<path
						fillRule="evenodd"
						d="M9.58 21.7c5.357 1.337 10.783-1.924 12.118-7.28 1.336-5.358-1.924-10.785-7.281-12.12C9.06.963 3.635 4.223 2.3 9.581c-1.337 5.358 1.924 10.784 7.28 12.12Zm4.627-13.648c1.385.477 2.398 1.193 2.2 2.523-.145.975-.685 1.446-1.402 1.611.985.513 1.486 1.299 1.008 2.661-.592 1.692-1.999 1.835-3.87 1.481l-.454 1.82-1.097-.274.448-1.795q-.426-.105-.874-.227l-.45 1.804-1.096-.273.454-1.824-.309-.08-.473-.121-1.428-.356.545-1.256s.809.215.798.199c.31.077.448-.126.502-.26l.718-2.877.079.02.037.008a1 1 0 0 0-.114-.036l.512-2.054c.013-.233-.067-.527-.512-.638.018-.011-.796-.198-.796-.198l.291-1.172 1.514.378-.002.006q.342.084.7.164l.45-1.801 1.097.273-.44 1.766c.294.068.59.135.879.207l.437-1.755 1.097.274-.45 1.802Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoBitcoin;
