const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
   return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part partname={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part partname={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part partname={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return <p>{props.partname} {props.exercises}</p>
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of exercises {total}</p>
}

export default App