import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

import '@reactflow/node-resizer/dist/style.css';

const sourceHandleStyle: CSSProperties = {
  left: 0,
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)"
};

const tableStyle: CSSProperties = {
  border: "1px solid red",
  borderRadius: 4,
  paddingTop: 12
};
const tableNameStyle: CSSProperties = {
  borderBottom: "1px solid red",
  paddingLeft: 8,
  paddingRight: 8,
  paddingBottom: 12,
  fontWeight: 800
};
const columnNameStyle: CSSProperties = {
  borderBottom: "1px solid red",
  position: "relative",
  fontSize: 16,
  lineHeight: 1
};
const columnNameInnerStyle: CSSProperties = {
  padding: 8,
};

const TableNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <div style={tableStyle}>
      <div style={tableNameStyle}>
        {data.name}
      </div>

      {data.columns.map((column: any, index: any) => (
        <div key={index} style={columnNameStyle} className="column-name">
          {column.handleType && <Handle
            type={column.handleType}
            position={Position.Left}
            id={column.name}
            style={sourceHandleStyle}
          />}

          <div style={columnNameInnerStyle}>
            {column.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(TableNode);