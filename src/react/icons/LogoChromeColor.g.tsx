import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoChromeColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<g clipPath="url(#prefix__clip0_2188_1107)"><path fill="url(#prefix__paint0_linear_2188_1107)" d="M11.9987 6.99969L20.6576 6.9997C19.7801 5.47945 18.5179 4.217 16.9978 3.3393C15.4777 2.4616 13.7534 1.99958 11.9981 1.9997C10.2428 1.99982 8.51845 2.46208 6.99848 3.34C5.47851 4.21791 4.21646 5.48054 3.33925 7.00091L7.66869 14.4997L7.67254 14.4987C7.23212 13.7392 6.9997 12.8771 6.99872 11.9991C6.99773 11.1212 7.22821 10.2585 7.66692 9.49806C8.10563 8.7376 8.73706 8.10623 9.49757 7.66761C10.2581 7.22899 11.1208 6.9986 11.9987 6.99969Z" /><path fill="url(#prefix__paint1_linear_2188_1107)" d="M16.3308 14.4991L12.0013 21.9979C13.7566 21.9981 15.481 21.5362 17.0012 20.6586C18.5214 19.781 19.7837 18.5187 20.6612 16.9985C21.5387 15.4783 22.0006 13.7539 22.0003 11.9986C22 10.2433 21.5375 8.51903 20.6594 6.99915L12.0006 6.99916L11.9995 7.00299C12.8775 7.00132 13.7403 7.23112 14.5011 7.66923C15.2619 8.10734 15.8938 8.73828 16.333 9.49844C16.7722 10.2586 17.0033 11.1211 17.0029 11.9991C17.0025 12.877 16.7707 13.7393 16.3308 14.4991Z" /><path fill="url(#prefix__paint2_linear_2188_1107)" d="M7.67004 14.5012L3.34062 7.00244C2.46276 8.52244 2.00055 10.2468 2.00049 12.0021C2.00042 13.7574 2.4625 15.4817 3.34025 17.0018C4.218 18.5219 5.48049 19.784 7.00077 20.6614C8.52105 21.5388 10.2455 22.0004 12.0008 21.9999L16.3302 14.5011L16.3275 14.4983C15.8899 15.2595 15.2595 15.8918 14.4997 16.3316C13.7399 16.7715 12.8775 17.0032 11.9996 17.0035C11.1217 17.0038 10.2592 16.7726 9.49905 16.3333C8.73893 15.894 8.10806 15.2621 7.67004 14.5012Z" /><path fill="white" d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" /><path fill="#1A73E8" d="M11.9998 15.9583C14.186 15.9583 15.9582 14.1861 15.9582 12C15.9582 9.81383 14.186 8.04163 11.9998 8.04163C9.81371 8.04163 8.0415 9.81383 8.0415 12C8.0415 14.1861 9.81371 15.9583 11.9998 15.9583Z" /></g><defs><linearGradient id="paint0_linear_2188_1107" x1={19.577} x2={10.918} y1={6.376} y2={21.374} gradientUnits="userSpaceOnUse"><stop stopColor="#D93025" /><stop offset={1} stopColor="#EA4335" /></linearGradient><linearGradient id="paint1_linear_2188_1107" x1={21.227} x2={3.909} y1={8.25} y2={8.25} gradientUnits="userSpaceOnUse"><stop stopColor="#FCC934" /><stop offset={1} stopColor="#FBBC04" /></linearGradient><linearGradient id="paint2_linear_2188_1107" x1={13.082} x2={4.423} y1={21.376} y2={6.377} gradientUnits="userSpaceOnUse"><stop stopColor="#1E8E3E" /><stop offset={1} stopColor="#34A853" /></linearGradient><clipPath id="clip0_2188_1107"><path fill="white" d="M0 0H24V24H0z" /></clipPath></defs>
		</svg>
	);
};

LogoChromeColor.iconName = "logo-chrome--color";

export default LogoChromeColor;