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
const IconLogoAdobeLightroomColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						fill="#001E36"
						d="M6.038 3h11.924a3.266 3.266 0 0 1 3.27 3.269V17.73A3.266 3.266 0 0 1 17.961 21H6.038a3.266 3.266 0 0 1-3.268-3.269V6.27A3.266 3.266 0 0 1 6.038 3"
					/>
					<path
						fill="#31A8FF"
						d="M12.46 15.723H7.587c-.086 0-.122-.044-.122-.137V7.723a.097.097 0 0 1 .086-.108h1.5339999999999998c.036-.007.086.022.086.065v6.48h3.557c.08 0 .101.036.087.108l-.224 1.34a.14.14 0 0 1-.043.093.2.2 0 0 1-.086.022M13.692 9.567h1.347c.079 0 .136.05.158.122.029.05.05.115.065.18a2.7 2.7 0 0 1 .05.511c.23-.266.511-.49.821-.662a2.2 2.2 0 0 1 1.145-.274c.05-.007.1.029.108.087v1.533c0 .065-.036.087-.123.087-.496-.03-1 .064-1.454.259a1.3 1.3 0 0 0-.418.288v3.924c0 .079-.028.108-.1.108h-1.498c-.065.007-.115-.029-.122-.094v-4.2909999999999995c0-.187 0-.374-.008-.576-.007-.202-.007-.403-.014-.598a6 6 0 0 0-.043-.51c-.008-.037.014-.08.05-.087.014-.015.022-.015.036-.007"
					/>
				</svg>
			);
	}
};
export default IconLogoAdobeLightroomColor;
