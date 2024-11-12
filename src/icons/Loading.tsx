export const Loading = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{ shapeRendering: "auto", display: "block" }}
    width="1em"
    height="1em"
    className={className}
  >
    <title>loading</title>
    <g>
      <circle
        strokeLinecap="round"
        fill="none"
        strokeDasharray="50.26548245743669 50.26548245743669"
        stroke="currentColor"
        strokeWidth="8"
        r="32"
        cy="50"
        cx="50"
      >
        <animateTransform
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          type="rotate"
          attributeName="transform"
        />
      </circle>
    </g>
  </svg>
);
