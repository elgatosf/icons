import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WaveNeo = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7 6.5C7 4.01472 9.01472 2 11.5 2H12.5C14.9853 2 17 4.01472 17 6.5V15.5C17 17.9853 14.9853 20 12.5 20H11.5C9.01472 20 7 17.9853 7 15.5H5.5C5.5 16.5253 5.76275 17.5335 6.26318 18.4284C6.76361 19.3233 7.48502 20.0751 8.35857 20.6119C8.71147 20.8288 8.82174 21.2906 8.60487 21.6436C8.388 21.9965 7.92611 22.1067 7.57321 21.8899C6.48127 21.2188 5.57951 20.2792 4.95397 19.1605C4.32844 18.0419 4 16.7816 4 15.5H3.25C2.83579 15.5 2.5 15.1642 2.5 14.75C2.5 14.3358 2.83579 14 3.25 14H7V6.5ZM12.5 3.5H11.5C9.84315 3.5 8.5 4.84315 8.5 6.5V11.5H11.25V10.75C11.25 10.3358 11.5858 10 12 10C12.4142 10 12.75 10.3358 12.75 10.75V11.5H15.5V6.5C15.5 4.84315 14.1569 3.5 12.5 3.5ZM11.25 13V15.25C11.25 15.6642 11.5858 16 12 16C12.4142 16 12.75 15.6642 12.75 15.25V13H15.5V15.5C15.5 17.1569 14.1569 18.5 12.5 18.5H11.5C9.84315 18.5 8.5 17.1569 8.5 15.5V13H11.25Z" clipRule="evenodd" />
		</svg>
	);
};

WaveNeo.iconName = "wave-neo";

export default WaveNeo;