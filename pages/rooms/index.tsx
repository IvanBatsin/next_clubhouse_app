import Header from '../../components/Header/Header';
import styles from './rooms.module.scss';
import ConversationCard from '../../components/ConversationCard/ConversationCard';
import Link from 'next/link';

interface RoomProps {
  id: number,
  title: string,
  speakersNames: string[],
  speakersAvatars: string[],
  participants: number,
  comments: number
};

const rooms: RoomProps[] = [
  {
    id: 1,
    title: 'Better die rather live boring',
    comments: 12,
    participants: 3,
    speakersAvatars: ['assets/girl2.jpg', 'assets/girl2.jpg', 'assets/girl2.jpg'],
    speakersNames: ['Julie', 'Ruby Da Cherry', 'Scrim']
  },
  {
    id: 2,
    title: 'Smoke lines on my face',
    comments: 12,
    participants: 3,
    speakersAvatars: ['assets/girl2.jpg', 'assets/girl2.jpg'],
    speakersNames: ['Suicideboys', 'City Morgue']
  },
  {
    id: 4,
    title: 'Memoirse of gorilla',
    comments: 12,
    participants: 3,
    speakersAvatars: ['assets/girl2.jpg'],
    speakersNames: ['Sleezy']
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
          rooms.map((room, index) => {
            return <Link key={index} href={`/rooms/${room.id}`}>
              <a>
                <ConversationCard
                  id={room.id}
                  comments={room.comments}
                  speakersAvatars={room.speakersAvatars}
                  speakersNames={room.speakersNames}
                  participants={room.participants}
                  title={room.title}
                />
              </a>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Rooms;