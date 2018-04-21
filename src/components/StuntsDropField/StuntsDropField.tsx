import * as React from 'react'
import { DropTarget } from 'react-dnd';

const stuntTarget = {
  drop(props: any) {
    props.dropFunction();
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class StunsDropField extends React.Component<any, any> {
  public componentDidUpdate() {
    const { isOver, updateIsOver} = this.props;
    isOver === true ? updateIsOver(true): updateIsOver(false);
  }
  
  public render() {
    const { connectDropTarget, isOver, choiceColour } = this.props;

    return(
      connectDropTarget(
        <div style={{
          border: `2px dashed ${choiceColour}`,
          borderRadius: '20px',
          height: '335px',
          margin: '0 10px',
          overflow:'hidden',
          width: '300px',
        }}>
          {isOver &&
            <div style={{
              backgroundColor: choiceColour,
              height: '100%',
              opacity: 0.4,
              width: '100%'
            }}/>
          }
        </div>
    ))
  }
}

export default DropTarget('stunt', stuntTarget, collect)(StunsDropField);