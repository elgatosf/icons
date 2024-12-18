import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CurrencyYen = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M5.33787 3.12343C5.68391 2.89577 6.14899 2.99174 6.37665 3.33778L5.12352 4.1622C4.89586 3.81616 4.99183 3.35109 5.33787 3.12343Z" /><path d="M17.6235 3.33785L12.0001 11.8854L6.37665 3.33778L5.12352 4.1622L10.28 12H6.75008C6.33587 12 6.00008 12.3358 6.00008 12.75C6.00008 13.1642 6.33587 13.5 6.75008 13.5H11.2501V16H6.75008C6.33587 16 6.00008 16.3358 6.00008 16.75C6.00008 17.1642 6.33587 17.5 6.75008 17.5H11.2501V20.2496C11.2501 20.6638 11.5859 21 12.0001 21C12.4143 21 12.7501 20.6642 12.7501 20.25V17.5H17.2501C17.6643 17.5 18.0001 17.1642 18.0001 16.75C18.0001 16.3358 17.6643 16 17.2501 16H12.7501V13.5H17.2501C17.6643 13.5 18.0001 13.1642 18.0001 12.75C18.0001 12.3358 17.6643 12 17.2501 12H13.7202L18.8766 4.16227L17.6235 3.33785Z" /><path d="M17.6235 3.33785C17.8511 2.99181 18.3163 2.89577 18.6623 3.12343C19.0083 3.35109 19.1043 3.81623 18.8766 4.16227L17.6235 3.33785Z" />
		</svg>
	);
};

CurrencyYen.iconName = "currency-yen";

export default CurrencyYen;