import React from "react";
import styled from "styled-components";

export default class Strong extends React.Component {
    render() {
        const {styles, value} = this.props;
        const St = styled.strong` 
            ${styles} 
        `;
        return ( 
            <St>{value}</St>
        );
    }
} 