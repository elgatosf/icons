import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoTelegram = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3.3749 10.8479C8.74359 8.50884 12.3236 6.96679 14.1148 6.22175C19.2292 4.0945 20.2919 3.72498 20.9846 3.71278C21.1369 3.71009 21.4776 3.74785 21.6982 3.92689C21.8845 4.07807 21.9358 4.28229 21.9603 4.42562C21.9848 4.56896 22.0154 4.89548 21.9911 5.15061C21.714 8.06265 20.5147 15.1294 19.9046 18.3909C19.6465 19.771 19.1382 20.2337 18.6461 20.279C17.5766 20.3774 16.7645 19.5722 15.7287 18.8932C14.1078 17.8307 13.1921 17.1693 11.6188 16.1325C9.80053 14.9343 10.9792 14.2758 12.0154 13.1995C12.2866 12.9179 16.9987 8.63185 17.0899 8.24305C17.1013 8.19442 17.1119 8.01316 17.0042 7.91745C16.8965 7.82174 16.7376 7.85447 16.6229 7.8805C16.4604 7.9174 13.871 9.62886 8.85486 13.0149C8.11988 13.5196 7.45416 13.7655 6.8577 13.7526C6.20015 13.7384 4.93528 13.3808 3.99498 13.0752C2.84166 12.7003 1.92503 12.5021 2.00485 11.8654C2.04642 11.5337 2.5031 11.1946 3.3749 10.8479Z" clipRule="evenodd" />
		</svg>
	);
};

LogoTelegram.iconName = "logo-telegram";

export default LogoTelegram;