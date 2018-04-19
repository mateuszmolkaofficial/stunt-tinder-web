import * as React from 'react'
import { DragSource } from 'react-dnd';
import InterfaceStunt from '../../interfaces/InterfaceStunt';

import './StuntsImageCard.scss';

interface InterfaceStuntsItemProps {
  stunt: InterfaceStunt,
  zIndex: number,
  connectDragSource: any,
  isDragging: any
}

const stuntSource = {
  beginDrag(props: any) {
    return {};
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class StuntsImageCard extends React.Component<InterfaceStuntsItemProps, any> {
  constructor(props: any) {
    super(props);
    // tslint:disable-next-line:no-console
    console.log(props);
  }

  public render() {
    const { connectDragSource, isDragging } = this.props;
    return(
      connectDragSource(
      <div style={{
          cursor: 'move',
          opacity: isDragging ? 0.2 : 1,
        }} className='stunt-card-main'>
        <img className='stunt-card-image' src={this.props.stunt.imageUrl}/>
        <div className='stunt-card-name'>{this.props.stunt.name}</div>
      </div>
    ))
  }
}

export default DragSource('stunt', stuntSource, collect)(StuntsImageCard);