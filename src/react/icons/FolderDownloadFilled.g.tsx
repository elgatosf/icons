import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderDownloadFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 3C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6H12.4142C12.149 6 11.8946 5.89464 11.7071 5.70711L9.58579 3.58579C9.21071 3.21071 8.70201 3 8.17157 3H4ZM8.96967 13.2197C9.26256 12.9268 9.73744 12.9268 10.0303 13.2197L11.25 14.4393V9.75C11.25 9.33579 11.5858 9 12 9C12.4142 9 12.75 9.33579 12.75 9.75V14.4393L13.9697 13.2197C14.2626 12.9268 14.7374 12.9268 15.0303 13.2197C15.3232 13.5126 15.3232 13.9874 15.0303 14.2803L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L8.96967 14.2803C8.67678 13.9874 8.67678 13.5126 8.96967 13.2197Z"
			/>
		</svg>
	);
};

IconFolderDownloadFilled.iconName = "folder-download--filled";

export default IconFolderDownloadFilled;
