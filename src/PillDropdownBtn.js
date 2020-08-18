import React from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const PillDropdownBtn = ({ title, children }) => {

    const pillBtnStyle = {
        backgroundColor: "#F0F0F0",
        borderWidth: "0",
        color: "#000000",
        borderRadius: "16px",
        margin: "12px 8px",
        flex: "0 0 auto",
    }

    return (
        <Dropdown as={ButtonGroup} >
            <Dropdown.Toggle style={pillBtnStyle} id="dropdown-basic">
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PillDropdownBtn;
