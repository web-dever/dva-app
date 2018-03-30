import React from 'react';

import ui from './Layout.less';


export default (props) => {
    return (
        <div className={ ui['right-content'] }>
        {
            props.children
        }
        </div>
    );
};