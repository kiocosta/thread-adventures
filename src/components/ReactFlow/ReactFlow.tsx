import ReactFlowRenderer, { Background, Controls, MiniMap } from 'react-flow-renderer';
import { ReactFlowStyles } from '../../styles/ReactFlow';
import { RootNode } from '../RootNode/RootNode';

export default function ReactFlow() {
  const elements = [
    {
      id: '1',
      type: 'root',
      data: { 
        text: 'beginning',
      },
      position: { x: 100, y: 250 },
    }
  ];

  return (
      <ReactFlowRenderer nodeTypes={{ root: RootNode }} style={{ background: '#F3F5F6' }} elements={elements}>
        <Background size={0.5} style={ReactFlowStyles}/>
        <Controls />
        <MiniMap />
      </ReactFlowRenderer>
  )
}