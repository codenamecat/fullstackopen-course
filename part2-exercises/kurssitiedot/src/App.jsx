const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courseElements = courses.map(course => {
    return <Course course={course} key={course.id} />
  })

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseElements}
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  )
}

const Header = (props) => {
  return <h2>{props.course.name}</h2>
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

const Total = (props) => {

  const total = props.course.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  }, 0)

  return <p><b>total of {total} exercises</b></p>
}

export default App