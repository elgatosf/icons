import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StarburstsFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.57 2.3587C16.9029 1.51455 18.0976 1.51455 18.4305 2.3587L19.3387 4.6615L21.6415 5.56972C22.4857 5.90264 22.4857 7.09732 21.6415 7.43024L19.3387 8.33846L18.4305 10.6413C18.0976 11.4854 16.9029 11.4854 16.57 10.6413L15.6617 8.33846L13.3589 7.43024C12.5148 7.09732 12.5148 5.90264 13.3589 5.56972L15.6617 4.6615L16.57 2.3587Z" /><path d="M16.57 13.3587C16.9029 12.5146 18.0976 12.5146 18.4305 13.3587L19.3387 15.6615L21.6415 16.5697C22.4857 16.9026 22.4857 18.0973 21.6415 18.4302L19.3387 19.3385L18.4305 21.6413C18.0976 22.4854 16.9029 22.4854 16.57 21.6413L15.6617 19.3385L13.3589 18.4302C12.5148 18.0973 12.5148 16.9026 13.3589 16.5697L15.6617 15.6615L16.57 13.3587Z" /><path d="M8.93049 6.35869C8.59756 5.51455 7.40289 5.51455 7.06996 6.35869L5.73748 9.73724L2.35894 11.0697C1.51479 11.4026 1.51479 12.5973 2.35894 12.9302L5.73748 14.2627L7.06996 17.6413C7.40289 18.4854 8.59756 18.4854 8.93049 17.6413L10.263 14.2627L13.6415 12.9302C14.4857 12.5973 14.4857 11.4026 13.6415 11.0697L10.263 9.73724L8.93049 6.35869Z" />
		</svg>
	);
};

StarburstsFilled.iconName = "starbursts--filled";

export default StarburstsFilled;