import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SoundEffectAdd = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.2773 4.05322C11.6125 4.18658 11.8052 4.53969 11.7361 4.89376C10.9182 9.08435 10.7628 11.4603 11.1007 13.3218C11.2016 13.8776 11.3472 14.3934 11.5387 14.9049C11.2163 15.6445 11.0275 16.4557 11.0028 17.3081C10.349 16.0904 9.87052 14.9429 9.62486 13.5898C9.35765 12.118 9.36953 10.4333 9.66631 8.16894C9.43072 8.57007 9.21131 8.98576 9.00753 9.44536C8.33912 10.9528 7.85772 12.9251 7.74961 16.2743C7.73834 16.6234 7.48748 16.9186 7.1447 16.986C6.80192 17.0534 6.45799 16.8752 6.31536 16.5563C5.61204 14.9838 5.10096 13.8104 4.76712 12.5133C4.5694 11.7451 4.43628 10.9443 4.35377 9.99911L4.3361 10.0364C4.084 10.5741 3.91966 11.1767 3.73685 12.1399C3.66967 12.4939 3.36029 12.7501 3 12.7501H1.75C1.33579 12.7501 1 12.4143 1 12.0001C1 11.5859 1.33579 11.2501 1.75 11.2501H2.38675C2.5417 10.5405 2.71631 9.95773 2.97795 9.39965C3.31119 8.68886 3.76623 8.05917 4.42381 7.26998C4.6246 7.029 4.95414 6.93843 5.24989 7.04294C5.54563 7.14745 5.7451 7.42496 5.74991 7.73859C5.78032 9.72222 5.92458 10.9924 6.21978 12.1394C6.3005 12.453 6.39303 12.7598 6.49919 13.072C6.73982 11.3075 7.13085 9.97727 7.63627 8.83736C8.17119 7.63094 8.84567 6.63054 9.53765 5.6042C9.81369 5.19477 10.0925 4.78121 10.3664 4.3488C10.5594 4.04402 10.9421 3.91985 11.2773 4.05322Z" /><path d="M13.7076 12.2204C13.0367 12.7032 12.4615 13.3107 12.016 14.009C12.0536 13.211 12.1348 12.4807 12.2599 11.7916C12.62 9.8097 13.3359 8.21858 14.3429 6.38852C14.5113 6.08243 14.8688 5.93318 15.2049 6.02861C15.5409 6.12404 15.7666 6.43889 15.7491 6.78781C15.6692 8.37245 15.7821 9.81065 16.0481 11.1628C15.5479 11.2769 15.0696 11.4487 14.6207 11.6709C14.4996 11.0921 14.4041 10.4982 14.3371 9.88542C14.0751 10.5849 13.8754 11.2911 13.7358 12.0598C13.7261 12.113 13.7167 12.1665 13.7076 12.2204Z" /><path d="M17.5 11C17.2242 11 16.9524 11.0172 16.6856 11.0505C16.9674 9.68239 17.4687 8.4571 18.4156 7.27997C18.6037 7.04621 18.913 6.94701 19.2019 7.02777C19.4908 7.10853 19.7039 7.35372 19.7434 7.65112C19.9001 8.82771 20.0307 9.50229 20.2615 10.018C20.453 10.4462 20.7322 10.8028 21.2661 11.2501H22.25C22.6642 11.2501 23 11.5859 23 12.0001C23 12.4143 22.6642 12.7501 22.25 12.7501H21.9372C21.1788 12.0413 20.2506 11.5121 19.2202 11.23C19.0967 11.0426 18.988 10.8446 18.8923 10.6307C18.7811 10.3822 18.6903 10.1179 18.613 9.83272C18.4513 10.2153 18.3244 10.6147 18.2233 11.0398C17.9858 11.0135 17.7445 11 17.5 11Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

SoundEffectAdd.iconName = "sound-effect-add";

export default SoundEffectAdd;