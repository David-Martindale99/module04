import React from 'react'

export default class EmployeeAdd extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)   
    }
    handleSubmit(e) {
        e.preventDefault()
        const form = document.forms.employeeAdd
        const employee = {
            name: form.name.value,
            extension: form.ext.value,
            email: form.email.value,
            title: form.title.value
        }
        this.props.createEmployee(employee)
        form.name.value = ''
        form.ext.value = ''
        form.email.value = ''
        form.title.value = ''
    }
    render() {
        return (
            <form name="employeeAdd" onSubmit={this.handleSubmit} >
                Name: <input type="text" name="name"></input>
                Extension: <input type="text" name="ext" placeholder="4-digits" maxLength={4}></input>
                Email: <input type="text" name="email"></input>
                Title: <input type="text" name="title"></input>
                <button>Add</button>
            </form>
        )
    }
}