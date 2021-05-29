import styles from './stepHeader.module.scss';
import classesNames from 'classnames';

interface Props {
  children: React.ReactNode,
  classes?: string
}

const StepHeader: React.FC<Props> = ({children, classes}) => {
  return (
    <div className={classesNames(styles.main, classes)}>
      {children}
    </div>
  )
}

export default StepHeader;