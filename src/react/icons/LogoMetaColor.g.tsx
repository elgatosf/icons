import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMetaColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M16.5868 5C14.8593 5 13.5089 6.3011 12.2865 7.9539C10.6067 5.81501 9.20179 5 7.52059 5C4.093 5 1.4668 9.46069 1.4668 14.1821C1.4668 17.1366 2.89614 19 5.29025 19C7.01337 19 8.25265 18.1876 10.4558 14.3366C10.4558 14.3366 11.3741 12.7148 12.0059 11.5976C12.2273 11.9551 12.4605 12.3402 12.7054 12.7531L13.7385 14.491C15.751 17.8587 16.8723 19 18.904 19C21.2364 19 22.5344 17.1111 22.5344 14.0952C22.5344 9.15172 19.849 5 16.5868 5ZM8.77576 13.2938C6.98956 16.0938 6.37162 16.7214 5.37714 16.7214C4.35369 16.7214 3.74542 15.8229 3.74542 14.2207C3.74542 10.7931 5.45438 7.28828 7.49162 7.28828C8.59484 7.28828 9.51678 7.92542 10.9289 9.94706C9.58803 12.0038 8.77576 13.2938 8.77576 13.2938ZM15.5172 12.9413L14.2819 10.8812C13.9477 10.3376 13.6264 9.83717 13.3182 9.38001C14.4315 7.66171 15.3498 6.80552 16.442 6.80552C18.7109 6.80552 20.5261 10.1462 20.5261 14.2497C20.5261 15.8138 20.0138 16.7214 18.9523 16.7214C17.9349 16.7214 17.4489 16.0495 15.5172 12.9413Z" /><path fill="url(#prefix__paint0_linear_1994_2435)" d="M14.2819 10.8812C11.604 6.52584 9.82097 5 7.52059 5L7.49162 7.28828C8.99783 7.28828 10.1661 8.47586 12.7054 12.7531L12.8603 13.0135L14.2819 10.8812Z" /><defs><linearGradient id="paint0_linear_1994_2435" x1={13.584} x2={7.754} y1={12.461} y2={4.822} gradientUnits="userSpaceOnUse"><stop offset={0.134} stopColor="#0869E1" /><stop offset={0.873} stopColor="#0064E0" /></linearGradient></defs>
		</svg>
	);
};

LogoMetaColor.iconName = "logo-meta--color";

export default LogoMetaColor;