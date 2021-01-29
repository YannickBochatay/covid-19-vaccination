import React from "react"
import BsForm from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import GroupBy from "./GroupBy"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <div style={ { display : "flex", alignItems : "flex-start" } }>
                    <div><GroupBy/></div>
                    <div style={ { flex : 1, marginLeft : 25 } }>
                        <small style={ { color : "#fafafa" } }>
                            Les données par catégorie n'étant pas toujours disponibles, leur
                            somme n'est pas forcément égale à la valeur nationale.
                        </small>
                    </div>
                </div>
            </BsForm>
        )
    }
}