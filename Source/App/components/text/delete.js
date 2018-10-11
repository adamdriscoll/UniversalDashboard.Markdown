import React from "react";
import styled from "styled-components";

export default class Delete extends React.Component {
    render() {
        const {styles, value} = this.props;
        const Del = styled.del` 
            ${styles} 
        `;
        return ( 
            <Del>{value}</Del>
        );
    }
} 