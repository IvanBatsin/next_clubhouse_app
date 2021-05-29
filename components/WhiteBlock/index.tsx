import styles from './whiteBlock.module.scss';

const WhiteBlock: React.FC = ({children}) => {
  return (
    <div className={styles.block}>{children}</div>
  )
}

export default WhiteBlock;