import React, {useState} from 'react';
import {useNuiEvent} from "../../hooks/useNuiEvent";
import {debugData} from "../../utils/debugData";
import {fetchNui} from "../../utils/fetchNui";
import {useExitListener} from "../../hooks/useExitListener";
import { NuiWrapper, PopupThing } from './style';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const Template: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useNuiEvent<boolean>('setVisible', (data) => {
    // This is our handler for the setVisible action.
    console.log(data)
    setIsVisible(data)
  })

  useExitListener(setIsVisible)

  // const handleGetClientData = () => {
  //   fetchNui<ReturnData>('getClientData').then(retData => {
  //     console.log('Got return data from client scripts:')
  //     console.dir(retData)
  //     setClientData(retData)
  //   }).catch(e => {
  //     console.error('Setting mock data due to error', e)
  //     setClientData({ x: 500, y: 300, z: 200})
  //   })
  // }

  return (
    <NuiWrapper>
        <PopupThing isVisible={isVisible}>
            {children}
        </PopupThing>
    </NuiWrapper>
  );
}

export default Template;
