import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoYoutubeColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#FF0033" d="M22.5382 6.70493C22.2846 5.75778 21.5403 5.01346 20.5932 4.75992C18.8782 4.29993 11.9982 4.29993 11.9982 4.29993C11.9982 4.29993 5.11821 4.29993 3.40319 4.75992C2.45785 5.01346 1.71172 5.75778 1.45818 6.70493C1 8.41993 1 12.0003 1 12.0003C1 12.0003 0.999999 15.5806 1.45999 17.2956C1.71353 18.2428 2.45785 18.9871 3.40501 19.2406C5.12002 19.7006 12 19.7006 12 19.7006C12 19.7006 18.88 19.7006 20.5949 19.2406C21.5422 18.9871 22.2865 18.2428 22.54 17.2956C23 15.5806 23 12.0003 23 12.0003C23 12.0003 22.9982 8.41993 22.5382 6.70493Z" /><path fill="white" d="M9.79883 15.3002L15.5125 12.0006L9.79883 8.70093V15.3002Z" />
		</svg>
	);
};

LogoYoutubeColor.iconName = "logo-youtube--color";

export default LogoYoutubeColor;