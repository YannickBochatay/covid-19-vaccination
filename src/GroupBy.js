import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"
import ToggleButton  from "react-bootstrap/ToggleButton"

export default withDataContext(class GroupBy extends React.Component {

    handleChange = groupBy => this.props.setKeyValue("groupBy", groupBy)

    render() {
        return (
            <Form.Group controlId="groupBy">
                <Form.Label>Grouper par</Form.Label>&nbsp;
                <ToggleButtonGroup
                    type="radio"
                    name="groupBy"
                    value={ this.props.groupBy}
                    onChange={ this.handleChange }
                >
                    <ToggleButton variant="light" value="reg">région</ToggleButton>
                    <ToggleButton variant="light" value="age">tranche d'âge</ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
        )
    }
})