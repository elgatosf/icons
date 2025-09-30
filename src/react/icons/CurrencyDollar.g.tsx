import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCurrencyDollar = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.75 1.75C12.75 1.33579 12.4142 1 12 1C11.5858 1 11.25 1.33579 11.25 1.75V3.03339C8.16354 3.31236 5.99903 5.31201 5.98976 7.99C5.98976 11.118 8.71487 11.8615 11.25 12.4378V19.4533C7.96521 19.1182 6.98709 16.602 6.94976 16.49C6.80976 16.1 6.37976 15.9 5.98976 16.04C5.59976 16.18 5.39976 16.61 5.53976 17C5.59663 17.1611 6.88418 20.6101 11.25 20.9697V22.25C11.25 22.6642 11.5858 23 12 23C12.4142 23 12.75 22.6642 12.75 22.25V20.9656C15.785 20.6878 17.9898 18.7552 17.9898 16.25C17.9898 12.8216 15.2673 11.858 12.75 11.2555V4.53971C15.8783 4.87871 16.4765 7.27682 16.5094 7.40836L16.5098 7.41C16.5998 7.81 16.9998 8.06 17.3998 7.98C17.8098 7.89 18.0698 7.5 17.9798 7.09C17.6991 5.77071 16.2452 3.33959 12.75 3.03223V1.75ZM11.25 4.54085C9.03012 4.79113 7.48976 6.16736 7.48976 8C7.48976 9.86362 8.90565 10.3619 11.25 10.9108V4.54085ZM12.75 12.7909V19.4479C14.9311 19.2016 16.4898 17.9025 16.4898 16.24C16.4898 14.1232 15.1013 13.3949 12.75 12.7909Z"
			/>
		</svg>
	);
};

IconCurrencyDollar.iconName = "currency-dollar";

export default IconCurrencyDollar;
