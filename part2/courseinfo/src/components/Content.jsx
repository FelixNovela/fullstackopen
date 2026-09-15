
import Part from './Part'

const Content = ({ parts }) => (
  <ul>
    {parts.map((partItem) => <Part key={partItem.id} part={partItem} />)}
  </ul>

)

export default Content