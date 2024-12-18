import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMatter = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.1758 6.68692C16.1774 6.68573 16.179 6.68453 16.1807 6.68333H16.1696L16.1758 6.68692Z" /><path d="M16.1758 6.68692C15.2827 7.34622 14.312 7.83369 13.1862 8.02778V2.21667L12.0362 1.5L10.814 2.21667V8.02778C9.71955 7.82778 8.69733 7.34444 7.83622 6.68333L5.68066 7.92222C7.43622 9.57222 9.664 10.5056 12.0307 10.5056C14.3973 10.5056 16.6196 9.57222 18.3251 7.92222L16.1758 6.68692Z" /><path d="M4.14774 10.5388V13.0333C5.2033 13.4444 6.1033 14.0722 6.81997 14.9499L1.74219 17.8777V19.2388L2.98108 19.8999L8.01997 16.9944C8.38108 18.0499 8.44774 19.1666 8.30885 20.261L10.4589 21.4999C11.0533 19.2055 10.7255 16.7833 9.58108 14.7555C8.35885 12.6944 6.44219 11.2055 4.14774 10.5388Z" /><path d="M19.8419 13.0333V10.5388C17.5475 11.1999 15.6253 12.6944 14.4419 14.7555C13.2419 16.7833 12.9142 19.2055 13.5253 21.4999L15.6753 20.261C15.5308 19.1666 15.603 18.0555 15.9808 16.9944L21.0364 19.8999L22.2586 19.2388V17.8777L17.1642 14.9555C17.8808 14.0777 18.8142 13.4499 19.8364 13.0333H19.8419Z" />
		</svg>
	);
};

LogoMatter.iconName = "logo-matter";

export default LogoMatter;