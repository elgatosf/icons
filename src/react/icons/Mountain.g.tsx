import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Mountain = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.7066 4.79255C10.9267 3.51642 9.07331 3.51642 8.29345 4.79255L0.859563 16.9571C0.0451312 18.2898 1.00427 20 2.56613 20H10.5213L10.5324 20H21.4676C23.0222 20 23.9824 18.3041 23.1826 16.971L17.715 7.85833C16.9382 6.56365 15.0618 6.56365 14.285 7.85833L13.9358 8.44034L11.7066 4.79255ZM6.13709 11.1977L2.13949 17.7393C1.93588 18.0724 2.17566 18.5 2.56613 18.5H17.4339C17.8244 18.5 18.0641 18.0724 17.8605 17.7393L13.8629 11.1977L12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L10 11.0607L8.53034 12.5303C8.23745 12.8232 7.76258 12.8232 7.46968 12.5303L6.13709 11.1977ZM8.00001 10.9393L6.94173 9.88105L9.57337 5.57472C9.76834 5.25569 10.2317 5.25569 10.4267 5.57472L13.0583 9.88105L12 10.9393L10.5303 9.46966C10.2374 9.17677 9.76258 9.17677 9.46968 9.46966L8.00001 10.9393ZM19.1405 16.9571L14.8184 9.88471L15.5712 8.63007C15.7654 8.3064 16.2345 8.3064 16.4287 8.63007L21.8963 17.7428C22.0963 18.076 21.8562 18.5 21.4676 18.5H19.3717C19.5015 18.0056 19.4447 17.455 19.1405 16.9571Z" clipRule="evenodd" />
		</svg>
	);
};

Mountain.iconName = "mountain";

export default Mountain;