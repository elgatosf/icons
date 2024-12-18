import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Reflect = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.5 3.75C10.5 3.33579 10.1642 3 9.75 3C9.33579 3 9 3.33579 9 3.75V12.9393L4.28033 8.21967C3.98744 7.92678 3.51256 7.92678 3.21967 8.21967C2.92678 8.51256 2.92678 8.98744 3.21967 9.28033L14.7197 20.7803C15.0126 21.0732 15.4874 21.0732 15.7803 20.7803C16.0732 20.4874 16.0732 20.0126 15.7803 19.7197L11.0607 15H19.4393L17.7197 16.7197C17.4268 17.0126 17.4268 17.4874 17.7197 17.7803C18.0126 18.0732 18.4874 18.0732 18.7803 17.7803L21.7803 14.7803C22.0732 14.4874 22.0732 14.0126 21.7803 13.7197L18.7803 10.7197C18.4874 10.4268 18.0126 10.4268 17.7197 10.7197C17.4268 11.0126 17.4268 11.4874 17.7197 11.7803L19.4393 13.5H10.5V3.75Z" />
		</svg>
	);
};

Reflect.iconName = "reflect";

export default Reflect;