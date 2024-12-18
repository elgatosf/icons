import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoAdobePremierePro = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.83122 9.10023V11.6848L8.8543 11.6865C8.95323 11.6936 9.04554 11.7002 9.13122 11.7002H9.53891C9.83891 11.7002 10.1389 11.6541 10.4235 11.5618C10.6697 11.4925 10.8851 11.3464 11.0543 11.1541C11.2158 10.9618 11.2928 10.7002 11.2928 10.3618C11.3005 10.1233 11.2389 9.88484 11.1158 9.67715C10.9851 9.47715 10.8005 9.32331 10.5774 9.23869C10.2928 9.12331 9.98507 9.07715 9.66968 9.08484C9.46968 9.08484 9.29276 9.08484 9.1466 9.09254C8.99276 9.08484 8.88507 9.09254 8.83122 9.10023Z" /><path fillRule="evenodd" d="M6.04072 3H17.9638C19.7715 3 21.233 4.46154 21.233 6.26923V17.7308C21.233 19.5385 19.7715 21 17.9638 21H6.04072C4.23302 21 2.77148 19.5385 2.77148 17.7308V6.26923C2.77148 4.46154 4.23302 3 6.04072 3ZM7.1543 15.6079V7.69254C7.1543 7.63869 7.17737 7.60792 7.23122 7.60792C7.36199 7.60792 7.48507 7.60792 7.66199 7.60023C7.75705 7.59627 7.85414 7.59435 7.95433 7.59237C8.04869 7.5905 8.14589 7.58857 8.2466 7.58484C8.35402 7.58087 8.46555 7.57895 8.58119 7.57695C8.68913 7.57509 8.80073 7.57317 8.91584 7.56946C9.1543 7.56177 9.38507 7.56177 9.61584 7.56177C10.2466 7.56177 10.7697 7.63869 11.2004 7.80023C11.5851 7.931 11.9389 8.14638 12.2312 8.431C12.4774 8.67715 12.6697 8.97715 12.7928 9.30792C12.9081 9.631 12.9697 9.96177 12.9697 10.3079C12.9697 10.9695 12.8158 11.5156 12.5081 11.9464C12.2004 12.3772 11.7697 12.7002 11.2697 12.8848C10.7466 13.0772 10.1697 13.1464 9.53891 13.1464C9.35433 13.1464 9.23121 13.1464 9.1543 13.1387C9.07737 13.131 8.96968 13.131 8.82353 13.131V15.6002C8.83122 15.6541 8.79276 15.7002 8.73891 15.7079H7.2466C7.18507 15.7079 7.1543 15.6772 7.1543 15.6079ZM15.4236 9.55387H14.0774C14.0697 9.54618 14.0543 9.54618 14.0543 9.55387C14.0159 9.56156 13.9928 9.60002 14.0005 9.63848L14.0023 9.65971C14.0171 9.82898 14.0313 9.99173 14.0313 10.1616C14.0351 10.2616 14.037 10.3616 14.039 10.4616C14.0409 10.5616 14.0428 10.6616 14.0467 10.7616C14.0543 10.9615 14.0543 11.1538 14.0543 11.3384V15.6308C14.062 15.6923 14.1159 15.7308 14.1774 15.7231H15.6928C15.762 15.7231 15.7928 15.6923 15.7928 15.6154V11.6923C15.9005 11.5693 16.039 11.4769 16.1851 11.4077C16.3928 11.3154 16.6082 11.2462 16.8313 11.2C17.1005 11.1385 17.3851 11.1154 17.662 11.1231C17.7467 11.1231 17.7851 11.1 17.7851 11.0385V9.50771C17.7774 9.45387 17.7313 9.41541 17.6774 9.4231C17.2697 9.4231 16.862 9.5231 16.5082 9.7231C16.1928 9.89233 15.9159 10.1154 15.6851 10.3846C15.6851 10.2846 15.6774 10.1923 15.6697 10.1077C15.662 10.0308 15.6467 9.94618 15.6313 9.86925C15.6236 9.80002 15.6082 9.73848 15.5851 9.67695C15.562 9.60772 15.5005 9.55387 15.4236 9.55387Z" clipRule="evenodd" />
		</svg>
	);
};

LogoAdobePremierePro.iconName = "logo-adobe-premiere-pro";

export default LogoAdobePremierePro;