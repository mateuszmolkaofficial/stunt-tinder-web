import * as React from 'react'
import { DropTarget } from 'react-dnd';

const stuntTarget = {
  drop(props: any) {
    // tslint:disable-next-line:no-console
    console.log('DZIALA SUKA!!');
    // tslint:disable-next-line:no-console
    console.log(props);
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
  constructor(props: any) {
    super(props);
    // tslint:disable-next-line:no-console
    console.log(props);
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