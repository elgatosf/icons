import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoInstagram = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.27263 3.06294C7.31502 3.10813 6.66108 3.26095 6.08939 3.48559C5.49772 3.71617 4.99624 4.0256 4.49727 4.52636C3.99831 5.02713 3.69104 5.52897 3.46208 6.12154C3.2405 6.69449 3.09038 7.34897 3.04808 8.30712C3.00577 9.26527 2.99641 9.57326 3.00109 12.0173C3.00577 14.4614 3.01657 14.7678 3.06302 15.7279C3.10874 16.6853 3.26102 17.3391 3.48566 17.911C3.7166 18.5026 4.02567 19.0039 4.52661 19.5031C5.02756 20.0022 5.52904 20.3088 6.12305 20.5381C6.69546 20.7593 7.35012 20.9101 8.30809 20.9521C9.26607 20.994 9.57441 21.0037 12.0178 20.9991C14.4611 20.9944 14.7687 20.9836 15.7287 20.938C16.6886 20.8925 17.339 20.7391 17.911 20.5156C18.5027 20.2841 19.0044 19.9756 19.5031 19.4744C20.0019 18.9733 20.309 18.4711 20.5378 17.8782C20.7596 17.3058 20.9102 16.6511 20.9518 15.6939C20.9937 14.7332 21.0036 14.4265 20.999 11.9828C20.9943 9.53906 20.9833 9.23269 20.9378 8.27292C20.8922 7.31315 20.7398 6.66137 20.5153 6.08914C20.284 5.49747 19.9753 4.99653 19.4745 4.49702C18.9738 3.99751 18.4712 3.69061 17.8784 3.46237C17.3057 3.24079 16.6514 3.08976 15.6934 3.04836C14.7354 3.00696 14.4271 2.99634 11.9828 3.00102C9.53859 3.0057 9.23259 3.01614 8.27263 3.06294ZM8.37776 19.333C7.50025 19.2948 7.02378 19.149 6.70626 19.027C6.28577 18.865 5.98625 18.6691 5.6698 18.3557C5.35336 18.0424 5.15896 17.7417 4.9948 17.3222C4.8715 17.0046 4.72299 16.5287 4.68195 15.6512C4.63731 14.7028 4.62795 14.418 4.62273 12.0152C4.61751 9.61232 4.62669 9.32791 4.66827 8.37912C4.70571 7.50233 4.85242 7.02533 4.97428 6.70799C5.13628 6.28696 5.3314 5.98798 5.6455 5.67171C5.95961 5.35545 6.25931 5.16069 6.67926 4.99653C6.99642 4.87268 7.47235 4.72544 8.34949 4.68368C9.29865 4.63868 9.58305 4.62968 11.9855 4.62446C14.388 4.61924 14.6731 4.62824 15.6227 4.67C16.4994 4.70816 16.9766 4.85342 17.2936 4.97601C17.7143 5.13801 18.0136 5.33259 18.3299 5.64723C18.6462 5.96188 18.8411 6.2605 19.0053 6.68135C19.1293 6.99761 19.2765 7.47335 19.3179 8.35104C19.3631 9.30019 19.3734 9.58478 19.3777 11.9871C19.382 14.3894 19.3735 14.6747 19.332 15.6231C19.2936 16.5006 19.1482 16.9773 19.026 17.2952C18.864 17.7155 18.6687 18.0152 18.3544 18.3313C18.0401 18.6473 17.7407 18.8421 17.3206 19.0063C17.0038 19.1299 16.5273 19.2775 15.6509 19.3193C14.7018 19.3639 14.4174 19.3733 12.014 19.3785C9.61059 19.3837 9.32691 19.374 8.37776 19.333ZM15.7148 7.18985C15.7152 7.40347 15.7789 7.61219 15.8979 7.78961C16.0168 7.96702 16.1858 8.10517 16.3833 8.18657C16.5808 8.26798 16.798 8.28898 17.0074 8.24693C17.2169 8.20488 17.4091 8.10166 17.5599 7.95033C17.7107 7.799 17.8132 7.60636 17.8545 7.39676C17.8958 7.18717 17.874 6.97004 17.7918 6.77284C17.7097 6.57563 17.5709 6.40721 17.3931 6.28888C17.2152 6.17055 17.0063 6.10761 16.7927 6.10804C16.5063 6.10861 16.2319 6.2229 16.0297 6.42577C15.8276 6.62864 15.7143 6.90348 15.7148 7.18985ZM7.37892 12.009C7.38396 14.5615 9.45687 16.6259 12.0088 16.6211C14.5606 16.6162 16.6265 14.5435 16.6217 11.991C16.6168 9.43862 14.5434 7.37363 11.9911 7.37867C9.43887 7.38371 7.37406 9.45698 7.37892 12.009ZM9.00002 12.0058C8.99885 11.4124 9.17365 10.8321 9.50233 10.338C9.83101 9.84403 10.2988 9.45858 10.8465 9.23042C11.3943 9.00227 11.9974 8.94166 12.5796 9.05627C13.1618 9.17088 13.6969 9.45555 14.1173 9.87429C14.5377 10.293 14.8245 10.827 14.9414 11.4088C15.0583 11.9905 15.0001 12.5938 14.7741 13.1425C14.5481 13.6911 14.1645 14.1604 13.6718 14.4911C13.1791 14.8217 12.5994 14.9988 12.0061 15C11.6121 15.0008 11.2218 14.924 10.8575 14.774C10.4932 14.6239 10.162 14.4036 9.88282 14.1256C9.60368 13.8475 9.38204 13.5172 9.23057 13.1535C9.07909 12.7898 9.00075 12.3998 9.00002 12.0058Z" />
		</svg>
	);
};

LogoInstagram.iconName = "logo-instagram";

export default LogoInstagram;