import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Token = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 6.22639C3.3812 6.58366 3 7.24391 3 7.95844V16.0413C3 16.7559 3.3812 17.4161 4 17.7734L11 21.8148C11.6188 22.1721 12.3812 22.1721 13 21.8148L20 17.7734C20.6188 17.4161 21 16.7559 21 16.0413V7.95844C21 7.24391 20.6188 6.58366 20 6.22639L13 2.18494C12.3812 1.82768 11.6188 1.82768 11 2.18494L4 6.22639ZM8.97234 9.38585L5.25 7.23676L11.75 3.48398C11.9047 3.39466 12.0953 3.39466 12.25 3.48398L18.75 7.23676L15.0277 9.38585C14.2942 8.53709 13.2098 8 12 8C10.7902 8 9.70582 8.53709 8.97234 9.38585ZM15.7786 10.6843C15.922 11.0964 16 11.5391 16 12C16 13.9528 14.6006 15.5787 12.75 15.9298V20.2271L19.25 16.4744C19.4047 16.385 19.5 16.22 19.5 16.0413V8.53579L15.7786 10.6843ZM11.25 15.9298V20.2271L4.75 16.4744C4.5953 16.385 4.5 16.22 4.5 16.0413V8.53579L8.22141 10.6843C8.07796 11.0964 8 11.5391 8 12C8 13.9528 9.39935 15.5787 11.25 15.9298ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" clipRule="evenodd" />
		</svg>
	);
};

Token.iconName = "token";

export default Token;