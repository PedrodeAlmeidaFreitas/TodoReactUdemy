import React from 'react';

import If from './if'

export default props => {
    const { hide, style, onClick, icon } = props
    return (
        <If test={!hide}>
            <button className={`btn btn-${style}`} onClick={onClick}>
                <i className={`fa fa-${icon}`}></i>
            </button>
        </If>
    )
}