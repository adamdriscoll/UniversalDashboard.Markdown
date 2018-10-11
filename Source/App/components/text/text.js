import React from "react";
import styled from "styled-components";

export default class Text extends React.Component {
    render() {
        const {styles, value} = this.props;
        console.log(this.props)
        const Tx = styled.textarea` 
            ${styles} 
        `;
        return ( 
            <Tx>{value}</Tx>
        );
    }
} 