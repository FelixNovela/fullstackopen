const Total = ({ parts }) => {
  let sum = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <div>
      <b> total of {sum} exercises</b>
    </div>
  )
}

export default Total