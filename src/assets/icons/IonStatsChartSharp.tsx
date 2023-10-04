import { SVGProps } from 'react';

export function IonStatsChartSharp(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M128 496H48V304h80Zm224 0h-80V208h80Zm112 0h-80V96h80Zm-224 0h-80V16h80Z"
            ></path>
        </svg>
    );
}
