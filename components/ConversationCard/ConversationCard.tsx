import styles from './convesationCard.module.scss';
import classNames from 'classnames';

interface ConversationCardProps {
  id: number,
  title: string,
  guests: string[],
  speakersAvatars: string[],
  participants: number,
  comments: number
};

const ConversationCard: React.FC<ConversationCardProps> = ({comments, guests, id, speakersAvatars, participants, title}) => {
  return (
    <div key={id} className={styles.room}>
      <h3>{title}</h3>
      <div className={styles.room_content}>
        <div className={styles.room_avatar}>
          {
            speakersAvatars.length > 1 ? 
            speakersAvatars.map((avatarUrl, index) => {
              if (index > 1) return;
              return (
                <div 
                  key={index} 
                  style={{backgroundImage: `url(${avatarUrl})`}} 
                  className={classNames(styles.room_avatar_small, index === 0 ? styles.room_avatar_small_first : styles.room_avatar_small_second)}>
                </div>
              )
            })
            : <div style={{backgroundImage: `url(${speakersAvatars[0]})`}} className={styles.room_avatar_big}></div>
          }
        </div>
        <div className={styles.room_about}>
          <ul>
            {guests.map((name, index) => {
              if (index > 3) return;
              if (index === 3) {
                return <li key={index}>...</li>
              }
              return <li key={index}>{name}</li>
            })}
          </ul>
          <div className={styles.room_info}>
            <span className={styles.participants}>{participants}&#9786;</span>
            <span className={styles.comments}>{comments}&#9993;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationCard;