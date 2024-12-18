import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FaceSatisfiedFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.8119 15.2356C16.08 14.9198 16.0413 14.4465 15.7255 14.1785C15.4097 13.9104 14.9364 13.9492 14.6683 14.2649C14.34 14.6518 13.9315 14.9626 13.4711 15.1758C13.0107 15.3891 12.5095 15.4997 12.0021 15.5C11.4948 15.5003 10.9934 15.3903 10.5328 15.1776C10.0721 14.9649 9.66323 14.6546 9.33443 14.2682C9.06599 13.9527 8.59265 13.9146 8.27719 14.183C7.96173 14.4515 7.9236 14.9248 8.19204 15.2403C8.66176 15.7923 9.24588 16.2356 9.90394 16.5394C10.562 16.8433 11.2782 17.0004 12.0031 17C12.7279 16.9996 13.4439 16.8415 14.1016 16.5369C14.7593 16.2322 15.3429 15.7882 15.8119 15.2356ZM16.5 10.25C16.5 10.9404 15.9404 11.5 15.25 11.5C14.5596 11.5 14 10.9404 14 10.25C14 9.55964 14.5596 9 15.25 9C15.9404 9 16.5 9.55964 16.5 10.25ZM10 10.25C10 10.9404 9.44036 11.5 8.75 11.5C8.05964 11.5 7.5 10.9404 7.5 10.25C7.5 9.55964 8.05964 9 8.75 9C9.44036 9 10 9.55964 10 10.25Z" clipRule="evenodd" />
		</svg>
	);
};

FaceSatisfiedFilled.iconName = "face-satisfied--filled";

export default FaceSatisfiedFilled;