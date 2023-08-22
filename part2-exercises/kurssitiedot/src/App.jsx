const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      {/* <Total course={props.course} /> */}
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {

  const courseParts = props.course.parts.map(part => {
    return <Part partname={part.name} exercises={part.exercises} key={part.id} />
  })

  return (
    <div>
      {courseParts}
    </div>
  )
}

const Part = (props) => {
  return <p>{props.partname} {props.exercises}</p>
}

// commenting this out since it's not needed yet and this version is causing errors
// const Total = (props) => {
//   const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
//   return <p>Number of exercises {total}</p>
// }

export default App