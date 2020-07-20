import React from 'react'

const ITEMS = {
  location: 'Location',
  travel: 'Upcoming Travel',
  reading: 'Reading',
  celebrating: 'Celebrating (or About to Celebrate)',
  watching: 'Watching',
  listeningTo: 'Listening To',
  learning: 'Learning (or Trying to Learn)',
  workingOn: 'Working On',
}

export const NowCard = ({ item }) => {
  const title = ITEMS[item[0]]
  const text = item[1]

  return (
    <li>
      <b>{title}:</b> {text}
    </li>
  )
}
