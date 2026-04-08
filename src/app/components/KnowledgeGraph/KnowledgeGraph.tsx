//KnowledgeGraph.tsx
import ForceGraph2D from 'react-force-graph-2d';
import { cosmicGraphData } from '../../data/graphData';
import { logs } from '../../../content/logs/logs';
import { useGlobalState } from '../../../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export const KnowledgeGraph = () => {
  const { setActiveStarId } = useGlobalState();
  const navigate = useNavigate();
  const [hoverNode, setHoverNode] = useState<any>(null);
  const fgRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      fgRef.current?.zoomToFit(400);
    }, 100);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={cosmicGraphData}
        nodeLabel={(node) => (node as any).name || (node.id as string)}
        onNodeHover={(node) => setHoverNode(node)}
        onNodeClick={(node: any) => {
          const id = node.id as string;
          setActiveStarId(id);
          const project = logs.find((p) => p.slug === id);
          if (project) {
            navigate(`/journal/${project.slug}`);
          } else {
            navigate('/journal');
          }
        }}
        backgroundColor="#000000"
        linkColor={() => '#333333'}
        nodePointerAreaPaint={(node, color, ctx, globalScale) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, 12 / globalScale, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = (node as any).name || (node.id as string);
          const fontSize = 14 / globalScale;
          const isHovered = hoverNode?.id === node.id;
          const radius = isHovered ? 6 / globalScale : 4 / globalScale;
          const glowColor = isHovered ? 'rgba(129, 140, 248, 0.75)' : '#fff';
          ctx.save();
          if (isHovered) {
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = 24;
          }
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = isHovered ? '#96CDFB' : '#fff';
          ctx.fill();
          ctx.restore();
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.fillStyle = isHovered ? '#96CDFB' : 'rgba(255, 255, 255, 0.7)';
          ctx.fillText(label, node.x!, node.y! + (12 / globalScale));
        }}
      />
    </div>
  );
};

export default KnowledgeGraph;