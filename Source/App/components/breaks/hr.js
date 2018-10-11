import React from "react";
import styled from "styled-components";

export default class Hr extends React.Component {
    render() {
        const {styles, value} = this.props;
        const Hrbreak = styled.hr` 
            ${styles} 
        `;
        return ( 
            <Hrbreak>{value}</Hrbreak>
        );
    }
} 