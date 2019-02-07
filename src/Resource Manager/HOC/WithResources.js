import React from 'react'
import ResourceManagerContextConsumer from '../ResourceManagerContextConsumer';

const WithResources = WrappedComponent => props =>
    <ResourceManagerContextConsumer>
        {ResourceManager => <WrappedComponent resourceManager={ResourceManager}>
            {props.children}
        </WrappedComponent>}
    </ResourceManagerContextConsumer>

    export default WithResources