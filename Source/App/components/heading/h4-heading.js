import React from "react";
import styled from "styled-components";

export default class H4Tag extends React.Component {
    render() {
        const {value, styles} = this.props;
        const H4 = styled.h4` 
            ${styles} 
        `;
        return ( <H4>{value}</H4> );
    }
} 