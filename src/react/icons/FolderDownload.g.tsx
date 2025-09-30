import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderDownload = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.96967 13.2197C9.26256 12.9268 9.73744 12.9268 10.0303 13.2197L11.25 14.4393V9.75C11.25 9.33579 11.5858 9 12 9C12.4142 9 12.75 9.33579 12.75 9.75V14.4393L13.9697 13.2197C14.2626 12.9268 14.7374 12.9268 15.0303 13.2197C15.3232 13.5126 15.3232 13.9874 15.0303 14.2803L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L8.96967 14.2803C8.67678 13.9874 8.67678 13.5126 8.96967 13.2197Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 5C2 3.89543 2.89543 3 4 3H8.17157C8.70201 3 9.21071 3.21071 9.58579 3.58579L11.7071 5.70711C11.8946 5.89464 12.149 6 12.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V5ZM20.5 8V18C20.5 18.2762 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2762 3.5 18V5C3.5 4.72386 3.72386 4.5 4 4.5H8.17157C8.30418 4.5 8.43136 4.55268 8.52513 4.64645L10.6464 6.76777C11.1153 7.23661 11.7512 7.5 12.4142 7.5H20C20.2761 7.5 20.5 7.72386 20.5 8Z"
			/>
		</svg>
	);
};

IconFolderDownload.iconName = "folder-download";

export default IconFolderDownload;
