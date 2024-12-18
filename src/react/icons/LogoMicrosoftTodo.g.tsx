import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMicrosoftTodo = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21.7559 7.27344C21.9186 7.44922 22 7.64453 22 7.85938C22 8.08724 21.9186 8.28255 21.7559 8.44531L10.5156 19.6855C10.4375 19.7702 10.3496 19.832 10.252 19.8711C10.1543 19.9102 10.0469 19.9297 9.92969 19.9297C9.70182 19.9297 9.50651 19.8483 9.34375 19.6855L3.13281 13.4746C3.04818 13.3965 2.98633 13.3086 2.94727 13.2109C2.9082 13.1133 2.88867 13.0059 2.88867 12.8887C2.88867 12.6608 2.97005 12.4655 3.13281 12.3027L6.0918 9.33398C6.26758 9.17122 6.46289 9.08984 6.67773 9.08984C6.9056 9.08984 7.10091 9.17122 7.26367 9.33398L9.92969 12L17.6152 4.31445C17.6999 4.22982 17.791 4.16797 17.8887 4.12891C17.9863 4.08984 18.0905 4.07031 18.2012 4.07031C18.3118 4.07031 18.416 4.08984 18.5137 4.12891C18.6113 4.16797 18.7057 4.22982 18.7969 4.31445L21.7559 7.27344ZM4.31445 12.8887L6.67773 15.252L9.05078 12.8887L6.67773 10.5156L4.31445 12.8887ZM9.92969 18.5039L20.5742 7.85938L18.2012 5.49609L7.56641 16.1406L7.63477 16.209L9.92969 18.5039Z" />
		</svg>
	);
};

LogoMicrosoftTodo.iconName = "logo-microsoft-todo";

export default LogoMicrosoftTodo;