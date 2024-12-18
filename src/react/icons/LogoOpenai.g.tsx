import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoOpenai = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.566 10.1856C21.0197 8.82372 20.8634 7.33185 20.1378 6.0931C19.0466 4.1931 16.8528 3.2156 14.7103 3.6756C13.7572 2.60185 12.3878 1.99122 10.9522 1.99997C8.7622 1.99497 6.81908 3.40497 6.14533 5.48872C4.73845 5.77685 3.52408 6.65747 2.81345 7.9056C1.71408 9.8006 1.9647 12.1893 3.43345 13.8143C2.9797 15.1762 3.13595 16.6681 3.86158 17.9068C4.95283 19.8068 7.14657 20.7843 9.28907 20.3243C10.2416 21.3981 11.6116 22.0087 13.0472 21.9993C15.2385 22.005 17.1822 20.5937 17.856 18.5081C19.2628 18.22 20.4772 17.3393 21.1878 16.0912C22.286 14.1962 22.0347 11.8093 20.5666 10.1843L20.566 10.1856ZM13.0485 20.6925C12.1716 20.6937 11.3222 20.3868 10.6491 19.825C10.6797 19.8087 10.7328 19.7793 10.7672 19.7581L14.7497 17.4581C14.9535 17.3425 15.0785 17.1256 15.0772 16.8912V11.2768L16.7603 12.2487C16.7785 12.2575 16.7903 12.275 16.7928 12.295V16.9443C16.7903 19.0118 15.116 20.6881 13.0485 20.6925ZM4.99595 17.2531C4.55658 16.4943 4.39845 15.605 4.54908 14.7418C4.57845 14.7593 4.63033 14.7912 4.6672 14.8125L8.6497 17.1125C8.85158 17.2306 9.10158 17.2306 9.30408 17.1125L14.166 14.305V16.2487C14.1672 16.2687 14.1578 16.2881 14.1422 16.3006L10.1166 18.625C8.32345 19.6575 6.03345 19.0437 4.99658 17.2531H4.99595ZM3.94783 8.55997C4.38532 7.79997 5.07595 7.21872 5.89845 6.91685C5.89845 6.95122 5.89657 7.01185 5.89657 7.05435V11.655C5.89532 11.8887 6.02033 12.1056 6.22345 12.2212L11.0853 15.0281L9.4022 16C9.38533 16.0112 9.36408 16.0131 9.34532 16.005L5.31908 13.6787C3.5297 12.6425 2.91595 10.3531 3.9472 8.5606L3.94783 8.55997ZM17.7766 11.7781L12.9147 8.9706L14.5978 7.99935C14.6147 7.9881 14.636 7.98622 14.6547 7.99435L18.681 10.3187C20.4734 11.3543 21.0878 13.6475 20.0522 15.44C19.6141 16.1987 18.9241 16.78 18.1022 17.0825V12.3443C18.1041 12.1106 17.9797 11.8943 17.7772 11.7781H17.7766ZM19.4516 9.25685C19.4222 9.23872 19.3703 9.20747 19.3335 9.18622L15.351 6.88622C15.1491 6.7681 14.8991 6.7681 14.6966 6.88622L9.8347 9.69372V7.74997C9.83345 7.72997 9.84282 7.7106 9.85845 7.6981L13.8841 5.3756C15.6772 4.34122 17.9697 4.95685 19.0035 6.7506C19.4403 7.5081 19.5984 8.39497 19.4503 9.25685H19.4516ZM8.9197 12.7212L7.23595 11.7493C7.21782 11.7406 7.20595 11.7231 7.20345 11.7031V7.05372C7.2047 4.98372 8.88408 3.30622 10.9541 3.30747C11.8297 3.30747 12.6772 3.61497 13.3503 4.17497C13.3197 4.19122 13.2672 4.2206 13.2322 4.24185L9.2497 6.54185C9.04595 6.65747 8.92095 6.87372 8.9222 7.1081L8.9197 12.72V12.7212ZM9.83407 10.75L11.9997 9.49935L14.1653 10.7493V13.25L11.9997 14.5L9.83407 13.25V10.75Z" />
		</svg>
	);
};

LogoOpenai.iconName = "logo-openai";

export default LogoOpenai;