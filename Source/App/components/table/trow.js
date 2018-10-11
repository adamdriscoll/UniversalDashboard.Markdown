import React from "react";
import styled from "styled-components";

export default class Trow extends React.Component {
    render() {
        const {styles, value} = this.props;
        const Tr = styled.tr` 
            ${styles} 
        `;
        return ( 
            <Tr>{value}</Tr>
        );
    }
} 