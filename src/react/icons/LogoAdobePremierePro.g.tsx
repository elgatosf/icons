import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobePremierePro = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.831 9.1v2.585l.023.002q.15.012.277.013h.408c.3 0 .6-.046.885-.138.246-.07.461-.216.63-.408.162-.192.239-.454.239-.792a1.27 1.27 0 0 0-.177-.685c-.13-.2-.316-.354-.539-.438a2.3 2.3 0 0 0-.907-.154c-.2 0-.377 0-.523.008a2 2 0 0 0-.316.007" />
			<path
				fillRule="evenodd"
				d="M6.04 3h11.924a3.266 3.266 0 0 1 3.269 3.27v11.46a3.266 3.266 0 0 1-3.27 3.27H6.042a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.041 3m1.114 12.608V7.693c0-.054.023-.085.077-.085.131 0 .254 0 .431-.008q.142-.005.292-.008.142-.002.293-.007.161-.006.334-.008.162-.002.335-.008.356-.009.7-.007c.63 0 1.154.077 1.584.238.385.131.739.346 1.031.631.246.246.439.546.562.877.115.323.177.654.177 1q0 .993-.462 1.638c-.308.431-.738.754-1.238.939-.523.192-1.1.261-1.731.261-.185 0-.308 0-.385-.007-.077-.008-.184-.008-.33-.008v2.47c.007.053-.031.1-.085.107H7.247c-.062 0-.093-.03-.093-.1m8.27-6.054h-1.347c-.007-.008-.023-.008-.023 0a.07.07 0 0 0-.053.084l.001.022c.015.169.03.332.03.502l.007.3q.003.15.008.3.009.3.007.576v4.293c.008.061.062.1.123.092h1.516c.069 0 .1-.03.1-.108v-3.923c.107-.123.246-.215.392-.284q.312-.14.646-.208c.27-.061.554-.085.831-.077.085 0 .123-.023.123-.084V9.508c-.008-.054-.054-.093-.108-.085-.407 0-.815.1-1.169.3q-.474.256-.823.662c0-.1-.008-.193-.015-.277a3 3 0 0 0-.039-.239.8.8 0 0 0-.046-.192.17.17 0 0 0-.161-.123"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobePremierePro.iconName = "logo-adobe-premiere-pro";

export default IconLogoAdobePremierePro;
