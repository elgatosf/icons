import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeMediaEncoder = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.078 11.815h-1.615q.034-.265.161-.507c.2-.385.6-.608 1.023-.585a1.02 1.02 0 0 1 1.046.992v.077a1 1 0 0 1-.177.016 7 7 0 0 1-.438.007" />
			<path
				fillRule="evenodd"
				d="M17.962 3H6.039a3.266 3.266 0 0 0-3.27 3.27v11.46A3.266 3.266 0 0 0 6.04 21h11.923a3.267 3.267 0 0 0 3.27-3.27V6.27A3.267 3.267 0 0 0 17.961 3m-12.5 4.608a.09.09 0 0 0-.092.077l-.415 7.923c-.008.046-.008.077.015.092a.3.3 0 0 0 .077.015H6.41c.061 0 .092-.03.092-.1a100 100 0 0 0 .08-2.327q.009-.404.02-.796l.018-.69q.009-.38.02-.748l.002-.096c.007-.418.014-.808.014-1.158v-.977h.023q.091.406.208.939.114.528.253 1.138c.093.4.193.823.3 1.254q.162.645.3 1.27c.093.414.185.814.277 1.191q.084.369.162.681l.077.32c.007.069.069.107.138.1H9.74a.13.13 0 0 0 .131-.1c.07-.285.154-.624.262-1q.159-.566.33-1.224c.116-.438.231-.877.354-1.323l.182-.692.157-.6a57 57 0 0 0 .461-1.939h.016c0 .131 0 .331-.008.6-.008.27-.008.585-.008.947 0 .337-.006.693-.013 1.08l-.002.112q-.012.644 0 1.346.005.351.008.696l.007.696c.008.462.008.9.008 1.323 0 .024.008.054.023.07l.014.004q.023.01.048.011h1.53q.044.002.077-.03c.016-.016.023-.047.016-.078L13.047 7.7v-.008a.096.096 0 0 0-.108-.077h-2.107a.096.096 0 0 0-.108.085c-.054.215-.123.485-.215.8l-.14.509q-.072.252-.145.522-.08.283-.158.565a60 60 0 0 1-.25.889q-.114.398-.223.784l-.039.139q-.129.45-.23.83-.115.428-.162.693h-.015a58 58 0 0 0-.154-.746q-.092-.45-.23-.993-.14-.542-.277-1.107c-.093-.377-.185-.754-.277-1.116a167 167 0 0 0-.454-1.777.12.12 0 0 0-.131-.084zm10 5.415h2.439q.148 0 .292-.004.14-.004.27-.004.263 0 .446-.023l.115-.008q.093-.006.139-.007c.053 0 .1-.046.107-.1q.006-.046.011-.116.007-.085.02-.207.014-.218.015-.492c0-.316-.046-.631-.146-.939a2.8 2.8 0 0 0-.461-.877 2.1 2.1 0 0 0-.808-.638 2.8 2.8 0 0 0-1.192-.239 3 3 0 0 0-1.285.27 2.8 2.8 0 0 0-.93.73q-.393.476-.578 1.054-.194.6-.192 1.223 0 .58.162 1.123.16.556.53 1.008c.262.315.593.57.97.73q.6.269 1.477.27c.369.008.73-.023 1.092-.092.284-.062.554-.147.808-.27a.2.2 0 0 0 .053-.053q.014-.047.016-.093v-1.177c0-.077-.023-.092-.062-.061-.23.1-.477.169-.723.215q-.393.07-.8.07c-.408 0-.73-.062-.985-.178a1.2 1.2 0 0 1-.561-.461c-.13-.2-.208-.423-.239-.654"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobeMediaEncoder.iconName = "logo-adobe-media-encoder";

export default IconLogoAdobeMediaEncoder;
