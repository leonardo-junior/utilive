// vendors
import clsx from 'clsx'
import Link from 'next/link'

// styles
import styles from './Card.module.scss'

type CardProps = Omit<React.AllHTMLAttributes<HTMLDivElement>, 'className'> & {
  anchor: string
  keyName: string
  className?: string
}

function Card ({ anchor, keyName, className = '', ...props }: CardProps): JSX.Element {
  return(
    <div className={clsx({
      [className]: !!className,
      [styles.container]: true
      })}
      {...props}
    >
      <Link href={anchor}>
        {keyName}
      </Link>
    </div>
  )
}

export default Card