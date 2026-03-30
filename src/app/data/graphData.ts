// src/data/graphData.ts
export const cosmicGraphData = {
  nodes: [
    { id: 'Sketch #01', name: 'Core Mechanics Engine', group: 1, val: 10 },
    { id: 'Sketch #02', name: 'Torque Metrics', group: 2, val: 8 },
    { id: 'Sketch #03', name: 'NVIDIA Jetson', group: 2, val: 7 },
    { id: 'Sketch #04', name: 'Vite/React/TSX', group: 3, val: 6 },
  ],
  links: [
    { source: 'Sketch #01', target: 'Sketch #02' },
    { source: 'Sketch #01', target: 'Sketch #03' },
    { source: 'Sketch #03', target: 'Sketch #04' },
  ]
};