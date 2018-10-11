import React from "react";
import styled from "styled-components";

export default class Link extends React.Component {
    render() {
        const {href, value, styles } = this.props;
        console.log(value)
        const Lk = styled.a` 
            ${styles} 
        `;
        return ( 
            <Lk href={href}>{value.children}</Lk>
        );
    }
} 