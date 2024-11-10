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
const IconLogoScufColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						fill="#FF8F1C"
						d="m2.054 21.999 1.342-4.9A9.95 9.95 0 0 1 2 12a10.003 10.003 0 0 1 8.957-9.949v2.107a7.91 7.91 0 0 0-6.87 7.84 7.914 7.914 0 0 0 6.87 7.84v2.106a9.9 9.9 0 0 1-3.972-1.296zM17.948 17.211a7.9 7.9 0 0 1-4.907 2.63v2.104a10 10 0 0 0 0-19.894v2.11A7.91 7.91 0 0 1 19.909 12a7.9 7.9 0 0 1-1.961 5.21"
					/>
					<path
						fill="#FF8F1C"
						d="M10.446 16.687q.402.125.82.171.387.04.627.04c.497 0 .993-.056 1.477-.166.468-.1.914-.284 1.317-.542.39-.25.714-.593.943-.997.255-.474.38-1.007.36-1.544a2.6 2.6 0 0 0-.21-1.102 2.25 2.25 0 0 0-.566-.764c-.24-.21-.51-.381-.801-.51a8 8 0 0 0-.918-.343q-.474-.132-.926-.244a9 9 0 0 1-.814-.236 2.4 2.4 0 0 1-.59-.29.53.53 0 0 1-.24-.416.5.5 0 0 1 .1-.324.63.63 0 0 1 .247-.193q.156-.067.323-.091.153-.026.309-.027.214 0 .422.053c.14.035.272.098.386.186a.73.73 0 0 1 .322.752h2.583c.002-.5-.112-.995-.332-1.445a2.7 2.7 0 0 0-.82-.952 3.3 3.3 0 0 0-1.167-.52 6 6 0 0 0-1.377-.157 5 5 0 0 0-1.33.177c-.414.11-.802.3-1.143.56a2.9 2.9 0 0 0-.798.971 3 3 0 0 0-.306 1.405c-.016.407.078.81.274 1.168.177.298.416.555.7.752.299.205.625.366.97.477q.544.177 1.064.335.57.172.945.296.3.097.582.238a.8.8 0 0 1 .297.237c.061.092.093.2.089.311.006.151-.032.3-.112.429a.85.85 0 0 1-.287.266q-.173.1-.371.133-.18.03-.361.034a2.4 2.4 0 0 1-.77-.133.84.84 0 0 1-.532-.554c-.07-.2-.104-.41-.1-.621H8a3.4 3.4 0 0 0 .223 1.294c.136.338.329.65.57.924.223.247.488.452.783.606a5 5 0 0 0 .869.356"
					/>
				</svg>
			);
	}
};
export default IconLogoScufColor;
