import * as React from 'react';
import * as StuntsAPI from '../../api/Stunts';
import InterfaceStunt from '../../interfaces/InterfaceStunt';
import StuntsImageCard from '../StuntsImageCard/StuntsImageCard'
import './StuntsDisplay.scss';

class StuntsDisplay extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);    
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

  public render() {
    return (
      <div>
        {this.props.stunts.length ? 
        <div>
          <p>{this.props.stunts[0].name}</p>
          <StuntsImageCard stunt={this.props.stunts[0]} zIndex={1}/>
        </div>
        : null
        }
      <div className='stunts-display-accept' onClick={this.accept}>&#10004;</div>
      <div className='stunts-display-decline' onClick={this.decline}>&#10005;</div>
      </div>
    );
  }

  private accept(): void {
    this.props.dispatch({type: 'REMOVE_FIRST'});
  }

  private decline(): void {
    this.props.dispatch({type: 'REMOVE_FIRST'});
  }
}

export default StuntsDisplay;