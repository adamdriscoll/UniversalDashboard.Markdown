import React from "react";
import styled from "styled-components";

export default class Tbody extends React.Component {
    render() {
        const {styles, value} = this.props;
        const Tb = styled.tbody` 
            ${styles} 
        `;
        return ( 
            <Tb>{value}</Tb>
        );
    }
} 