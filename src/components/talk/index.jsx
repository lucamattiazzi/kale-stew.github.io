import React from 'react'
import { formatTalkDate } from '../../utils/dates'

import './index.scss'

const RecordingLink = ({ url, eventName, talkTitle }) => (
  <a href={url} title={`Link to a recording of ${talkTitle}`}>
    <span>📹 {eventName} － </span>
  </a>
)

export const TalkCard = ({ talk }) => (
  <div className="talk">
    <h2>{talk.title}</h2>
    <div className="talk-description">{talk.description}</div>
    <div className="talk-event">
      {talk.events.map(({ eventRecording, eventName, eventDate }) => (
        <>
          {eventRecording ? (
            <RecordingLink
              talkTitle={talk.title}
              eventName={eventName}
              url={eventRecording}
            />
          ) : (
            <span>{eventName} - </span>
          )}
          <span>{formatTalkDate(eventDate)}</span>
          <br />
        </>
      ))}
    </div>
  </div>
)
