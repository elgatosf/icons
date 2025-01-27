import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSnapchatSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.911 11.462c.12-.367.111-.766-.03-1.133-.247-.65-.858-1.05-1.602-1.05a2.2 2.2 0 0 0-.53.064l-.062.015c.005-.444-.005-.912-.044-1.375-.138-1.622-.71-2.47-1.301-3.145a5.2 5.2 0 0 0-1.321-1.064C14.124 3.26 13.103 3 11.995 3c-1.11 0-2.125.261-3.022.774-.497.28-.941.64-1.32 1.064-.592.676-1.159 1.528-1.302 3.145-.04.463-.05.931-.044 1.375l-.123-.03a2 2 0 0 0-.464-.049c-.744 0-1.355.404-1.601 1.05-.178.458-.148.966.083 1.4.163.31.424.586.794.847q.132.091.38.252l.068.044c.104.07.257.168.41.266a.4.4 0 0 1 .133.133c.03.064.034.133-.015.262a4 4 0 0 1-.355.626c-.478.7-1.168 1.296-2.045 1.774q-.105.055-.209.106c-.393.198-.769.386-.945.86-.153.419-.054.892.335 1.296.143.148.31.276.493.375q.571.312 1.208.483.131.035.241.108c.074.064.105.145.143.247.035.094.077.207.168.34.093.142.217.266.355.364.393.272.834.29 1.3.31h.02c.43.016.912.035 1.47.218.23.074.467.221.743.394.666.41 1.573.966 3.096.966q.414 0 .771-.051a6.5 6.5 0 0 1-.789-1.029c-1.189-.008-1.868-.426-2.486-.806-.32-.197-.625-.384-.976-.5-.696-.23-1.304-.254-1.76-.272-.351-.013-.612-.023-.754-.122-.12-.083-.14-.235-.161-.396-.026-.19-.053-.395-.248-.52-.194-.126-.413-.184-.671-.253a4.6 4.6 0 0 1-1.128-.428c-.527-.29-.226-.468-.054-.552 2.987-1.444 3.465-3.676 3.485-3.844l.003-.024c.023-.19.042-.344-.17-.538-.15-.14-.667-.473-1.051-.721-.16-.103-.296-.191-.374-.245-.434-.306-.626-.606-.483-.98.098-.257.34-.356.591-.356q.118.001.237.025c.29.063.574.175.812.268.155.06.29.114.395.141a.3.3 0 0 0 .099.015c.143 0 .192-.074.182-.237l-.009-.152c-.032-.552-.087-1.47-.01-2.337.113-1.306.532-1.956 1.035-2.528.241-.276 1.37-1.469 3.533-1.469 2.164 0 3.293 1.188 3.534 1.464.503.572.922 1.222 1.035 2.528.08.912.016 1.883-.02 2.422l-.004.067c-.01.173.039.237.182.237a.3.3 0 0 0 .098-.015c.11-.026.252-.082.414-.146.235-.093.512-.202.794-.263a1 1 0 0 1 .237-.024c.251 0 .492.098.591.354a.6.6 0 0 1 .012.434q.532.116 1.029.315" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.5-7.5a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.621l-3.147 3.146a.5.5 0 1 0 .707.708L19 16.707v1.621a.5.5 0 1 0 1 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoSnapchatSet.iconName = "logo-snapchat-set";

export default IconLogoSnapchatSet;
