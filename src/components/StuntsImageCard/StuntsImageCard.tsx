import * as React from 'react'
import InterfaceStunt from '../../interfaces/InterfaceStunt';

interface InterfaceStuntsItemProps {
  stunt: InterfaceStunt,
  zIndex: number
}

const StuntsImageCard = ({stunt, zIndex}: InterfaceStuntsItemProps): JSX.Element => {
  const styleContainerImg = {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    height: '250px',
    justifyContent: 'center',
    width: '200px'
  }

  const styleImg: object = {
      maxHeight: '100%',
      maxWidth: '100%'
  }

  return(
    <div>
      <div style={styleContainerImg}>
        <img style={styleImg} src={stunt.imageUrl}/>
      </div>
    </div>
  )
}

export default StuntsImageCard;