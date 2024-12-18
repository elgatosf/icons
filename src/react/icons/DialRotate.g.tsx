import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DialRotate = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M16.3534 0.312927C16.1073 -0.0203064 15.6378 -0.0910024 15.3045 0.155023C14.9713 0.401048 14.9006 0.87063 15.1466 1.20386L15.2191 1.30196L14.847 1.23853C13.4517 1.00061 11.9964 0.939906 10.5642 1.05989C9.13205 1.17988 7.75103 1.4782 6.50002 1.93783C6.11122 2.08068 5.91183 2.51166 6.05468 2.90047C6.19753 3.28927 6.62851 3.48866 7.01732 3.34581C8.13265 2.93603 9.38083 2.66429 10.6895 2.55466C11.9976 2.44506 13.3261 2.50084 14.5949 2.71718L15.0876 2.8012L14.8835 2.95193C14.5502 3.19796 14.4795 3.66754 14.7256 4.00077C14.9716 4.334 15.4412 4.4047 15.7744 4.15868L17.3834 2.97076C17.7166 2.72473 17.7873 2.25515 17.5413 1.92192L16.3534 0.312927Z" clipRule="evenodd" /><path fillRule="evenodd" d="M17.4564 6.07478C19.0116 6.80002 19.9214 7.80293 19.9951 8.86069C19.9984 8.90718 20 8.95362 20 9V19C20 21.2091 16.4183 23 12 23C7.58172 23 4 21.2091 4 19V9C3.99998 7.99277 4.76083 7.01632 6.14955 6.27181C7.59666 5.496 9.60089 5.03938 11.7214 5.00243C13.8418 4.96548 15.9048 5.35123 17.4564 6.07478ZM16.8225 7.43423C15.5207 6.82718 13.6933 6.4683 11.7475 6.5022C9.79819 6.53617 8.04302 6.95866 6.85829 7.59381C5.6184 8.25853 5.4884 8.85098 5.50122 9.03502C5.5179 9.27423 5.80302 9.9248 7.17755 10.5658C8.47935 11.1728 10.3067 11.5317 12.2525 11.4978C14.2018 11.4638 15.957 11.0413 17.1417 10.4062C18.3816 9.74148 18.5116 9.14903 18.4988 8.96498C18.4821 8.72578 18.197 8.07521 16.8225 7.43423ZM18.5 15.5024C18.5 15.7327 18.2743 16.345 16.986 16.9892C15.7875 17.5884 14.0268 18.0024 12 18.0024C9.97324 18.0024 8.2125 17.5884 7.01397 16.9892C5.72571 16.345 5.5 15.7327 5.5 15.5024V11.3319C5.80543 11.5447 6.1543 11.7437 6.5436 11.9252C6.8443 12.0654 7.1642 12.193 7.5 12.3072V13.8191C7.5 14.2333 7.83579 14.5691 8.25 14.5691C8.66421 14.5691 9 14.2333 9 13.8191V12.7081C9.71641 12.853 10.4742 12.9459 11.25 12.9824V14.2467C11.25 14.6609 11.5858 14.9967 12 14.9967C12.4142 14.9967 12.75 14.6609 12.75 14.2467V12.9824C13.5279 12.9458 14.2854 12.8527 15 12.7081V13.8191C15 14.2333 15.3358 14.5691 15.75 14.5691C16.1642 14.5691 16.5 14.2333 16.5 13.8191V12.3072C16.988 12.1412 17.4415 11.9475 17.8504 11.7282C18.0851 11.6024 18.3018 11.47 18.5 11.3319V15.5024ZM12 19.5024C9.32244 19.5024 6.95211 18.8447 5.5 17.8347V19C5.5 19.2303 5.72571 19.8427 7.01397 20.4868C8.2125 21.0861 9.97324 21.5 12 21.5C14.0268 21.5 15.7875 21.0861 16.986 20.4868C18.2743 19.8427 18.5 19.2303 18.5 19V17.8347C17.0479 18.8447 14.6776 19.5024 12 19.5024Z" clipRule="evenodd" />
		</svg>
	);
};

DialRotate.iconName = "dial-rotate";

export default DialRotate;