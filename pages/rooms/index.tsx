import React from 'react';
import Header from '../../components/Header/Header';
import styles from './rooms.module.scss';
import ConversationCard from '../../components/ConversationCard/ConversationCard';
import Link from 'next/link';
import axios from '../../core/axios';
import { GetServerSideProps } from 'next';

interface RoomAttr {
  id: number,
  title: string,
  guests: string[],
  speakersAvatars: string[],
  participants: number,
  comments: number
};

interface RoomsProps {
  rooms: RoomAttr[],
  error?: boolean
}

const Rooms: React.FC<RoomsProps> = ({rooms, error}) => {
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
        {error && <h2>We have error</h2>}
        {!error && 
          rooms.map((room, index) => {
            return <Link key={index} href={`/rooms/${room.id}`}>
              <a>
                <ConversationCard
                  id={room.id}
                  comments={room.comments}
                  speakersAvatars={room.speakersAvatars}
                  guests={room.guests}
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const {data: rooms} = await axios.get('http://localhost:5050/rooms');
    return {
      props: {
        rooms
      }
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        rooms: [],
        error: true
      }
    }
  }

}