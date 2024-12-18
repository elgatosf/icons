import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoCameraHubFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z" /><path fillRule="evenodd" d="M6.86151 9.29386C6.96252 8.87768 7.38425 8.5 8.0311 8.5H15.9689C16.6157 8.5 17.0375 8.87768 17.1385 9.29386C17.3365 10.1098 17.5 11.0723 17.5 12C17.5 12.9277 17.3365 13.8902 17.1385 14.7061C17.0375 15.1223 16.6157 15.5 15.9689 15.5H8.0311C7.38425 15.5 6.96252 15.1223 6.86151 14.7061C6.71656 14.1089 6.59012 13.4332 6.53275 12.75H7.75C8.16421 12.75 8.5 12.4142 8.5 12C8.5 11.5858 8.16421 11.25 7.75 11.25H6.53275C6.59012 10.5668 6.71656 9.89106 6.86151 9.29386ZM9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM5.40383 8.94007C5.69317 7.74796 6.80439 7 8.0311 7H15.9689C17.1956 7 18.3068 7.74796 18.5962 8.94006C18.8103 9.82235 19 10.9112 19 12C19 13.0888 18.8103 14.1776 18.5962 15.0599C18.3068 16.252 17.1956 17 15.9689 17H8.0311C6.80439 17 5.69317 16.252 5.40383 15.0599C5.18969 14.1776 5 13.0888 5 12C5 10.9112 5.18969 9.82235 5.40383 8.94007Z" clipRule="evenodd" />
		</svg>
	);
};

LogoCameraHubFilled.iconName = "logo-camera-hub--filled";

export default LogoCameraHubFilled;