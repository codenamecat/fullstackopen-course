const Course = (props) => {
	return (
		<div>
			<Header course={props.course} />
			<Content course={props.course} />
			<Total course={props.course} />
		</div>
	)
}

const Header = (props) => <h2>{props.course.name}</h2>

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

const Part = (props) => <p>{props.partname} {props.exercises}</p>

const Total = (props) => {

	const total = props.course.parts.reduce((acc, curr) => {
		return acc + curr.exercises
	}, 0)

	return <p><b>total of {total} exercises</b></p>
}

export default Course