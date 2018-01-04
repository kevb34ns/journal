import React from 'react'

class EntryList extends React.Component {
  render () {
    const entries = this.props.entries
    return (
      <section className='menu'>
        {entries &&
        <ol className='entries_list'>
          {entries.map(entry => (
            <li className='entry'
              id={entry.file_id}
              key={entry.file_id}
              onClick={() => null}>
              <p className='entry_title'>{entry.title}</p>
              <p className='entry_date'>{entry.created_at}</p>
            </li>
          ))}
        </ol>
        }
      </section>
    )
  }
}

export default EntryList
