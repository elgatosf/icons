import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoDiscord = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19.6239 5.00565C18.2217 4.36225 16.7181 3.88823 15.1459 3.61674C15.1173 3.6115 15.0887 3.62459 15.0739 3.65078C14.8805 3.99473 14.6663 4.44344 14.5163 4.79612C12.8254 4.54296 11.1431 4.54296 9.4868 4.79612C9.33676 4.4356 9.11478 3.99473 8.92053 3.65078C8.90578 3.62547 8.87718 3.61237 8.84855 3.61674C7.27725 3.88736 5.7736 4.36139 4.37052 5.00565C4.35838 5.01088 4.34797 5.01962 4.34106 5.03096C1.48894 9.29196 0.707629 13.4482 1.09092 17.553C1.09265 17.573 1.10392 17.5922 1.11953 17.6045C3.00128 18.9864 4.82407 19.8253 6.61301 20.3814C6.64164 20.3901 6.67197 20.3797 6.69019 20.3561C7.11337 19.7782 7.49059 19.1688 7.81402 18.5281C7.83311 18.4905 7.81489 18.446 7.77588 18.4312C7.17754 18.2042 6.6078 17.9275 6.05975 17.6132C6.0164 17.5879 6.01293 17.5259 6.05281 17.4962C6.16814 17.4098 6.2835 17.3199 6.39363 17.2291C6.41355 17.2125 6.44131 17.209 6.46474 17.2195C10.0652 18.8633 13.9631 18.8633 17.521 17.2195C17.5445 17.2081 17.5722 17.2116 17.593 17.2282C17.7032 17.319 17.8185 17.4098 17.9347 17.4962C17.9746 17.5259 17.972 17.5879 17.9286 17.6132C17.3806 17.9336 16.8108 18.2042 16.2116 18.4303C16.1726 18.4451 16.1553 18.4905 16.1744 18.5281C16.5047 19.1679 16.882 19.7773 17.2973 20.3552C17.3147 20.3797 17.3459 20.3901 17.3745 20.3814C19.1721 19.8253 20.9949 18.9864 22.8766 17.6045C22.8931 17.5922 22.9035 17.5739 22.9053 17.5538C23.364 12.8083 22.137 8.68612 19.6525 5.03183C19.6465 5.01962 19.6361 5.01088 19.6239 5.00565ZM8.35169 15.0536C7.26771 15.0536 6.37454 14.0584 6.37454 12.8363C6.37454 11.6141 7.25039 10.6189 8.35169 10.6189C9.46163 10.6189 10.3462 11.6228 10.3288 12.8363C10.3288 14.0584 9.45296 15.0536 8.35169 15.0536ZM15.6619 15.0536C14.5779 15.0536 13.6847 14.0584 13.6847 12.8363C13.6847 11.6141 14.5606 10.6189 15.6619 10.6189C16.7718 10.6189 17.6563 11.6228 17.639 12.8363C17.639 14.0584 16.7718 15.0536 15.6619 15.0536Z" />
		</svg>
	);
};

LogoDiscord.iconName = "logo-discord";

export default LogoDiscord;