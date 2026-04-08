import { logs } from '../../content/logs/logs';

const groupMap: Record<string, number> = {
  "Mechanics": 1,
  "Metrics": 2,
  "Hardware": 3,
  "Software": 4,
};

export const cosmicGraphData = {
  nodes: logs.map((log) => ({
    id: log.slug,
    name: log.title,
    group: groupMap[log.type] ?? 1,
    val: 6,
  })),
  links: [
    { source: 'sketch-01', target: 'sketch-02' },
    { source: 'sketch-01', target: 'sketch-03' },
    { source: 'sketch-03', target: 'sketch-04' },
  ],
};