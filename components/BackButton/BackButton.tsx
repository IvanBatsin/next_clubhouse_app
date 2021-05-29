import styles from './backButton.module.scss';
import Link from 'next/link';

interface BackButtonProps {
  title: string,
  href: string
}

const BackButton: React.FC<BackButtonProps> = ({href, title}) => {
  return (
    <Link href={href}>
      <span className={styles.back}>&larr; {title}</span>
    </Link>
  )
}

export default BackButton;