import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Folder = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 3C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6H12.4142C12.149 6 11.8946 5.89464 11.7071 5.70711L9.58579 3.58579C9.21071 3.21071 8.70201 3 8.17157 3H4ZM20.5 18V8C20.5 7.72386 20.2761 7.5 20 7.5H12.4142C11.7512 7.5 11.1153 7.23661 10.6464 6.76777L8.52513 4.64645C8.43136 4.55268 8.30418 4.5 8.17157 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V18C3.5 18.2762 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2762 20.5 18Z" clipRule="evenodd" />
		</svg>
	);
};

Folder.iconName = "folder";

export default Folder;