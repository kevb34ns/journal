import React from 'react'

class EntryDisplay extends React.Component {
  render () {
    return (
      <section className='entry_input'>
        {this.props.selectedEntry.text}
      </section>
    )
  }
}

export default EntryDisplay
