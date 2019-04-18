import React ,{Component}from 'react'
import CoursesList from './CoursesList';

class App extends Component{
    constructor (props){
        super(props)
        this.state={
            courses:[
                {id : 1,name:'React desde cero',teacher:'Jonathan Mircha'},
                {id : 2,name:'React Profecional',teacher:'Mircha'},
                {id : 3,name:'React Master',teacher:'Jonathan Master'},
            ]
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    }
    handleOnAddCourse(event){
        console.log('Add')
        event.preventDefault() //para que no se genere el formulario
        let form = event.target,
        course={
            id: 6, //obtener datos de los imput
            name:form.name.value,
            teacher:form.teacher.value
        }
        console.log(form);
        console.log(course);
        this.setState({
            courses: this.state.courses.concat(course) //agrega al estado el nuevo curso
        })
        console.log(this.state);
    }

    render(){
        return(
            <CoursesList 
            courses={this.state.courses} //eviar pripiedades al hijo
            onAddCourse={this.handleOnAddCourse}/>
        )
    }
}
// App.propTypes = {}
// App.defaultProps = {}
export default App