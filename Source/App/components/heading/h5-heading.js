import React from "react";
import styled from "styled-components";

export default class H5Tag extends React.Component {
    render() {
        const {value, styles} = this.props;
        const H5 = styled.h5` 
            ${styles} 
        `;
        return ( <H5>{value}</H5> );
    }
} 