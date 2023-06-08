import React from 'react'
import ReactDOM from 'react-dom'
import EmployeeList from './EmployeeList.jsx'
//import { createRoot } from 'react-dom/client'

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById('content')
)

// SOLVES ERROR MESG FOR MISSING ROOT
// const root = createRoot(document.getElementById('content'))
// root.render(
//     <React.StrictMode>
//         <EmployeeList />
//     </React.StrictMode>
// )