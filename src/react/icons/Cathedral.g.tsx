import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Cathedral = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6.48136 3.00473C6.27023 1.92795 4.72987 1.92794 4.51873 3.00472L3.03737 10.5594C3.01252 10.6862 3 10.8151 3 10.9443L3.00007 20C3.00007 21.1046 3.8955 22 5.00007 22L9 22C10.1046 22 11 21.1046 11 20V17.5C11 16.9477 11.4477 16.5 12 16.5C12.5523 16.5 13 16.9477 13 17.5V20C13 21.1046 13.8954 22 15 22L18.9999 22C20.1045 22 20.9999 21.1046 20.9999 20L21 10.9443C21 10.8151 20.9875 10.6862 20.9626 10.5594L19.4813 3.00472C19.2701 1.92794 17.7298 1.92795 17.5186 3.00473L16.0374 10.5594C16.0125 10.6862 16 10.8151 16 10.9442L16 11.5L12.75 8.25V6.75C12.75 6.33579 12.4142 6 12 6C11.5858 6 11.25 6.33579 11.25 6.75V8.25L8 11.5L8 10.9442C8 10.8151 7.98748 10.6862 7.96263 10.5594L6.48136 3.00473ZM6.32438 10H4.67563L5.50003 5.7957L6.32438 10ZM8.00006 20.5L8.00002 13.8239C8.00121 13.6929 8.05375 13.5676 8.14644 13.4749L12 9.62132L15.8536 13.4749C15.9463 13.5676 15.9988 13.6929 16 13.8239L16 13.8284L15.9999 20.5H15C14.7239 20.5 14.5 20.2761 14.5 20V17.5C14.5 16.1193 13.3807 15 12 15C10.6193 15 9.5 16.1193 9.5 17.5V20C9.5 20.2761 9.27614 20.5 9 20.5H8.00006ZM6.50003 13.8172L6.50001 11.5H4.50001L4.50007 20C4.50007 20.2762 4.72393 20.5 5.00007 20.5H6.5V13.8284C6.5 13.8247 6.50001 13.8209 6.50003 13.8172ZM19.3244 10H17.6756L18.5 5.7957L19.3244 10ZM17.5 20.5H18.9999C19.2761 20.5 19.4999 20.2762 19.4999 20L19.5 11.5H17.5L17.5 13.8172L17.5 13.8284V20.5Z" clipRule="evenodd" />
		</svg>
	);
};

Cathedral.iconName = "cathedral";

export default Cathedral;