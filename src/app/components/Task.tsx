import React from 'react'

function Task({task}) {
  return (
    <tr key={task.id}>
    <td>{task.id}</td>
  </tr>
  )
}

export default Task