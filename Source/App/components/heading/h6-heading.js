import React from "react";
import styled from "styled-components";

export default class H6Tag extends React.Component {
    render() {
        const {value, styles} = this.props;
        const H6 = styled.h6` 
            ${styles} 
        `;
        return ( <H6>{value}</H6> );
    }
} 