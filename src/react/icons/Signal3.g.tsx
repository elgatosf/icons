import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignal3 = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M3.75 16C4.16413 16 4.49987 16.3359 4.5 16.75V20.25C4.49982 20.6641 4.1641 21 3.75 21C3.3359 21 3.00018 20.6641 3 20.25V16.75C3.00013 16.3359 3.33587 16 3.75 16Z" />
					<path d="M9.25 11.666C9.66402 11.666 9.99969 12.0021 10 12.416V20.25C9.99982 20.6641 9.6641 21 9.25 21C8.8359 21 8.50018 20.6641 8.5 20.25V12.416C8.50031 12.0021 8.83598 11.666 9.25 11.666Z" />
					<path d="M14.75 7.33301C15.1641 7.33301 15.4999 7.66891 15.5 8.08301V20.25C15.4998 20.6641 15.1641 21 14.75 21C14.3359 21 14.0002 20.6641 14 20.25V8.08301C14.0001 7.66891 14.3359 7.33301 14.75 7.33301Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M3.5 13C3.77606 13 3.99987 13.224 4 13.5V16.5C3.99985 16.776 3.77605 17 3.5 17C3.22395 17 3.00015 16.776 3 16.5V13.5C3.00013 13.224 3.22394 13 3.5 13Z" />
					<path d="M7.83301 9.66602C8.10897 9.66602 8.33271 9.89013 8.33301 10.166V16.5C8.33286 16.776 8.10906 17 7.83301 17C7.55715 16.9998 7.33316 16.7759 7.33301 16.5V10.166C7.33331 9.89026 7.55724 9.66623 7.83301 9.66602Z" />
					<path d="M12.167 6.33301C12.4429 6.33315 12.6669 6.55707 12.667 6.83301V16.5C12.6668 16.7759 12.4429 16.9999 12.167 17C11.8909 17 11.6671 16.776 11.667 16.5V6.83301C11.6671 6.55698 11.8909 6.33301 12.167 6.33301Z" />
				</svg>
			);
	}
};

IconSignal3.iconName = "signal3";

export default IconSignal3;
