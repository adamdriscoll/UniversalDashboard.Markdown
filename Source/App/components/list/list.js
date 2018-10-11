import React from "react";
import styled from "styled-components";

export default class List extends React.Component {
    render() {
        const {value,styles } = this.props;
        console.log(value)
        const Ul = styled.ul` 
            ${styles} 
        `;
        const Ol = styled.ol` 
            ${styles} 
        `;
        return ( 
            value.ordered ? <Ol>{value.children}</Ol> : <Ul>{value.children}</Ul>
        );
    }
} 