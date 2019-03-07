import styles from './index.css'
import Nav from './Nav'
function BasicLayout (props) {
  return (
    <div className={styles.normal}>
      <Nav />
      { props.children }
    </div>
  )
}

export default BasicLayout
