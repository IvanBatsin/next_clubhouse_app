import { useRouter } from 'next/dist/client/router';
import Header from '../../components/Header/Header';
import styles from './profile.module.scss';
import Link from 'next/link';

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div className="container">
      <Header/>
      <div className={styles.content}>
        <Link href="/rooms">
          <span className={styles.back}>&larr; Back</span>
        </Link>
        <div className={styles.profile_block}>
          <div className={styles.profile_block_left}>
            <div className={styles.profile_block_left_avatar}></div> 
            <div className={styles.profile_info}>
              <h3>Batsin Ivan</h3>
              <span>@batsinWeb</span>
            </div>
            <button>Follow</button>
            <div className={styles.settings}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.profile_block_right}>
            <div className={styles.followers}>
              <h4>2</h4>
              <span>followers</span>
            </div>
            <div className={styles.following}>
              <h4>0</h4>
              <span>following</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <p>Very important information about this profile page and profiles author</p>
        <p>This author channel hava unique content</p>
      </div>
    </div>
  )
}

export default ProfilePage;