import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleMapsColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#1A73E8" d="M14.3367 1.36584C13.6051 1.13303 12.8069 1 11.9921 1C9.64739 1 7.53552 2.06425 6.12207 3.74376L9.74716 6.78685L14.3367 1.36584Z" /><path fill="#EA4335" d="M6.12209 3.74377C5.00796 5.07408 4.32617 6.80349 4.32617 8.66592C4.32617 10.1126 4.60886 11.2767 5.0911 12.3243L9.74718 6.78686L6.12209 3.74377Z" /><path fill="#4285F4" d="M12.0086 5.73924C13.6382 5.73924 14.9519 7.05292 14.9519 8.68255C14.9519 9.39759 14.6858 10.0627 14.2535 10.5782C14.2535 10.5782 16.5649 7.81785 18.8264 5.1406C17.8952 3.34468 16.2822 1.98111 14.3366 1.36584L9.74707 6.78686C10.2958 6.15496 11.094 5.73924 12.0086 5.73924Z" /><path fill="#FBBC04" d="M12.0084 11.6092C10.3788 11.6092 9.06512 10.2956 9.06512 8.66593C9.06512 7.95089 9.31455 7.28573 9.7469 6.78687L5.09082 12.3243C5.88901 14.0869 7.21932 15.517 8.58288 17.2963L14.2533 10.5616C13.7046 11.2101 12.9064 11.6092 12.0084 11.6092Z" /><path fill="#34A853" d="M14.1537 19.1588C16.7145 15.1512 19.6911 13.3387 19.6911 8.68258C19.6911 7.40215 19.3751 6.20487 18.8264 5.14062L8.58301 17.2963C9.01536 17.8617 9.46434 18.5102 9.89669 19.1754C11.4598 21.5866 11.0275 23.0167 12.0252 23.0167C13.0229 23.0167 12.5906 21.57 14.1537 19.1588Z" />
		</svg>
	);
};

LogoGoogleMapsColor.iconName = "logo-google-maps--color";

export default LogoGoogleMapsColor;