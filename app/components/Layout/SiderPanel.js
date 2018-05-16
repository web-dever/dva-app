import React from 'react';

import ui from './Layout.less';
import logo from '../../public/assets/logo.svg';

export default (props) => {
    const { onlyIcon } = props;
    return (
        <div>
            <div className={ui.logo}>
                <img className="img" src={logo} alt="logo"/>
                {
                    onlyIcon ||
                    <span>{'ELLA ADMIN'}</span>
                }
            </div>
        </div>
    );
};