/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconLogoAfterEffectsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		// case 's':
		// case 'm':
		// case 'l':
		default:
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
						fill="#00005B"
						d="M6.039 3h11.923a3.267 3.267 0 0 1 3.27 3.27v11.46a3.267 3.267 0 0 1-3.27 3.27H6.039a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.04 3"
					/>
					<path
						fill="#99F"
						fillRule="evenodd"
						d="M7.323 13.77h2.861v-.04l.631 1.847c.015.054.07.092.123.085h1.608c.077 0 .1-.039.077-.123L9.815 7.692c-.008-.038-.046-.061-.1-.061H7.723c-.039.008-.07.046-.062.084q0 .257-.046.5c-.03.093-.054.162-.077.239l-2.477 7.1c-.023.092 0 .138.085.138h1.446c.07.008.13-.038.146-.107zm2.4-1.531H7.769c.115-.324.238-.685.338-1.077q.115-.36.222-.711l.132-.428c.108-.33.192-.661.262-.992h.015l.091.323.078.277c.062.223.131.446.208.684l.112.354.111.354c.07.23.139.454.208.662.069.2.13.392.177.554M14.715 13.077h2.439c.102 0 .201.008.297.016q.135.014.264.015.264 0 .446-.023l.116-.008q.093-.007.138-.008c.054 0 .1-.046.108-.1l.01-.115.02-.208c.008-.146.016-.307.016-.492 0-.315-.046-.63-.146-.938a2.8 2.8 0 0 0-.462-.877 2.1 2.1 0 0 0-.807-.616 2.8 2.8 0 0 0-1.193-.238c-.492 0-.923.061-1.284.238a2.8 2.8 0 0 0-.931.731c-.262.315-.454.67-.577 1.054q-.194.6-.192 1.223 0 .579.161 1.123.162.556.53 1.008c.262.315.593.569.97.73.4.177.892.27 1.477.27.37.007.73-.023 1.092-.093.27-.046.523-.123.77-.23a.2.2 0 0 0 .053-.054.4.4 0 0 0 .016-.092v-1.178c0-.076-.023-.092-.062-.061a3 3 0 0 1-.684.177c-.262.054-.531.077-.8.085a2.4 2.4 0 0 1-.985-.193 1.2 1.2 0 0 1-.562-.461 1.7 1.7 0 0 1-.238-.685m1.623-1.123h-1.623q.032-.288.17-.554c.2-.385.6-.607 1.022-.585a1.02 1.02 0 0 1 1.046.993v.077a.4.4 0 0 1-.176.061q-.14.01-.439.008"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoAfterEffectsColor;
