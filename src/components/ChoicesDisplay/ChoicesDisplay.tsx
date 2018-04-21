import * as React from 'react';
import InterfaceStunt from '../../interfaces/InterfaceStunt';
import './ChoicesDisplay.scss'

class ChoicesDisplay extends React.Component<any, any> {
  public render() {
    const { choices } = this.props

    return(
      <div>
        <p className='choices_title'>Stunts chosen:</p>
        <ul className='choices_ul'>
          {choices.map((choice: InterfaceStunt) => 
            <div className='choices_li' key={choice.name}>
              <img className='choices_img' src={choice.imageUrl} alt=""/>
              <div className='choices_name'>{choice.name}</div>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default ChoicesDisplay