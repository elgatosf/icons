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
const IconLogoMarketplaceColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					fill="none"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fill="currentColor"
						d="m8.006 6.012.01.007 3.569 2.05a4.3 4.3 0 0 1-1.45 2.52 4.277 4.277 0 0 1-5.8-.241 4.29 4.29 0 0 1-1.257-3.044c0-1.149.446-2.23 1.256-3.043A4.25 4.25 0 0 1 7.366 3a4.25 4.25 0 0 1 2.433.76 4.3 4.3 0 0 1 1.66 2.263l-.762.443a3.443 3.443 0 0 0-3.33-2.61 3.445 3.445 0 0 0-3.435 3.448c0 1.901 1.54 3.448 3.434 3.448a3.444 3.444 0 0 0 3.26-2.368l.003-.015-4.162-2.39V8.57l1.435-.83.739.424L6.49 9.409l-.76-.435V5.58l.759-.44z"
					/>
					<path
						fill="url(#logo-marketplace--color_svg__a)"
						d="M21 10.044a1.565 1.565 0 0 1-2.993.643l-1.134-2.512a.196.196 0 0 0-.356 0l-1.134 2.512a1.565 1.565 0 1 1-2.07-2.07l2.511-1.134a.196.196 0 0 0 0-.357l-2.511-1.133a1.565 1.565 0 1 1 2.07-2.07l1.134 2.51a.196.196 0 0 0 .356 0l1.134-2.51a1.565 1.565 0 1 1 2.07 2.07l-2.51 1.133a.195.195 0 0 0 0 .357l2.51 1.133c.544.245.922.792.922 1.428"
					/>
					<path
						fill="url(#logo-marketplace--color_svg__b)"
						d="M3.978 12.783a.978.978 0 1 0 0 1.956h4.925l-5.191 3.384A1.564 1.564 0 0 0 4.565 21c.55 0 1.033-.283 1.312-.712l3.384-5.19v4.924a.978.978 0 1 0 1.957 0v-7.24z"
					/>
					<path
						fill="url(#logo-marketplace--color_svg__c)"
						d="M16.892 12.391a4.11 4.11 0 0 0-4.109 4.109v4.108h4.109a4.109 4.109 0 1 0 0-8.217"
					/>
					<defs>
						<linearGradient
							id="logo-marketplace--color_svg__a"
							x1={20.999}
							x2={12.391}
							y1={3}
							y2={11.609}
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.297} stopColor="#4DE36E" />
							<stop offset={1} stopColor="#31AFA7" />
						</linearGradient>
						<linearGradient
							id="logo-marketplace--color_svg__b"
							x1={11.217}
							x2={3}
							y1={12.783}
							y2={21}
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.339} stopColor="#FF60D0" />
							<stop offset={1} stopColor="#A638FE" />
						</linearGradient>
						<linearGradient
							id="logo-marketplace--color_svg__c"
							x1={21.001}
							x2={12.783}
							y1={12.391}
							y2={20.608}
							gradientUnits="userSpaceOnUse"
						>
							<stop offset={0.328} stopColor="#FBDB00" />
							<stop offset={1} stopColor="#FF9959" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};
export default IconLogoMarketplaceColor;
