import React from "react";
import styled from "styled-components";

export default class ListItem extends React.Component {
    render() {
        const {value, styles } = this.props;
        console.log(value)
        const Li = styled.li` 
            ${styles} 
        `;
        return ( 
            <Li>{value}</Li>
        );
    }
} 