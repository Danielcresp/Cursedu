import React from 'react'
import Course from './Course';

function CoursesList(props){
    return(
        <div>
        <form onSubmit={props.onAddCourse}>
            <div>HOla mundo en React </div>
            <input type='text' placeholder='Nombre del curso' name='name' required />
            <input type='text' placeholder='Nombre del Maestro' name='teacher' required />
            <input type='text' name='id' defaultValue={Math.floor(Math.random()*100)} />
            <input type='submit' defaultValue='Guardar' required></input>
        </form>
            <ul>
                {
                    props.courses.map(course =>(
                        <Course
                        key={Math.floor(Math.random()*100)}
                        id={course.id}
                        name={course.name}
                        teacher={course.teacher}
                        />
                    ))

                }
            </ul>
        </div>
    )
}

export default CoursesList