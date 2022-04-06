import * as React from "react";

interface Props {
  height?: number;
  width?: number;
}

const SvgLoading = ({ height = 250, width = 250 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <rect x={48.5} y={29} rx={0} ry={0} width={3} height={4} fill="#00e2ff">
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.75s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(14.4 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.71875s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(28.8 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.6875s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(43.2 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.65625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(57.6 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(72 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.59375s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(86.4 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.5625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(100.8 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.53125s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(115.2 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.5s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(129.6 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.46875s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(144 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.4375s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(158.4 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.40625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(172.8 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.375s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(187.2 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.34375s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(201.6 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.3125s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(216 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.28125s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(230.4 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.25s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(244.8 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.21875s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(259.2 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.1875s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(273.6 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.15625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(288 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.125s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(302.4 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.09375s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(316.8 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.0625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(331.2 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="-0.03125s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={48.5}
      y={29}
      rx={0}
      ry={0}
      width={3}
      height={4}
      fill="#00e2ff"
      transform="rotate(345.6 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="0.78125s"
        begin="0s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

export default SvgLoading;
