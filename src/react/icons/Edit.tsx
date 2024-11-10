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
const IconEdit = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M5.269 20.709c-.904.258-1.356.387-1.665.271a1 1 0 0 1-.584-.584c-.116-.31.013-.761.271-1.666l.981-3.432c.085-.297.127-.446.191-.585q.085-.185.205-.349c.09-.123.2-.232.418-.45L15.238 3.762c.792-.792 1.188-1.188 1.644-1.336.402-.13.834-.13 1.236 0 .456.148.852.544 1.644 1.336l.474.475c.793.792 1.189 1.188 1.337 1.645.13.402.13.835 0 1.236-.148.457-.544.853-1.337 1.646l-10.15 10.15c-.218.218-.327.327-.45.418a2 2 0 0 1-.35.205c-.138.064-.286.106-.583.19zm.445-5a12 12 0 0 1 .112-.37.5.5 0 0 1 .051-.087c-.003.004.003-.005.044-.049.047-.05.11-.113.226-.228L14.53 6.59l2.88 2.88-8.383 8.383a12 12 0 0 1-.229.225c-.043.04-.053.047-.049.044a.5.5 0 0 1-.087.051c.005-.002-.005.004-.062.022-.065.02-.151.046-.308.09l-3.607 1.03 1.03-3.605Zm12.756-7.3.706-.706c.414-.414.66-.661.827-.859.102-.12.137-.18.146-.196a.5.5 0 0 0 0-.296 1.3 1.3 0 0 0-.146-.196c-.168-.198-.413-.445-.827-.858l-.474-.475c-.414-.413-.66-.659-.858-.826a1.3 1.3 0 0 0-.196-.146.5.5 0 0 0-.296 0 1.3 1.3 0 0 0-.196.146c-.197.167-.444.413-.858.826l-.707.707zm-1.116-4.56h.003zm.289 0h.003zm2.507 2.505.001.003v-.003Zm.001.29v.002-.003Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconEdit;
