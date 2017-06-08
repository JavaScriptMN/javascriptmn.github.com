import React from 'react'
import format from 'date-fns/format'
import { config } from 'config'

const NEXT_MEETUP_URI = config.apiRoot

export default class Meetup extends React.Component {
  state = {
    name: '',
    time: 0,
    venue: {name: ''}
  }

  componentWillMount () {
    fetch(NEXT_MEETUP_URI)
      .then((res) => res.json())
      .then((json) => this.setState(json))
  }

  render () {
    const meetupStyles = {
        container: {
          textAlign: 'center',
          border: '1px solid black',
          display: 'inline block',
          margin: '8rem'
        },
        title: {
          fontSize: '2rem',
          margin: '1rem'
        },
        bug: {},
        rsvpButton: {}
    }

    return (
      <div className="next-event">
        <div className="next-event-tagline">
          <strong>Next Event:</strong>
          <div className="event-name">
            {this.state.name}
          </div>
          <span className="next-event-timestamp">{format(this.state.time, 'dddd, MMMM Mo, YYYY')} at <strong>{ this.state.venue.name }</strong></span>
        </div>
      </div>
    )
  }
}