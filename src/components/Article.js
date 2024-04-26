import React from 'react'

const defaultDate = "January 1, 1970";
const coffeeEmoji = "☕️";
const bentoEmoji = "🍱";

function Article(props) {
    const {title, date = defaultDate, preview, minutes } = props;

    const readingTime = getReadingTime(minutes);

  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <span>{readingTime}</span>
    </article>
  )
}

function getReadingTime(minutes) {
   if (!minutes) return null;

   const time = Math.ceil(minutes / 5);
   const emoji = minutes < 60 ? coffeeEmoji : bentoEmoji;
   const emojiCount = Math.floor(time / (minutes < 30 ? 5 : 10));
   const emojiString = emoji.repeat(emojiCount);

   return `${emojiString} ${minutes} min read`;
}

export default Article;