import React from "react";
import styled from "styled-components";

export default class Emphasis extends React.Component {
    render() {
        const {styles, value} = this.props;
        const Em = styled.em` 
            ${styles} 
        `;
        return ( 
            <Em>{value}</Em>
        );
    }
} 