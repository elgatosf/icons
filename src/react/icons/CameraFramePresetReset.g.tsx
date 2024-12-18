import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CameraFramePresetReset = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2 2.75C2 2.33579 2.33579 2 2.75 2H5.25C5.66421 2 6 2.33579 6 2.75C6 3.16421 5.66421 3.5 5.25 3.5H3.5V5.25C3.5 5.66421 3.16421 6 2.75 6C2.33579 6 2 5.66421 2 5.25V2.75Z" /><path d="M2 21.25V18.75C2 18.3358 2.33579 18 2.75 18C3.16421 18 3.5 18.3358 3.5 18.75L3.5 20.5H5.25C5.66421 20.5 6 20.8358 6 21.25C6 21.6642 5.66421 22 5.25 22H2.75C2.55109 22 2.36032 21.921 2.21967 21.7803C2.07902 21.6397 2 21.4489 2 21.25Z" /><path d="M22 2.75V5.25C22 5.66421 21.6642 6 21.25 6C20.8358 6 20.5 5.66421 20.5 5.25V3.5L18.75 3.5C18.3358 3.5 18 3.16421 18 2.75C18 2.33579 18.3358 2 18.75 2H21.25C21.6642 2 22 2.33579 22 2.75Z" /><path d="M17 6.5H15V11.4982C14.4591 11.7237 13.9552 12.0203 13.5 12.3762V6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V13.5H12.3762C12.0203 13.9552 11.7237 14.4591 11.4982 15H6.5V17C6.5 17.2761 6.72386 17.5 7 17.5H11C11 18.0163 11.0602 18.5185 11.1739 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V11.1739C18.5185 11.0602 18.0163 11 17.5 11V7C17.5 6.72386 17.2761 6.5 17 6.5Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM16.4682 15.2228C16.944 15.0073 17.4754 14.9461 17.9877 15.048C18.5 15.1499 18.9676 15.4098 19.3247 15.791C19.6817 16.1723 19.9104 16.6558 19.9786 17.1737C20.0468 17.6916 19.951 18.2178 19.7048 18.6785C19.4586 19.1392 19.0742 19.5112 18.6057 19.7422C18.1372 19.9732 17.6081 20.0517 17.0928 19.9666C16.5774 19.8815 16.1016 19.6371 15.7322 19.2678C15.537 19.0725 15.2204 19.0725 15.0251 19.2678C14.8299 19.463 14.8299 19.7796 15.0251 19.9749C15.5422 20.492 16.2083 20.8341 16.9299 20.9533C17.6514 21.0724 18.3921 20.9625 19.048 20.6391C19.7039 20.3156 20.242 19.7948 20.5867 19.1499C20.9315 18.5049 21.0655 17.7682 20.9701 17.0432C20.8746 16.3181 20.5544 15.6412 20.0545 15.1074C19.5546 14.5737 18.9001 14.2099 18.1828 14.0673C17.4656 13.9246 16.7216 14.0102 16.0555 14.312C15.6587 14.4918 15.3014 14.7429 15 15.0505V14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5V16.5C14 16.7761 14.2239 17 14.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H15.5C15.7513 15.6649 16.0838 15.397 16.4682 15.2228Z" clipRule="evenodd" />
		</svg>
	);
};

CameraFramePresetReset.iconName = "camera-frame-preset-reset";

export default CameraFramePresetReset;