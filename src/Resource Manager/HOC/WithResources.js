import React from 'react'
import ResourceManagerContextConsumer from '../ResourceManagerContextConsumer';

const WithResources = WrappedComponent => props => (
    <ResourceManagerContextConsumer>
        {ResourceManager => (
            <WrappedComponent {...props} resourceManager={ResourceManager}>
                {props ? props.children : []}
            </WrappedComponent>
        )}
    </ResourceManagerContextConsumer>
    );

export default WithResources