import React from "react"
import BsForm from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Zones from "./Zones"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <Row>
                    <Col md={ 12 }><Zones/></Col>
                </Row>
            </BsForm>
        )
    }
}