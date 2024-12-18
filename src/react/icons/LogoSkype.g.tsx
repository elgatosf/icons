import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoSkype = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.4961 13.2402C20.724 13.6504 20.8965 14.08 21.0137 14.5293C21.1309 14.9785 21.1927 15.4407 21.1992 15.916C21.1992 16.6712 21.056 17.3808 20.7695 18.0449C20.4831 18.709 20.0924 19.2851 19.5977 19.7734C19.1029 20.2617 18.5234 20.6523 17.8594 20.9453C17.1953 21.2382 16.4857 21.3815 15.7305 21.375C15.2422 21.375 14.7637 21.3099 14.2949 21.1797C13.8262 21.0494 13.377 20.8606 12.9473 20.6132C12.778 20.6328 12.6055 20.6491 12.4297 20.6621C12.2539 20.6751 12.0814 20.6816 11.9121 20.6816C11.1178 20.6816 10.3529 20.5807 9.61719 20.3789C8.88151 20.177 8.19141 19.8873 7.54688 19.5097C6.90234 19.1321 6.31641 18.6829 5.78906 18.1621C5.26172 17.6412 4.80924 17.0586 4.43164 16.414C4.05404 15.7695 3.76107 15.0794 3.55273 14.3437C3.3444 13.608 3.24023 12.8398 3.24023 12.039C3.24023 11.8307 3.25 11.6224 3.26953 11.414C3.28906 11.2057 3.3151 10.9941 3.34766 10.7793C3.11328 10.3691 2.93424 9.93617 2.81055 9.48044C2.68685 9.02471 2.625 8.55921 2.625 8.08395C2.625 7.32874 2.76823 6.61911 3.05469 5.95505C3.34115 5.29098 3.73177 4.71481 4.22656 4.22653C4.72135 3.73825 5.30404 3.34762 5.97461 3.05466C6.64518 2.76169 7.35482 2.61846 8.10352 2.62497C8.61133 2.62497 9.10938 2.69333 9.59766 2.83005C10.0859 2.96677 10.5482 3.17184 10.9844 3.44528C11.1406 3.43226 11.2936 3.42249 11.4434 3.41598C11.5931 3.40947 11.7493 3.40296 11.9121 3.39645C12.7064 3.39645 13.4714 3.49736 14.207 3.69919C14.9427 3.90101 15.6328 4.19072 16.2773 4.56833C16.9219 4.94593 17.5078 5.39515 18.0352 5.91598C18.5625 6.43682 19.015 7.0195 19.3926 7.66403C19.7702 8.30856 20.0632 8.99867 20.2715 9.73434C20.4798 10.47 20.584 11.2382 20.584 12.039C20.584 12.2409 20.5775 12.4394 20.5645 12.6347C20.5514 12.83 20.5286 13.0319 20.4961 13.2402ZM15.4277 14.1582C15.4277 13.7415 15.3594 13.3769 15.2227 13.0644C15.0859 12.7519 14.9004 12.4785 14.666 12.2441C14.4316 12.0097 14.168 11.8079 13.875 11.6386C13.582 11.4694 13.2793 11.3164 12.9668 11.1797C12.6543 11.0429 12.3516 10.916 12.0586 10.7988C11.7656 10.6816 11.502 10.5644 11.2676 10.4472C11.0332 10.33 10.8477 10.1966 10.7109 10.0468C10.5742 9.8971 10.5026 9.72783 10.4961 9.53903C10.4961 9.35023 10.5417 9.19398 10.6328 9.07028C10.724 8.94658 10.8411 8.84893 10.9844 8.77731C11.1276 8.7057 11.2806 8.65036 11.4434 8.6113C11.6061 8.57223 11.7689 8.55596 11.9316 8.56247C12.1074 8.56247 12.2669 8.57223 12.4102 8.59176C12.5534 8.6113 12.6966 8.64059 12.8398 8.67966C12.9831 8.71872 13.123 8.76429 13.2598 8.81637C13.3965 8.86846 13.5462 8.93031 13.709 9.00192C13.8717 9.06702 14.0247 9.09958 14.168 9.09958C14.4479 9.09958 14.666 9.00843 14.8223 8.82614C14.9785 8.64385 15.0599 8.41598 15.0664 8.14255C15.0664 7.9277 15.0143 7.74541 14.9102 7.59567C14.806 7.44593 14.666 7.31572 14.4902 7.20505C14.3145 7.09437 14.1159 7.00648 13.8945 6.94137C13.6732 6.87627 13.4518 6.82744 13.2305 6.79489C13.0091 6.76234 12.791 6.73955 12.5762 6.72653C12.3613 6.71351 12.179 6.707 12.0293 6.707C11.5866 6.707 11.1374 6.75908 10.6816 6.86325C10.2259 6.96742 9.8125 7.13994 9.44141 7.38083C9.07031 7.62171 8.76758 7.92119 8.5332 8.27926C8.29883 8.63734 8.17839 9.07679 8.17188 9.59762C8.17188 10.0078 8.24023 10.3659 8.37695 10.6718C8.51367 10.9778 8.69922 11.248 8.93359 11.4824C9.16797 11.7168 9.43164 11.9186 9.72461 12.0879C10.0176 12.2571 10.3203 12.4134 10.6328 12.5566C10.9453 12.6998 11.248 12.8268 11.541 12.9375C11.834 13.0481 12.0977 13.1718 12.332 13.3086C12.5664 13.4453 12.752 13.5853 12.8887 13.7285C13.0254 13.8717 13.097 14.0507 13.1035 14.2656C13.1035 14.4674 13.0612 14.6334 12.9766 14.7636C12.8919 14.8938 12.7845 14.9948 12.6543 15.0664C12.5241 15.138 12.3743 15.1868 12.2051 15.2129C12.0358 15.2389 11.8698 15.2552 11.707 15.2617C11.401 15.2617 11.1341 15.2259 10.9062 15.1543C10.6784 15.0826 10.4701 15.0013 10.2812 14.9101C10.0924 14.819 9.91016 14.7376 9.73438 14.666C9.55859 14.5944 9.37305 14.5553 9.17773 14.5488C8.89128 14.5488 8.6569 14.6302 8.47461 14.7929C8.29232 14.9557 8.19792 15.1868 8.19141 15.4863C8.19141 15.7207 8.25326 15.9225 8.37695 16.0918C8.50065 16.261 8.66016 16.4075 8.85547 16.5312C9.05078 16.6549 9.27865 16.7526 9.53906 16.8242C9.79948 16.8958 10.0534 16.9544 10.3008 17C10.5482 17.0455 10.7923 17.0748 11.0332 17.0879C11.2741 17.1009 11.4792 17.1106 11.6484 17.1172C12.1237 17.1172 12.5892 17.0683 13.0449 16.9707C13.5007 16.873 13.9043 16.707 14.2559 16.4726C14.6074 16.2382 14.8906 15.9323 15.1055 15.5547C15.3203 15.1771 15.4277 14.7116 15.4277 14.1582Z" />
		</svg>
	);
};

LogoSkype.iconName = "logo-skype";

export default LogoSkype;