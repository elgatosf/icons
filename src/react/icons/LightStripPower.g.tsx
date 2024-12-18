import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LightStripPower = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3.00019 7V7.21879C2.99994 7.23831 2.99994 7.25782 3.00019 7.27731C3.00923 7.97469 3.34137 8.65802 3.95533 9.09007L11.7083 14.5462C11.9377 14.0973 12.2177 13.6787 12.5408 13.2978L5.19978 8.13162C5.72518 7.81851 6.31976 7.60939 6.95512 7.53268L13.6627 12.253C14.11 11.9253 14.6007 11.6535 15.1247 11.4477L9.51514 7.5H19.0002C20.1048 7.5 21.0002 6.60457 21.0002 5.5V5C21.0002 3.89543 20.1048 3 19.0002 3H7.00019C4.79105 3 3.00019 4.79086 3.00019 7ZM7.00019 4.5H7.5002L7.50019 6C7.46174 6 7.42338 6.00036 7.3851 6.00108C6.53931 6.01699 5.73633 6.20792 5.01086 6.53916C4.95461 6.55805 4.90039 6.58366 4.84953 6.61575C4.7336 6.67294 4.61978 6.73375 4.50823 6.79805C4.56641 6.07023 4.93631 5.43029 5.48435 5.01181C5.90486 4.69072 6.43026 4.5 7.00019 4.5ZM9.0002 4.5H11.5002V6H9.0002V4.5ZM15.5002 4.5H13.0002V6H15.5002V4.5ZM19.0002 4.5H17.0002V6H19.0002C19.2763 6 19.5002 5.77614 19.5002 5.5V5C19.5002 4.72386 19.2763 4.5 19.0002 4.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M5.00001 16.5002H11.0764C11.0261 16.8261 11 17.16 11 17.5C11 18.7887 11.375 19.9899 12.0219 21.0002H5.00001C3.89544 21.0002 3.00001 20.1048 3.00001 19.0002V18.5002C3.00001 17.3957 3.89544 16.5002 5.00001 16.5002ZM7.0002 19.5002H5.00001C4.72387 19.5002 4.50001 19.2764 4.50001 19.0002V18.5002C4.50001 18.2241 4.72387 18.0002 5.00001 18.0002H7.0002V19.5002ZM8.5002 19.5002V18.0002H11.0002V19.5002H8.5002Z" clipRule="evenodd" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM20.1088 15.1668C19.9247 14.9609 19.6086 14.9433 19.4028 15.1274C19.197 15.3115 19.1794 15.6276 19.3634 15.8334C19.6851 16.1931 19.8958 16.6381 19.9702 17.1149C20.0445 17.5917 19.9793 18.0798 19.7823 18.5203C19.5854 18.9608 19.2652 19.3349 18.8604 19.5975C18.4555 19.86 17.9833 19.9998 17.5008 20C17.0183 20.0002 16.546 19.8607 16.141 19.5984C15.736 19.3361 15.4156 18.9622 15.2183 18.5218C15.0211 18.0814 14.9556 17.5933 15.0296 17.1165C15.1036 16.6397 15.314 16.1945 15.6355 15.8346C15.8194 15.6287 15.8016 15.3126 15.5956 15.1286C15.3897 14.9447 15.0736 14.9625 14.8897 15.1685C14.4396 15.6723 14.145 16.2956 14.0414 16.9631C13.9378 17.6307 14.0296 18.3139 14.3057 18.9305C14.5818 19.547 15.0304 20.0705 15.5974 20.4377C16.1644 20.8049 16.8256 21.0002 17.5011 21C18.1767 20.9998 18.8377 20.8041 19.4045 20.4365C19.9713 20.0689 20.4196 19.5451 20.6953 18.9284C20.971 18.3117 21.0623 17.6284 20.9582 16.9609C20.8542 16.2934 20.5592 15.6703 20.1088 15.1668ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17.5C18 17.7761 17.7761 18 17.5 18C17.2239 18 17 17.7761 17 17.5V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

LightStripPower.iconName = "light-strip-power";

export default LightStripPower;