import * as React from 'react';
import * as StuntsAPI from '../../api/Stunts';
import InterfaceStunt from '../../interfaces/InterfaceStunt';
import StunsDropField from '../StuntsDropField/StuntsDropField';
import StuntsImageCard from '../StuntsImageCard/StuntsImageCard';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import StuntsCustomLayer from '../StuntsCustomLayer/StuntsCustomLayer';
import './StuntsDisplay.scss';

class StuntsDisplay extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOver: false
    }

    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
    this.updateIsOver = this.updateIsOver.bind(this);    
  }
  
  public componentDidMount() {
    StuntsAPI.fetchStunts()
      .then((stunts: InterfaceStunt[]) => {
        this.props.dispatch({
          stunts,
          type: 'UPDATE_STUNTS',
        });
      })
      // tslint:disable-next-line:no-console
      .catch((err: any) => console.log(err));
  }

  public updateIsOver(positive: boolean) {
    positive ? this.setState({isOver: true}) : this.setState({isOver: false});
  }

  public render() {
    return (
      <div className='stunts-display-outer'>
        <img className='stunts-display-logo'
             src="mi3logo.png" 
             alt=""
        />
        <p className='stunts-display-position'>Position: Stunt double</p>
          {this.props.stunts.length ? 
          <section className='stunts-display-section'>
            <StuntsCustomLayer isOver={this.state.isOver} 
                               updateIsOver={this.updateIsOver} 
                               stunt={this.props.stunts[0]}
            />
            <StunsDropField updateIsOver={this.updateIsOver} 
                            dropFunction={this.decline} 
                            choiceColour={'red'}
            />
            <div>
              <StuntsImageCard stunt={this.props.stunts[0]}/>
              <div className='stunts-display-buttons'>
                <div className='stunts-display-decline' 
                    onClick={this.decline}>
                  &#10005;
                </div>
                <div className='stunts-display-accept' 
                    onClick={this.accept}>
                  &#10004;
                </div>
              </div>
            </div>
            <StunsDropField updateIsOver={this.updateIsOver} 
                            dropFunction={this.accept} 
                            choiceColour={'green'}
            />
          </section>
          : <div className='stunts-display-nomore'>No more stunts to show!</div>
          }
      </div>
    );
  }

  private accept(): void {
    // tslint:disable-next-line:no-console
    console.log('ACCEPTED');
    this.props.dispatch({type: 'REMOVE_FIRST'});
  }

  private decline(): void {
    // tslint:disable-next-line:no-console
    console.log('DECLINED');
    this.props.dispatch({type: 'REMOVE_FIRST'});
  }
}

export default DragDropContext(HTML5Backend)(StuntsDisplay);