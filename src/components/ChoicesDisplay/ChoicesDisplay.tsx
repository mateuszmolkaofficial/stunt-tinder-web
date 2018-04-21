import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import InterfaceStunt from '../../interfaces/InterfaceStunt';
import './ChoicesDisplay.scss'

class ChoicesDisplay extends React.Component<any, any> {
  public render() {
    const { choices } = this.props

    return(
      <div>
        <p className='choices_title'>Stunts chosen:</p>
        <ul className='choices_ul'>
          <CSSTransitionGroup transitionName="choices" 
                            transitionAppear={true} 
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                            transitionAppearTimeout={500}
          >
            {choices.map((choice: InterfaceStunt) => 
              <div className='choices_li' key={choice.name}>
                <img className='choices_img' src={choice.imageUrl} alt=""/>
                <div className='choices_name'>{choice.name}</div>
              </div>
            )}
          </CSSTransitionGroup> 
        </ul>
      </div>
    )
  }
}

export default ChoicesDisplay