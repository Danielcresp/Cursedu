import React from 'react'
function Course (props){
    return(
        <li>Info de cada Curso {props.id}: {props.name}__{props.teacher} </li>
    )
}

export default Course
