import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSiri = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M12 22a9.6 9.6 0 0 0 3.858-.784 10.2 10.2 0 0 0 3.191-2.167 10.2 10.2 0 0 0 2.167-3.191A9.6 9.6 0 0 0 22 12a9.6 9.6 0 0 0-.784-3.858 10.2 10.2 0 0 0-2.167-3.191 10.2 10.2 0 0 0-3.196-2.167A9.6 9.6 0 0 0 11.99 2a9.6 9.6 0 0 0-3.858.784 10.264 10.264 0 0 0-5.348 5.358A9.6 9.6 0 0 0 2 12q0 2.049.784 3.858a10.2 10.2 0 0 0 2.167 3.191 10.2 10.2 0 0 0 3.191 2.167A9.6 9.6 0 0 0 12 22m0-1.667q-1.44 0-2.73-.46a8.2 8.2 0 0 1-2.344-1.295 8.2 8.2 0 0 1-1.779-1.94q.353.185.77.288.416.104.877.103 1.353 0 2.53-.44a10.6 10.6 0 0 0 2.215-1.143q1.04-.702 1.951-1.475l-1.108-1.05a21 21 0 0 1-1.7 1.295q-.878.597-1.844.965a5.7 5.7 0 0 1-2.044.368q-1.5 0-2.431-.976Q3.43 13.599 3.43 12t.932-2.574 2.431-.975q1.128 0 2.142.52a10 10 0 0 1 1.966 1.338 37 37 0 0 1 1.882 1.74q.931.921 1.873 1.74a10 10 0 0 0 1.946 1.338 4.5 4.5 0 0 0 2.103.52q.255 0 .47-.059.216-.058.402-.157A8.256 8.256 0 0 1 12 20.333m-.01-16.666q1.343 0 2.564.397a8.28 8.28 0 0 1 4.024 2.828q.765.99 1.197 2.167a2 2 0 0 0-.456-.152 2.5 2.5 0 0 0-.525-.054q-1.02 0-1.975.54-.957.539-1.907 1.323l1.108 1.059q.921-.746 1.553-1.094.633-.348 1.221-.348.843 0 1.29.53.445.53.445 1.245 0 .804-.46 1.431-.462.627-1.363.628-.765 0-1.525-.417a8.7 8.7 0 0 1-1.549-1.113 50 50 0 0 1-1.661-1.539 75 75 0 0 0-1.544-1.441 16 16 0 0 0-1.687-1.333 9 9 0 0 0-1.867-.98 5.8 5.8 0 0 0-2.079-.373q-.471 0-.887.103a3.4 3.4 0 0 0-.77.289 8.2 8.2 0 0 1 1.775-1.941 8.1 8.1 0 0 1 5.078-1.755" />
		</svg>
	);
};

IconLogoSiri.iconName = "logo-siri";

export default IconLogoSiri;
