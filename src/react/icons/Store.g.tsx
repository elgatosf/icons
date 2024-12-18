import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Store = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6.35407 3C5.53626 3 4.80084 3.4979 4.49711 4.25722L3.14305 7.64238C3.04855 7.87862 3 8.13073 3 8.38516V11.5C3 12.2403 3.4022 12.8866 4 13.2324V20.25C4 20.6642 4.33579 21 4.75 21C5.16421 21 5.5 20.6642 5.5 20.25V13.5H9.5V19C9.5 20.1046 10.3954 21 11.5 21H18C19.1046 21 20 20.1046 20 19V13.2324C20.5978 12.8866 21 12.2403 21 11.5V8.38516C21 8.13073 20.9515 7.87862 20.857 7.64238L19.5029 4.25722C19.1992 3.4979 18.4637 3 17.6459 3H6.35407ZM17.6459 4.5H6.35407C6.14961 4.5 5.96576 4.62448 5.88983 4.81431L4.53576 8.19947C4.51214 8.25853 4.5 8.32156 4.5 8.38516V11.5C4.5 11.7761 4.72386 12 5 12H7V8.75C7 8.33579 7.33579 8 7.75 8C8.16421 8 8.5 8.33579 8.5 8.75V12H11.25V8.75C11.25 8.33579 11.5858 8 12 8C12.4142 8 12.75 8.33579 12.75 8.75V12H15.5V8.75C15.5 8.33579 15.8358 8 16.25 8C16.6642 8 17 8.33579 17 8.75V12H19C19.2761 12 19.5 11.7761 19.5 11.5V8.38516C19.5 8.32156 19.4879 8.25853 19.4642 8.19947L18.1102 4.8143C18.0342 4.62448 17.8504 4.5 17.6459 4.5ZM11 19V13.5H18.5V19C18.5 19.2761 18.2761 19.5 18 19.5H11.5C11.2239 19.5 11 19.2761 11 19Z" clipRule="evenodd" />
		</svg>
	);
};

Store.iconName = "store";

export default Store;