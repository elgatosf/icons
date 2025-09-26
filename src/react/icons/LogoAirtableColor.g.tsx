import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAirtableColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#FCB400"
				d="M10.931 3.846 3.474 6.93a.5.5 0 0 0 .007.926l7.488 2.97c.658.26 1.39.26 2.049 0l7.488-2.97a.5.5 0 0 0 .006-.926l-7.456-3.085a2.78 2.78 0 0 0-2.125 0"
			/>
			<path
				fill="#18BFFF"
				d="M12.658 12.448v7.418a.5.5 0 0 0 .684.464l8.344-3.239a.5.5 0 0 0 .315-.464V9.209a.5.5 0 0 0-.684-.464l-8.343 3.238a.5.5 0 0 0-.316.465"
			/>
			<path
				fill="#F82B60"
				d="m10.709 12.83-2.476 1.196-.252.122-5.227 2.504c-.331.16-.754-.081-.754-.45V9.24c0-.133.068-.248.16-.334a.6.6 0 0 1 .126-.095.53.53 0 0 1 .455-.035l7.926 3.14c.403.16.435.725.042.915"
			/>
			<path
				fill="#000"
				fillOpacity={0.25}
				d="m10.71 12.83-2.477 1.196-6.073-5.12a.6.6 0 0 1 .127-.095.53.53 0 0 1 .454-.035l7.927 3.14c.403.16.434.725.041.915"
			/>
		</svg>
	);
};

IconLogoAirtableColor.iconName = "logo-airtable--color";

export default IconLogoAirtableColor;
