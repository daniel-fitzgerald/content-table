import React, { Component } from 'react'
import { render } from 'react-dom'

import { ContentTable } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>internal-components Demo</h1>
      <ContentTable headers={['col 1', 'col 2']} rows={[]} emptyText="Table is empty"/>
      <ContentTable headers={['col 1', 'col 2']} rows={[[0, 'value 1', 'value 2'],[1, 'value 3', 'value 4']]} emptyText="Table is empty"/>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
