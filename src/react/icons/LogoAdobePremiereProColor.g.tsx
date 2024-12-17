import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobePremiereProColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#00005B"
				d="M6.04 3h11.924a3.266 3.266 0 0 1 3.269 3.27v11.46a3.266 3.266 0 0 1-3.27 3.27H6.042a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.041 3"
			/>
			<path
				fill="#99F"
				d="M7.154 15.615V7.692c0-.054.023-.084.077-.084.131 0 .254 0 .431-.008.185-.008.377-.008.585-.015.207-.008.43-.008.669-.016q.356-.009.7-.007c.63 0 1.154.076 1.585.238.384.13.738.346 1.03.63.246.247.439.547.562.878.115.323.177.654.177 1q0 .991-.462 1.638c-.307.43-.738.754-1.238.939-.523.192-1.1.261-1.731.261-.185 0-.308 0-.385-.008-.077-.007-.184-.007-.33-.007V15.6c.007.054-.031.1-.085.108H7.247q-.093.002-.093-.1zM8.831 9.1v2.585c.108.007.208.015.3.015h.408c.3 0 .6-.046.885-.138.246-.07.461-.216.63-.408.162-.193.239-.454.239-.793a1.27 1.27 0 0 0-.177-.684c-.13-.2-.316-.354-.539-.439a2.3 2.3 0 0 0-.907-.153c-.2 0-.377 0-.523.007a2 2 0 0 0-.316.008M14.077 9.554h1.346c.077 0 .139.054.162.123a.8.8 0 0 1 .046.192 2.6 2.6 0 0 1 .054.515c.23-.269.507-.492.823-.661.354-.2.761-.3 1.17-.3.053-.008.1.03.107.085v1.53c0 .062-.039.085-.123.085a3.4 3.4 0 0 0-.831.077 3.2 3.2 0 0 0-.646.208c-.146.069-.285.161-.393.284v3.923c0 .077-.03.108-.1.108h-1.515c-.061.008-.115-.03-.123-.092v-4.293c0-.184 0-.377-.008-.577-.007-.2-.007-.4-.015-.6 0-.176-.016-.346-.03-.523a.07.07 0 0 1 .053-.084c0-.008.015-.008.023 0"
			/>
		</svg>
	);
};

IconLogoAdobePremiereProColor.iconName = "logo-adobe-premiere-pro--color";

export default IconLogoAdobePremiereProColor;
