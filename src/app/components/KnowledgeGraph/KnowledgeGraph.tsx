import ForceGraph2D from 'react-force-graph-2d';
import { cosmicGraphData } from '../../data/graphData';
import { useGlobalState } from '../../../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const KnowledgeGraph = () => {
  const { setActiveStarId } = useGlobalState();
  const navigate = useNavigate();
  const [hoverNode, setHoverNode] = useState<any>(null);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <ForceGraph2D
        graphData={cosmicGraphData}
        nodeLabel={(node) => (node as any).name || (node.id as string)}
        onNodeHover={(node) => setHoverNode(node)}
        onNodeClick={(node) => {
          const id = node.id as string;
          setActiveStarId(id);
          navigate(`/journal#${id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
        }}
        backgroundColor="#000000"
        linkColor={() => '#333333'}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, 12, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = (node as any).name || (node.id as string);
          const fontSize = 14 / globalScale;
          const isHovered = hoverNode?.id === node.id;
          const radius = isHovered ? 6 / globalScale : 4 / globalScale;
          const glowColor = isHovered ? 'rgba(129, 140, 248, 0.75)' : '#fff';

          ctx.save();
          // Glow when hovered
          if (isHovered) {
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = 24;
          }

          // Draw the Star (The Node)
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = isHovered ? '#96CDFB' : '#fff';
          ctx.fill();
          ctx.restore();

          // Draw the Label
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.fillStyle = isHovered ? '#96CDFB' : 'rgba(255, 255, 255, 0.7)';
          ctx.fillText(label, node.x!, node.y! + (12 / globalScale));
        }}
      />
    </div>
  );
};