import React from 'react'
import Course from './Course';
import CourseAddForm from './CourseAddForm';

function CoursesList(props){
    return(
        <div>
        <CourseAddForm submit={props.onAddCourse}/>
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