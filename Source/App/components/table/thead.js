import React from "react";
import styled from "styled-components";

export default class Thead extends React.Component {
    render() {
        const {styles, value} = this.props;
        console.log(this.props)
        console.log('value only: ' + value[0].children)
        const Thd = styled.thead` 
            ${styles} 
        `;
        return ( 
            <Thd>{value}</Thd>
        );
    }
} 