import * as React from 'react'
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import InterfaceStunt from '../../interfaces/InterfaceStunt';

import './StuntsImageCard.scss';

const stuntSource = {
  beginDrag(props: any) {
    return {};
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

interface InterfaceStuntsItemProps {
  stunt: InterfaceStunt,
  connectDragPreview: any,
  connectDragSource: any,
  isDragging: any
}

class StuntsImageCard extends React.Component<InterfaceStuntsItemProps, any> {
  public componentDidMount(){
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true,
    });
  }

  public render() {
    const { connectDragSource, isDragging } = this.props;
      return (
      <div>
        {connectDragSource(
        <div style={{
              cursor: 'move',
              opacity: isDragging ? 0 : 1}} 
             className='stunt-card-main'>
          <img className='stunt-card-image' src={this.props.stunt.imageUrl}/>
          <div className='stunt-card-name'>{this.props.stunt.name}</div>
        </div>)}
      </div>
    )
  }
}

export default DragSource('stunt', stuntSource, collect)(StuntsImageCard);