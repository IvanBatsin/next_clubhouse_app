import Header from '../../components/Header/Header';
import styles from './rooms.module.scss';
import classNames from 'classnames';

interface RoomProps {
  id: number,
  title: string,
  ownerNames: string[],
  ownerAvatar: string[],
  participants: number,
  comments: number
};

const rooms: RoomProps[] = [
  {
    id: 1,
    title: 'Better die rather live boring',
    comments: 12,
    participants: 3,
    ownerAvatar: ['assets/girl2.jpg', 'assets/girl2.jpg', 'assets/girl2.jpg'],
    ownerNames: ['Julie', 'Ruby Da Cherry', 'Scrim']
  },
  {
    id: 2,
    title: 'Smoke lines on my face',
    comments: 12,
    participants: 3,
    ownerAvatar: ['assets/girl2.jpg', 'assets/girl2.jpg'],
    ownerNames: ['Suicideboys', 'City Morgue']
  },
  {
    id: 4,
    title: 'Memoirse of gorilla',
    comments: 12,
    participants: 3,
    ownerAvatar: ['assets/girl2.jpg'],
    ownerNames: ['Sleezy']
  },
]

const Rooms: React.FC = () => {
  return (
    <div className="container">
      <Header/>
      <div className={styles.rooms_header}>
        <div>
          <h1 className={styles.title}>Conversations page</h1>
          <button className="btn">Explore</button>
        </div>
        <button className="btn">+ Start room</button>
      </div>
      <div className={styles.content}>

        {
          rooms.map(room => {
            return (
              <div key={room.id} className={styles.room}>
                <h3>{room.title}</h3>
                <div className={styles.room_content}>
                  <div className={styles.room_avatar}>
                    {
                      room.ownerAvatar.length > 1 ? 
                      room.ownerAvatar.map((avatarUrl, index) => {
                        if (index > 1) return;
                        return (
                          <div 
                            key={index} 
                            style={{backgroundImage: `url(${avatarUrl})`}} 
                            className={classNames(styles.room_avatar_small, index === 0 ? styles.room_avatar_small_first : styles.room_avatar_small_second)}>
                          </div>
                        )
                      })
                      : <div style={{backgroundImage: `url(${room.ownerAvatar[0]})`}} className={styles.room_avatar_big}></div>
                    }
                  </div>
                  <div className={styles.room_about}>
                    <ul>
                      {room.ownerNames.map((name, index) => {
                        return <li key={index}>{name}</li>
                      })}
                    </ul>
                    <div className={styles.room_info}>
                      <span className={styles.participants}>{room.participants}&#9786;</span>
                      <span className={styles.comments}>{room.comments}&#9993;</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

        {/* <div className={styles.room}>
          <h3>Say cheese and die</h3>
          <div className={styles.room_content}>
            <div className={styles.room_avatar}>
              <div className={styles.room_avatar_big}></div>
              <div className={classNames(styles.room_avatar_small, styles.room_avatar_small_first)}></div>
              <div className={classNames(styles.room_avatar_small, styles.room_avatar_small_second)}></div>
            </div>
            <div className={styles.room_about}>
              <ul>
                <li>John Wayne</li>
                <li>John Wayne</li>
                <li>John Wayne</li>
              </ul>
              <div className={styles.room_info}>
                <span className={styles.participants}>12&#9786;</span>
                <span className={styles.comments}>3&#9993;</span>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Rooms;