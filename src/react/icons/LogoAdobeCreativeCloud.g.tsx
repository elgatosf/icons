import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoAdobeCreativeCloud = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M5.79216 12.8153C5.79216 14.8537 7.43831 16.5076 9.47677 16.5076H11.4537C11.4537 16.5076 10.246 15.7768 9.81523 15.1768V15.1691H9.51523C8.21523 15.1691 7.11523 14.0768 7.11523 12.7845C7.11523 12.223 7.31523 11.6768 7.68446 11.2537C8.53062 10.2691 10.0152 10.1614 10.9998 11.0076L12.5075 12.5614C12.7614 12.823 13.1768 12.8307 13.4383 12.5768C13.6998 12.323 13.7075 11.9076 13.4537 11.646L11.9229 10.0768L11.9075 10.0614C11.2383 9.46142 10.3614 9.13065 9.46139 9.13065C7.43062 9.14604 5.79216 10.7922 5.79216 12.8153Z" /><path d="M13.8768 16.5383C15.0691 16.5307 16.2075 16.046 17.0306 15.1845C17.8691 14.3307 18.3306 13.1768 18.3306 11.9845C18.3229 9.51527 16.3306 7.51527 13.8614 7.51527C12.7229 7.51527 11.6922 7.89219 10.8614 8.66911H10.8537C10.8691 8.67424 10.8981 8.68621 10.9272 8.69817C10.9417 8.70416 10.9563 8.71014 10.9691 8.71527C11.1306 8.7845 11.4075 8.91527 11.4998 8.96911C11.5922 9.01527 11.6998 9.07681 11.7998 9.13834C11.9614 9.23834 12.1075 9.33065 12.1152 9.33834C12.6537 8.96142 13.1998 8.83065 13.8614 8.83065C15.5998 8.83834 17.0152 10.246 17.0152 11.9845C17.0152 12.8307 16.6845 13.646 16.0922 14.2537C15.5152 14.8691 14.7152 15.2153 13.8768 15.2153C13.0922 15.2153 12.2768 14.8537 11.6383 14.2153L9.63062 12.2076C9.50754 12.0768 9.33831 12.0076 9.16139 12.0076C8.98446 12.0076 8.82293 12.0691 8.69985 12.1922C8.446 12.446 8.43831 12.8614 8.69216 13.123L10.7075 15.1537C11.5922 16.0307 12.746 16.5383 13.8768 16.5383Z" /><path fillRule="evenodd" d="M17.9609 3H6.03779C4.23009 3 2.76855 4.46154 2.76855 6.26923V17.7308C2.76855 19.5385 4.23009 21 6.03779 21H17.9609C19.7686 21 21.2301 19.5385 21.2301 17.7308V6.26923C21.2301 4.46154 19.7686 3 17.9609 3ZM13.7999 6.7845C15.2306 6.77681 16.6075 7.36911 17.5845 8.42296C18.4922 9.39988 18.9998 10.6768 19.0152 12.0076C19.0152 14.8999 16.6768 17.2614 13.7999 17.2614H9.56139C8.346 17.2614 7.19216 16.7614 6.36139 15.8768C5.56908 15.0307 5.12293 13.923 5.11523 12.7691C5.11523 10.6307 6.81523 8.32296 9.56139 8.32296C9.72293 8.32296 9.89216 8.33834 10.0614 8.35373C10.9768 7.3845 12.3998 6.7845 13.7999 6.7845Z" clipRule="evenodd" />
		</svg>
	);
};

LogoAdobeCreativeCloud.iconName = "logo-adobe-creative-cloud";

export default LogoAdobeCreativeCloud;