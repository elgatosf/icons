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
const IconLogoAndroid = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22.936 17.515a11 11 0 0 0-.189-.952 11 11 0 0 0-1.734-3.779 11 11 0 0 0-1.79-1.962q-.646-.558-1.375-1.012l.006-.01.004-.007.002-.004.331-.57.003-.005.333-.574.651-1.123.467-.806a1.013 1.013 0 0 0-.978-1.513 1.01 1.01 0 0 0-.77.498l-.468.807-.651 1.122-.333.575-.333.574-.029.05-.044.076-.028-.01A11 11 0 0 0 12 8.14h-.114a11 11 0 0 0-3.905.752l-.068-.117-.337-.582-.33-.567-.65-1.123q-.236-.402-.468-.806a1.02 1.02 0 0 0-.615-.47 1 1 0 0 0-.346-.03 1.005 1.005 0 0 0-.89.748 1 1 0 0 0 .102.767l.467.806.652 1.122.666 1.15.002.004.003.005a11.1 11.1 0 0 0-4.484 5.392 11 11 0 0 0-.601 2.191l-.02.118-.002.016q-.036.24-.063.484h22a11 11 0 0 0-.063-.484h.001Zm-5.215-2.556c.44-.292.504-.97.142-1.513-.36-.543-1.01-.745-1.45-.453-.44.293-.505.97-.143 1.514.36.543 1.01.745 1.45.453ZM7.603 12.995c.44.293.504.97.143 1.514-.361.543-1.011.745-1.451.452s-.504-.97-.143-1.513 1.01-.746 1.45-.453Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoAndroid;
