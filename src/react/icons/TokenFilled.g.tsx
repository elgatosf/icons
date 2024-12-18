import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TokenFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.76931 6.38188C3.84191 6.32522 3.91892 6.27321 4 6.22639L11 2.18494C11.6188 1.82768 12.3812 1.82768 13 2.18494L20 6.22639C20.0811 6.27321 20.1581 6.32522 20.2307 6.38188L15.0277 9.38585C14.2942 8.53709 13.2098 8 12 8C10.7902 8 9.70582 8.53709 8.97234 9.38585L3.76931 6.38188Z" /><path d="M16 12C16 13.9528 14.6006 15.5787 12.75 15.9298V21.9369C12.8354 21.9023 12.9189 21.8617 13 21.8148L20 17.7734C20.6188 17.4161 21 16.7559 21 16.0413V7.95844C21 7.86482 20.9935 7.77212 20.9807 7.68092L15.7786 10.6843C15.922 11.0964 16 11.5391 16 12Z" /><path d="M8 12C8 11.5391 8.07796 11.0964 8.22141 10.6843L3.01931 7.68092C3.00655 7.77212 3 7.86482 3 7.95844V16.0413C3 16.7559 3.3812 17.4161 4 17.7734L11 21.8148C11.0811 21.8617 11.1646 21.9023 11.25 21.9369V15.9298C9.39935 15.5787 8 13.9528 8 12Z" /><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" />
		</svg>
	);
};

TokenFilled.iconName = "token--filled";

export default TokenFilled;