import * as React from "react";
import { SVGProps } from "react";

export const GasOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.54941 8.78306C7.64989 8.63221 7.81889 8.54175 8.00008 8.54175C8.18127 8.54175 8.35027 8.63221 8.45075 8.78306C8.53931 8.91577 9.31552 10.1064 9.31552 11.018C9.31552 11.7433 8.72564 12.3334 8.00008 12.3334C7.27452 12.3334 6.68464 11.7433 6.68464 11.018C6.68464 10.1064 7.46085 8.91577 7.54941 8.78306Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7078 13.4167H13.9583C14.2576 13.4167 14.5 13.6593 14.5 13.9583C14.5 14.2576 14.2576 14.5 13.9583 14.5H2.04167C1.74267 14.5 1.5 14.2576 1.5 13.9583C1.5 13.6593 1.74267 13.4167 2.04167 13.4167H5.29221C4.53171 12.6971 4.05369 11.6812 4.05369 10.5537C4.05369 7.02554 7.4066 1.95527 7.54933 1.74131C7.64981 1.59046 7.81881 1.5 8 1.5C8.18119 1.5 8.35019 1.59046 8.45067 1.74131C8.59367 1.95527 11.9466 7.02554 11.9466 10.5537C11.9466 11.6812 11.4686 12.6971 10.7078 13.4167ZM8.00027 3.06108C7.09406 4.55988 5.13702 8.08233 5.13702 10.5537C5.13702 12.1324 6.42131 13.4167 8 13.4167C9.57869 13.4167 10.8632 12.1324 10.8632 10.5537C10.8632 8.07935 8.90675 4.55906 8.00027 3.06108Z"
      fill="black"
    />
  </svg>
);
