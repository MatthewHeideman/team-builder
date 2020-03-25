import React from 'react';

function Form (props) {
    
    return (
        <form onSubmit = {props.teamList}>
            <label>
                <input placeholder = 'Name' value = {props.inputValue.name || ''} type = 'text' name = 'name' onChange = {props.change}/>
            </label>
            <label>
                <input placeholder = 'E-Mail' value = {props.inputValue.email || ''} type = 'text' name = 'email' onChange = {props.change}/>
            </label>
            <label>
                <input placeholder = 'Position' value = {props.inputValue.position || ''} type = 'text' name = 'position' onChange = {props.change}/>
            </label>
            <label>
                <input type = 'submit' />
            </label>
        </form>
    )
}
export default Form;