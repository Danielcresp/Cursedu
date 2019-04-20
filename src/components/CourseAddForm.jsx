import React from 'react'
import uid from 'uid'

function CourseAddForm (props){
    return(
        <form onSubmit={props.submit}>
        <div>HOla mundo en React </div>
        <input type='text' placeholder='Nombre del curso' name='name' required />
        <input type='text' placeholder='Nombre del Maestro' name='teacher' required />
        <input type='text' name='id' defaultValue={uid(10)} />
        <input type='submit' defaultValue='Guardar' required></input>
        </form>
    )
}
export default CourseAddForm