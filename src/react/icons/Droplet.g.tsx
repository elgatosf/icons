import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Droplet = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.8296 15.2941C16.9368 14.894 16.6994 14.4827 16.2993 14.3755C15.8992 14.2683 15.4879 14.5058 15.3807 14.9059C15.2217 15.4993 14.9093 16.0404 14.4749 16.4749C14.0404 16.9093 13.4993 17.2217 12.9059 17.3807C12.5058 17.4879 12.2683 17.8992 12.3755 18.2993C12.4827 18.6994 12.894 18.9368 13.2941 18.8296C14.1419 18.6025 14.9149 18.1561 15.5355 17.5355C16.1561 16.9149 16.6025 16.1419 16.8296 15.2941Z" /><path fillRule="evenodd" d="M10.8441 2.94923C8.62821 4.8727 4 9.43635 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.43635 15.3718 4.8727 13.1559 2.94923C12.4846 2.36655 11.5154 2.36655 10.8441 2.94923ZM7.7999 8.37268C6.43404 10.2317 5.5 12.1946 5.5 14C5.5 17.5899 8.41015 20.5 12 20.5C15.5899 20.5 18.5 17.5899 18.5 14C18.5 12.1946 17.566 10.2317 16.2001 8.37269C14.8581 6.54614 13.2382 5.00696 12.1726 4.08201C12.1118 4.02921 12.0515 4.01222 12 4.01222C11.9485 4.01222 11.8882 4.02921 11.8274 4.08201C10.7618 5.00696 9.14191 6.54613 7.7999 8.37268Z" clipRule="evenodd" />
		</svg>
	);
};

Droplet.iconName = "droplet";

export default Droplet;