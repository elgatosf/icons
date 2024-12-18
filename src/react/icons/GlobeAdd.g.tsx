import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const GlobeAdd = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.2628 22 12.5232 21.9899 12.7809 21.97C12.3372 21.5016 11.9624 20.9673 11.6729 20.3832C11.5681 20.314 11.4473 20.2069 11.3119 20.0439C11.001 19.6696 10.6874 19.083 10.4095 18.2921C9.91231 16.8771 9.5743 14.9374 9.51083 12.75H13.0629C13.8719 11.994 14.8742 11.4422 15.9877 11.1769C15.9185 8.88284 15.5627 6.79594 15.0057 5.21065C14.8312 4.71406 14.6326 4.25385 14.4091 3.84623C17.6995 4.81688 20.1592 7.72507 20.4674 11.25H19.2914C20.3082 11.5409 21.223 12.0732 21.97 12.7809C21.9899 12.5232 22 12.2628 22 12ZM9.51083 11.25C9.5743 9.06259 9.91231 7.12294 10.4095 5.70788C10.6874 4.91703 11.001 4.33044 11.3119 3.95615C11.6265 3.57734 11.8628 3.5 12 3.5C12.1372 3.5 12.3735 3.57734 12.6881 3.95615C12.999 4.33044 13.3126 4.91703 13.5905 5.70788C14.0877 7.12294 14.4257 9.06259 14.4892 11.25H9.51083ZM8.01024 11.25H3.53263C3.8408 7.72507 6.30049 4.81688 9.5909 3.84623C9.36744 4.25385 9.16879 4.71406 8.99431 5.21065C8.4314 6.81277 8.07392 8.92721 8.01024 11.25ZM3.53263 12.75H8.01024C8.07392 15.0728 8.4314 17.1872 8.99431 18.7894C9.16878 19.2859 9.36744 19.7462 9.5909 20.1538C6.30049 19.1831 3.8408 16.2749 3.53263 12.75Z" clipRule="evenodd" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

GlobeAdd.iconName = "globe-add";

export default GlobeAdd;