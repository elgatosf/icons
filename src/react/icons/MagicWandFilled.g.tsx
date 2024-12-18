import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MagicWandFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.2326 2.08967C14.1493 1.87864 13.8506 1.87864 13.7674 2.08967L13.2929 3.29289L12.0897 3.76743C11.8786 3.85066 11.8786 4.14933 12.0897 4.23256L13.2929 4.7071L13.7674 5.91032C13.8506 6.12135 14.1493 6.12135 14.2326 5.91032L14.7071 4.7071L15.9103 4.23256C16.1213 4.14933 16.1213 3.85066 15.9103 3.76743L14.7071 3.29289L14.2326 2.08967Z" /><path fillRule="evenodd" d="M6.04055 8.113C6.18652 7.8181 6.4599 7.54487 7.00666 6.9984C7.55298 6.45239 7.82614 6.17938 8.12086 6.03366C8.67957 5.75741 9.33509 5.75757 9.89368 6.03407C10.1883 6.17993 10.4614 6.45306 11.0074 6.99933L20.4982 16.4941C21.0447 17.0409 21.318 17.3142 21.4638 17.6092C21.7403 18.1684 21.7401 18.8246 21.4634 19.3836C21.3174 19.6786 21.044 19.9518 20.4973 20.4983C19.951 21.0443 19.6778 21.3173 19.3831 21.463C18.8244 21.7392 18.1688 21.7391 17.6103 21.4626C17.3156 21.3167 17.0426 21.0436 16.4966 20.4974L7.00573 11.0025C6.45923 10.4558 6.18597 10.1824 6.04013 9.88746C5.76367 9.32827 5.76383 8.67207 6.04055 8.113ZM11.9127 10.0266L10.0315 11.9078L8.0662 9.94166C7.78093 9.65629 7.61146 9.48595 7.49151 9.35152C7.41657 9.26754 7.38863 9.2274 7.38183 9.21702C7.31617 9.08018 7.31621 8.92088 7.38193 8.78406C7.38874 8.77369 7.4167 8.73356 7.49167 8.64962C7.61169 8.51524 7.78124 8.34499 8.06663 8.05975C8.3518 7.77475 8.52199 7.60544 8.6563 7.48561C8.7402 7.41075 8.7803 7.38284 8.79067 7.37605C8.9274 7.31044 9.08654 7.31048 9.22325 7.37615C9.23361 7.38295 9.27369 7.41088 9.35756 7.48577C9.49182 7.60567 9.66193 7.77505 9.94696 8.06019L11.9127 10.0266Z" clipRule="evenodd" /><path d="M3.76694 2.08968C3.85017 1.87864 4.14884 1.87864 4.23207 2.08968L4.70661 3.29289L5.90983 3.76743C6.12086 3.85067 6.12086 4.14933 5.90983 4.23257L4.70661 4.70711L4.23207 5.91032C4.14884 6.12136 3.85017 6.12136 3.76694 5.91032L3.2924 4.70711L2.08919 4.23257C1.87815 4.14933 1.87815 3.85067 2.08919 3.76743L3.2924 3.29289L3.76694 2.08968Z" /><path d="M4.23207 12.0897C4.14884 11.8786 3.85017 11.8786 3.76694 12.0897L3.2924 13.2929L2.08919 13.7674C1.87815 13.8507 1.87815 14.1493 2.08919 14.2326L3.2924 14.7071L3.76694 15.9103C3.85017 16.1214 4.14884 16.1214 4.23207 15.9103L4.70661 14.7071L5.90983 14.2326C6.12086 14.1493 6.12086 13.8507 5.90983 13.7674L4.70661 13.2929L4.23207 12.0897Z" />
		</svg>
	);
};

MagicWandFilled.iconName = "magic-wand--filled";

export default MagicWandFilled;