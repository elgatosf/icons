import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMicrosoftCopilotColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="url(#prefix__paint0_radial_3603_1303)" d="M17.0711 3.6625C16.7817 2.67693 15.8773 2 14.8501 2H14.1744C13.0571 2 12.0992 2.79806 11.8976 3.89699L10.7402 10.2036L11.0274 9.22095C11.3159 8.23395 12.2209 7.55555 13.2493 7.55555H17.1762L18.8231 8.1971L20.4106 7.55555H19.9473C18.92 7.55555 18.0157 6.8786 17.7262 5.89305L17.0711 3.6625Z" /><path fill="url(#prefix__paint1_radial_3603_1303)" d="M7.16535 20.328C7.4516 21.3183 8.35825 22 9.38915 22H10.8243C12.0796 22 13.1061 20.9995 13.1383 19.7447L13.2947 13.6636L12.9677 14.7801C12.6789 15.7666 11.774 16.4445 10.7462 16.4445H6.7866L5.37495 15.6787L3.84668 16.4445H4.3023C5.33315 16.4445 6.2398 17.1261 6.52605 18.1165L7.16535 20.328Z" /><path fill="url(#prefix__paint2_linear_3603_1303)" d="M14.7496 2H6.73C4.43866 2 3.06386 5.0283 2.14733 8.0566C1.06148 11.6443 -0.359385 16.4426 3.75126 16.4426H7.2141C8.2489 16.4426 9.15735 15.7584 9.44175 14.7634C10.0438 12.6571 11.0989 8.98275 11.9277 6.1856C12.3488 4.76415 12.6996 3.54337 13.2381 2.78314C13.5399 2.35692 14.043 2 14.7496 2Z" /><path fill="url(#prefix__paint3_linear_3603_1303)" d="M14.7496 2H6.73C4.43866 2 3.06386 5.0283 2.14733 8.0566C1.06148 11.6443 -0.359385 16.4426 3.75126 16.4426H7.2141C8.2489 16.4426 9.15735 15.7584 9.44175 14.7634C10.0438 12.6571 11.0989 8.98275 11.9277 6.1856C12.3488 4.76415 12.6996 3.54337 13.2381 2.78314C13.5399 2.35692 14.043 2 14.7496 2Z" /><path fill="url(#prefix__paint4_radial_3603_1303)" d="M9.24902 22H17.2687C19.56 22 20.9348 18.9712 21.8514 15.9424C22.9372 12.3541 24.3581 7.55493 20.2474 7.55493H16.7847C15.7498 7.55493 14.8414 8.23923 14.557 9.23423C13.9549 11.3409 12.8998 15.016 12.071 17.8137C11.6498 19.2354 11.299 20.4564 10.7606 21.2168C10.4588 21.643 9.95567 22 9.24902 22Z" /><path fill="url(#prefix__paint5_linear_3603_1303)" d="M9.24902 22H17.2687C19.56 22 20.9348 18.9712 21.8514 15.9424C22.9372 12.3541 24.3581 7.55493 20.2474 7.55493H16.7847C15.7498 7.55493 14.8414 8.23923 14.557 9.23423C13.9549 11.3409 12.8998 15.016 12.071 17.8137C11.6498 19.2354 11.299 20.4564 10.7606 21.2168C10.4588 21.643 9.95567 22 9.24902 22Z" /><defs><radialGradient id="paint0_radial_3603_1303" cx={0} cy={0} r={1} gradientTransform="matrix(-5.48026 -6.69461 6.29506 -5.15318 19.003 10.257)" gradientUnits="userSpaceOnUse"><stop offset={0.096} stopColor="#00AEFF" /><stop offset={0.773} stopColor="#2253CE" /><stop offset={1} stopColor="#0736C4" /></radialGradient><radialGradient id="paint1_radial_3603_1303" cx={0} cy={0} r={1} gradientTransform="rotate(51.84 -14.1 13.925)scale(7.9956 7.75595)" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB657" /><stop offset={0.634} stopColor="#FF5F3D" /><stop offset={0.923} stopColor="#C02B3C" /></radialGradient><radialGradient id="paint4_radial_3603_1303" cx={0} cy={0} r={1} gradientTransform="rotate(109.274 8.15 10.401)scale(19.1937 22.9934)" gradientUnits="userSpaceOnUse"><stop offset={0.066} stopColor="#8C48FF" /><stop offset={0.5} stopColor="#F2598A" /><stop offset={0.896} stopColor="#FFB152" /></radialGradient><linearGradient id="paint2_linear_3603_1303" x1={6.25} x2={7.394} y1={3.75} y2={16.988} gradientUnits="userSpaceOnUse"><stop offset={0.156} stopColor="#0D91E1" /><stop offset={0.487} stopColor="#52B471" /><stop offset={0.652} stopColor="#98BD42" /><stop offset={0.937} stopColor="#FFC800" /></linearGradient><linearGradient id="paint3_linear_3603_1303" x1={7.25} x2={7.875} y1={2} y2={16.443} gradientUnits="userSpaceOnUse"><stop stopColor="#3DCBFF" /><stop offset={0.247} stopColor="#0588F7" stopOpacity={0} /></linearGradient><linearGradient id="paint5_linear_3603_1303" x1={21.293} x2={21.285} y1={6.673} y2={10.607} gradientUnits="userSpaceOnUse"><stop offset={0.058} stopColor="#F8ADFA" /><stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} /></linearGradient></defs>
		</svg>
	);
};

LogoMicrosoftCopilotColor.iconName = "logo-microsoft-copilot--color";

export default LogoMicrosoftCopilotColor;