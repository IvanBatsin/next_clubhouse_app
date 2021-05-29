import styles from './room.module.scss';
import classNames from 'classnames';

interface RoomProps {
  title: string
}

const Room: React.FC<RoomProps> = ({title}) => {
  return (
    <div className={styles.room}>
      <div className={styles.room_header}>
        <h2>{title}</h2>
        <button className={classNames('btn')}>
          Leave quietly
        </button>
      </div>
    </div>
  )
}

export default Room;