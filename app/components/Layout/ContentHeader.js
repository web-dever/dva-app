import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import ui from './ContentHeader.less';


const Header = props => {
    const { changeWidth, onlyIcon } = props;
    return (
        <Layout.Header className={ui.header}>
            <div className={ui['switch-button']} onClick={ changeWidth }>
                <Icon type={onlyIcon ? 'menu-unfold' : 'menu-fold'}></Icon>
            </div>
        </Layout.Header>
    )
};


export default Header;