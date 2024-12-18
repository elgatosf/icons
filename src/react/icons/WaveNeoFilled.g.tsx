import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WaveNeoFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7 6.5C7 4.01472 9.01472 2 11.5 2H12.5C14.9853 2 17 4.01472 17 6.5V11.5H12.75V10.75C12.75 10.3358 12.4142 10 12 10C11.5858 10 11.25 10.3358 11.25 10.75V11.5H7V6.5Z" /><path d="M7 13V14H3.25C2.83579 14 2.5 14.3358 2.5 14.75C2.5 15.1642 2.83579 15.5 3.25 15.5H4C4 16.7816 4.32844 18.0419 4.95397 19.1605C5.57951 20.2792 6.48127 21.2188 7.57321 21.8899C7.92611 22.1067 8.388 21.9965 8.60487 21.6436C8.82174 21.2906 8.71147 20.8288 8.35857 20.6119C7.48502 20.0751 6.76361 19.3233 6.26318 18.4284C5.76275 17.5335 5.5 16.5253 5.5 15.5H7C7 17.9853 9.01472 20 11.5 20H12.5C14.9853 20 17 17.9853 17 15.5V13H12.75V15.25C12.75 15.6642 12.4142 16 12 16C11.5858 16 11.25 15.6642 11.25 15.25V13H7Z" />
		</svg>
	);
};

WaveNeoFilled.iconName = "wave-neo--filled";

export default WaveNeoFilled;