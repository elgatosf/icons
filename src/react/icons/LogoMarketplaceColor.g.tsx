import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMarketplaceColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#151515" d="M8.00629 6.01171L8.01568 6.01876L11.5845 8.0695C11.4092 9.04839 10.8959 9.94268 10.1359 10.5894C9.36372 11.2466 8.38022 11.6087 7.36612 11.6087C6.221 11.6087 5.14445 11.161 4.33421 10.348C3.52437 9.53494 3.07812 8.45369 3.07812 7.30435C3.07812 6.15501 3.52437 5.07376 4.33413 4.2607C5.1439 3.44765 6.22046 3 7.36604 3C8.24107 3 9.0823 3.26303 9.79909 3.75999C10.4994 4.24568 11.0354 4.9206 11.3496 5.71205C11.3895 5.81348 11.4266 5.9178 11.459 6.02251L10.6967 6.46594C10.6704 6.36076 10.6389 6.25597 10.6028 6.15407C10.1171 4.7802 8.81598 3.85672 7.36604 3.85672C5.4722 3.85672 3.93156 5.40347 3.93156 7.30435C3.93156 9.20523 5.4722 10.752 7.36604 10.752C8.102 10.752 8.80385 10.5209 9.39613 10.0832C9.97619 9.65429 10.4017 9.06671 10.6267 8.38427L10.629 8.36924L6.46698 5.97892V8.57077L7.90189 7.74081L8.64075 8.16451L6.48999 9.4087L5.72953 8.97373V5.58057L6.48905 5.14137L8.00668 6.01218L8.00621 6.01171H8.00629Z" /><path fill="url(#prefix__paint0_linear_2161_881)" d="M21.0003 10.0435C21.0003 10.9079 20.2996 11.6087 19.4351 11.6087C19.1175 11.6087 18.822 11.5142 18.5752 11.3516C18.3285 11.1891 18.1304 10.9585 18.0078 10.6867L16.8744 8.17547C16.8437 8.10754 16.7755 8.06019 16.696 8.06019C16.6166 8.06019 16.5483 8.10762 16.5177 8.17563L15.3843 10.6867C15.1389 11.2304 14.5921 11.6087 13.9569 11.6087C13.0925 11.6087 12.3917 10.9079 12.3917 10.0435C12.3917 9.7259 12.4863 9.43038 12.6488 9.18363C12.8114 8.93687 13.0419 8.73887 13.3137 8.61616L15.825 7.48278C15.8929 7.4521 15.9402 7.38378 15.9402 7.30435C15.9402 7.22491 15.8928 7.15659 15.8248 7.12599L13.3137 5.99262C12.77 5.74727 12.3916 5.20046 12.3916 4.56522C12.3916 3.70083 13.0924 3 13.9568 3C14.2745 3 14.57 3.09462 14.8167 3.25717C15.0635 3.41971 15.2615 3.65019 15.3842 3.92207L16.5176 6.4333C16.5483 6.50124 16.6166 6.5485 16.6959 6.5485C16.7753 6.5485 16.8438 6.50116 16.8744 6.43315L18.0078 3.92207C18.2531 3.37839 18.7999 3 19.4351 3C20.2996 3 21.0003 3.70083 21.0003 4.56522C21.0003 4.8828 20.9057 5.17831 20.7431 5.42515C20.5806 5.6719 20.3501 5.86998 20.0783 5.99262L17.5672 7.12599C17.4992 7.15659 17.4518 7.22491 17.4518 7.30435C17.4518 7.39357 17.5088 7.45641 17.5671 7.48278L20.0783 8.61616C20.6219 8.86151 21.0003 9.40831 21.0003 10.0435Z" /><path fill="url(#prefix__paint1_linear_2161_881)" d="M3.97834 12.7826C3.43803 12.7826 3.00008 13.2205 3.00008 13.7609C3.00008 14.3012 3.43803 14.7391 3.97834 14.7391H8.90259L3.7117 18.1226C3.28323 18.4019 3 18.8852 3 19.4348C3 20.2992 3.70075 21 4.56522 21C5.11477 21 5.5981 20.7167 5.87734 20.2883L9.26095 15.0975V20.0217C9.26095 20.562 9.6989 21 10.2392 21C10.7795 21 11.2175 20.562 11.2175 20.0217V12.7826H3.97834Z" /><path fill="url(#prefix__paint2_linear_2161_881)" d="M16.8909 12.3914C14.6217 12.3914 12.7822 14.2309 12.7822 16.5001V20.6087H16.8909C19.1601 20.6087 20.9996 18.7692 20.9996 16.5001C20.9996 14.2309 19.1601 12.3914 16.8909 12.3914Z" /><defs><linearGradient id="paint0_linear_2161_881" x1={21} x2={12.392} y1={3} y2={11.609} gradientUnits="userSpaceOnUse"><stop offset={0.297} stopColor="#4DE36E" /><stop offset={1} stopColor="#31AFA7" /></linearGradient><linearGradient id="paint1_linear_2161_881" x1={11.217} x2={3} y1={12.783} y2={21} gradientUnits="userSpaceOnUse"><stop offset={0.339} stopColor="#FF60D0" /><stop offset={1} stopColor="#A638FE" /></linearGradient><linearGradient id="paint2_linear_2161_881" x1={21} x2={12.782} y1={12.391} y2={20.609} gradientUnits="userSpaceOnUse"><stop offset={0.328} stopColor="#FBDB00" /><stop offset={1} stopColor="#FF9959" /></linearGradient></defs>
		</svg>
	);
};

LogoMarketplaceColor.iconName = "logo-marketplace--color";

export default LogoMarketplaceColor;