import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Forest = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.5 18V20C11.5 21.1046 10.6046 22 9.5 22H8.5C7.39543 22 6.5 21.1046 6.5 20V18H2.93801C2.16821 18 1.68709 17.1667 2.07199 16.5L4.09272 13H3.8038C3.32692 13 2.96082 12.6802 2.84276 12.2783C2.77024 12.0315 2.79131 11.7537 2.93777 11.5L8.13392 2.5C8.51882 1.83333 9.48107 1.83333 9.86597 2.5L12 6.19618L14.134 2.5C14.5189 1.83333 15.4811 1.83333 15.866 2.5L21.0622 11.5C21.2087 11.7538 21.2297 12.0317 21.1571 12.2787C21.0389 12.6804 20.6729 13 20.1961 13H19.9077L21.9284 16.5C22.3133 17.1667 21.8322 18 21.0624 18H17.5V20C17.5 21.1046 16.6046 22 15.5 22H14.5C13.3954 22 12.5 21.1046 12.5 20V18H11.5ZM8 18V20C8 20.2761 8.22386 20.5 8.5 20.5H9.5C9.77614 20.5 10 20.2761 10 20V18H8ZM14 18V20C14 20.2761 14.2239 20.5 14.5 20.5H15.5C15.7761 20.5 16 20.2761 16 20V18H14ZM20.1964 16.5L17.3096 11.5H19.3301L15 4L12.866 7.69618L15.0621 11.5C15.2087 11.7538 15.2297 12.0317 15.157 12.2787C15.0389 12.6804 14.6728 13 14.1961 13H13.9077L15.9284 16.5L20.1964 16.5ZM6.69079 11.5L3.80404 16.5H14.1963L11.3096 11.5H13.3301L8.99995 4L4.66982 11.5H6.69079Z" clipRule="evenodd" />
		</svg>
	);
};

Forest.iconName = "forest";

export default Forest;