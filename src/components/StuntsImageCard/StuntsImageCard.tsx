import * as React from 'react'
import InterfaceStunt from '../../interfaces/InterfaceStunt';
import './StuntsImageCard.scss';

interface InterfaceStuntsItemProps {
  stunt: InterfaceStunt,
  zIndex: number
}

const StuntsImageCard = ({stunt, zIndex}: InterfaceStuntsItemProps): JSX.Element => {

  return(
    <div className='stunt-card-main'>
      <img className='stunt-card-image' src={stunt.imageUrl}/>
      <div className='stunt-card-name'>{stunt.name}</div>
    </div>
  )
}

export default StuntsImageCard;