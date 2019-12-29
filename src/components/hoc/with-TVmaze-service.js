import React from 'react';
import { TVmazeServiceConsumer } from '../films-service-context';

const withTVmazeService = () => (Wrapped) => {

  return (props) => {
    return (
      <TVmazeServiceConsumer>
        {
          (TVmazeService) => {
            return (<Wrapped {...props}
                      two={'****************'}
                      TVmazeService={TVmazeService}/>);
          }
        }
      </TVmazeServiceConsumer>
    );
  }
};

export default withTVmazeService;
