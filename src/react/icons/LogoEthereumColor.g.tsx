import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoEthereumColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#C8B2F5" fillRule="evenodd" d="m19.134 13.416-7.135 9.461v-5.312z" clipRule="evenodd" />
			<path
				fill="#3441C0"
				d="M11.96 22.994c.05.016.105 0 .137-.043l7.135-9.462a.123.123 0 0 0-.16-.18l-7.134 4.15a.12.12 0 0 0-.062.106v5.312c0 .053.035.1.085.117m.163-5.358 6.545-3.807-6.545 8.682z"
			/>
			<path fill="#EECBC0" fillRule="evenodd" d="M4.866 13.416 12 22.877v-5.312z" clipRule="evenodd" />
			<path
				fill="#3441C0"
				d="M12.039 22.994a.12.12 0 0 1-.137-.043L4.768 13.49a.123.123 0 0 1 .16-.18l7.134 4.15a.12.12 0 0 1 .061.106v5.312c0 .053-.034.1-.084.117m-.162-5.358L5.332 13.83l6.545 8.682z"
			/>
			<path fill="#87A9F0" fillRule="evenodd" d="M4.865 12.319 12 9.146v7.233z" clipRule="evenodd" />
			<path
				fill="#3441C0"
				d="M12.067 9.044a.12.12 0 0 0-.117-.01l-7.135 3.173a.123.123 0 0 0-.011.22l7.135 4.06c.038.02.085.02.123-.002a.12.12 0 0 0 .061-.107V9.147l-.004-.03a.12.12 0 0 0-.052-.072m-.19 7.123-6.74-3.835 6.74-2.997z"
			/>
			<path fill="#CAB3F5" fillRule="evenodd" d="m19.135 12.319-7.136-3.173v7.233z" clipRule="evenodd" />
			<path
				fill="#3441C0"
				d="M11.932 9.044a.12.12 0 0 1 .117-.01l7.136 3.173a.123.123 0 0 1 .01.22l-7.135 4.06a.124.124 0 0 1-.184-.108V9.145l.004-.03a.12.12 0 0 1 .052-.072m.19 7.123 6.74-3.835-6.74-2.997z"
			/>
			<path fill="#EECBC0" fillRule="evenodd" d="m4.866 12.319 7.135-11.196v8.023z" clipRule="evenodd" />
			<path
				fill="#3441C0"
				d="M12.035 1.005a.12.12 0 0 0-.138.052L4.762 12.253a.123.123 0 0 0 .153.178l7.135-3.172a.12.12 0 0 0 .073-.113V1.123a.124.124 0 0 0-.088-.118m-.158 8.061L5.19 12.041l6.688-10.496z"
			/>
			<path fill="#B8FBF6" fillRule="evenodd" d="M19.134 12.319 12 1.123v8.023z" clipRule="evenodd" />
			<path
				fill="#3441C0"
				d="M11.966 1.005a.12.12 0 0 1 .138.052l7.134 11.196a.123.123 0 0 1-.153.178L11.95 9.259a.12.12 0 0 1-.073-.113V1.123c0-.054.037-.103.089-.118m.157 8.061 6.689 2.975-6.689-10.496z"
			/>
		</svg>
	);
};

IconLogoEthereumColor.iconName = "logo-ethereum--color";

export default IconLogoEthereumColor;
