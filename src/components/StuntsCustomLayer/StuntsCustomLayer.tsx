import * as React from 'react';
import { DragLayer } from 'react-dnd';
import InterfaceStunt from '../../interfaces/InterfaceStunt';
import StuntsImageCard from '../StuntsImageCard/StuntsImageCard';

const layerStyles: object = {
  height: '100%',
  left: 0,
  pointerEvents: 'none',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 100,
};

function collect(monitor: any) {
  return {
    currentOffset: monitor.getSourceClientOffset(),
    differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
    initialOffset: monitor.getInitialSourceClientOffset(),    
    isDragging: monitor.isDragging(),
  };
}

interface InterfaceCustomLayer {
  stunt: InterfaceStunt;
  differenceFromInitialOffset: any,
  currentOffset: any;
  initialOffset: any;
  isDragging: boolean;
  isOver: boolean;
}

class StuntsCustomLayer extends React.Component<InterfaceCustomLayer, any> {
  public getItemStyles(props: any) {
    const { currentOffset } = props;
    if (!currentOffset) {
      return {
        display: 'none'
      };
    }
  
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return { transform }
  }

  public render() {
    const { differenceFromInitialOffset, isDragging, isOver } = this.props
    const differenceX = differenceFromInitialOffset ? differenceFromInitialOffset.x : null;

    return(
      isDragging ? 
      <div style={layerStyles}>
        <div style={this.getItemStyles(this.props)}>
          <div style={{
            position: 'absolute',
            transform: `rotate(${differenceX >= 0 ? '+': '-'}10deg)`,
          }}>
            {isOver ? <div style={{
              color: differenceX >= 0 ? 'green': 'red',
              fontSize: '8em',
              left: '50%', 
              position: 'absolute',             
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}>{differenceX >= 0 ? <div>&#10003;</div> : <div>&#10005;</div>}</div>: null}
            <div style={{opacity: isOver ? 0.7 : 1,}}> 
              <StuntsImageCard stunt={this.props.stunt} />
            </div>
          </div>
        </div>
      </div>
      : null  
    )
  }
}

export default DragLayer(collect)(StuntsCustomLayer) as any;