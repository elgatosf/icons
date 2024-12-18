import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MusicAddFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9.03449 5.03183L19.0178 2.03683C19.0575 2.02391 19.0987 2.01422 19.141 2.00806C19.3423 1.97825 19.5416 2.03248 19.6977 2.14844C19.7846 2.21299 19.8581 2.29667 19.9111 2.39564C19.9515 2.47087 19.9795 2.55379 19.9922 2.64165C19.9984 2.68384 20.001 2.72595 20 2.7676V11.4982C19.5258 11.3004 19.0232 11.1572 18.5 11.0764V3.75822L10 6.30822V18.5001C10 20.4331 8.433 22.0002 6.5 22.0002C4.567 22.0002 3 20.4332 3 18.5002C3 16.5672 4.567 15.0002 6.5 15.0002C7.24362 15.0002 7.93308 15.2321 8.5 15.6275V5.7502C8.5 5.41899 8.71725 5.127 9.03449 5.03183Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

MusicAddFilled.iconName = "music-add--filled";

export default MusicAddFilled;