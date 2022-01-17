import { Handle, Position } from 'react-flow-renderer';
import NodeTitle from '../NodeTitle/NodeTitle';

type TNodeProps = {
  data: {
    text: string;
    styles: React.CSSProperties;
  };
};

const rootNodeStyle: React.CSSProperties = {
  background: '#F9FAFB',
  border: '1px solid #4697CC',
  borderRadius: 5,
  width: 360,
  height: 160
};

export const RootNode = ({ data }: TNodeProps) => {
  return (
    <div style={rootNodeStyle}>
      <NodeTitle title='beginning'></NodeTitle>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ width: 8, height: 8, borderRadius: 100 }}
      />
    </div>
  );
};
