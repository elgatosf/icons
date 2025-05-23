import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVoicemodColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#42FDFC"
				fillRule="evenodd"
				d="m16.589 8.023 7.41 5.302h-2.742l-2.85-2.04a.264.264 0 0 0-.42.218v4.121a.122.122 0 0 1-.193.1l-6.205-4.438a.264.264 0 0 0-.419.217l-.002 2.646h-1.59V8.123c.001-.046.027-.088.067-.109a.12.12 0 0 1 .127.009l6.204 4.439a.264.264 0 0 0 .42-.217V8.123a.123.123 0 0 1 .193-.1m-9.814 3.61V8h1.593v7.624a.123.123 0 0 1-.206.09L0 8h2.275l4.052 3.827a.265.265 0 0 0 .448-.194"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoVoicemodColor.iconName = "logo-voicemod--color";

export default IconLogoVoicemodColor;
