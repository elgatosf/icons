/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoOriginColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#CC181E"
				d="M20.849 7.362a9.92 9.92 0 0 0-5.68-4.845 9.97 9.97 0 0 0-9.425 1.69c4.383-1.484 9.24.062 11.689 3.918 0 0 .37.557.535.886a6.74 6.74 0 0 1 .37 5.114 6.665 6.665 0 0 1-8.272 4.268c2.819 1.237 6.502 1.814 9.445.144.123-.082.309-.268.617-.7.659-.929 1.009-1.61 1.358-2.66a9.97 9.97 0 0 0-.637-7.815"
			/>
			<path
				fill="#CC181E"
				d="M6.094 15.094a6.63 6.63 0 0 1-.432-5.217 6.63 6.63 0 0 1 7.613-4.433c-2.736-.99-5.35-1.278-8.251-.144-.68.268-.844.371-1.482 1.402-.473.763-.72 1.196-1.029 2.124a10 10 0 0 0 .7 7.938 9.88 9.88 0 0 0 5.618 4.722c3.21 1.072 6.585.412 9.116-1.464-4.425 1.34-9.26-.371-11.565-4.413-.07-.113-.131-.226-.196-.345z"
			/>
			<path
				fill="#CC181E"
				d="M12.946 13.568a1.75 1.75 0 0 1-2.366-.742c-.453-.866-.124-1.938.74-2.371a1.75 1.75 0 0 1 2.367.742 1.755 1.755 0 0 1-.74 2.371"
			/>
		</svg>
	);
};

IconLogoOriginColor.iconName = "logo-origin--color";

export default IconLogoOriginColor;
