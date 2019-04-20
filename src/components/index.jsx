import React ,{Component}from 'react'
import CoursesList from './CoursesList'
import uid from 'uid'
import {courses} from './data/curses.json'


class App extends Component{
    constructor (props){
        super(props)
        this.state={
            courses: []
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)

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

    fetchData(){
        setTimeout(()=> this.setState({ courses:courses}),2000 )//actualiza el estado
    }
    resetData(){
        this.setState({ courses:[]})
    }
    componentDidMount(){
        setTimeout(()=> this.setState({ courses:courses}),2000 )//actualiza el estado

    }

    render(){
        if(!this.state.courses.length){
            return(
                <div>
                    <p>No hay cursos:</p>
                    <button onClick={this.fetchData}>Cargar Cursos</button>
                </div>
            )
        }else{
            return(
                <div>
                    <CoursesList 
                    courses={this.state.courses} //eviar pripiedades al hijo
                    onAddCourse={this.handleOnAddCourse}/>
                    <button onClick={this.resetData}>Borrar Cursos</button>
                </div>
            )

        }
    }
}
// App.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     teacher: PropTypes.string.isRequired,
// }

App.defaultProps = {}
export default App