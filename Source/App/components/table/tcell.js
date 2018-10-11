import React from "react";
import styled from "styled-components";

export default class Tcell extends React.Component {
    render() {
        const {styles, value} = this.props;
        console.log(value)
        const Td = styled.td` 
            ${styles} 
        `;
        return ( 
            <Td>{value}</Td>
        );
    }
} 