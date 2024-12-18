import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Home = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10.5 19C10.5 20.1046 9.60457 21 8.5 21H5C3.89543 21 3 20.1046 3 19V8.9782C3 8.36102 3.28495 7.77841 3.77212 7.39949L10.7721 1.95505C11.4943 1.39332 12.5057 1.39332 13.2279 1.95505L20.2279 7.39949C20.7151 7.77841 21 8.36102 21 8.9782V19C21 20.1046 20.1046 21 19 21H15.5C14.3954 21 13.5 20.1046 13.5 19V13H10.5V19ZM9 13C9 12.1716 9.67157 11.5 10.5 11.5H13.5C14.3284 11.5 15 12.1716 15 13V19C15 19.2762 15.2239 19.5 15.5 19.5H19C19.2761 19.5 19.5 19.2762 19.5 19V8.9782C19.5 8.8239 19.4288 8.67825 19.307 8.58352L12.307 3.13908C12.1264 2.99864 11.8736 2.99864 11.693 3.13908L4.69303 8.58352C4.57124 8.67825 4.5 8.8239 4.5 8.9782V19C4.5 19.2762 4.72386 19.5 5 19.5H8.5C8.77614 19.5 9 19.2762 9 19V13Z" clipRule="evenodd" />
		</svg>
	);
};

Home.iconName = "home";

export default Home;