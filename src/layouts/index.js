import { Carousel, Breadcrumb } from 'antd'
import styles from './index.css'
import Link from 'umi/link'
import Nav from './Nav'
import Aslide from './Aslide'
function BasicLayout (props) {
  return (
    <div className={styles.normal}>
      <Nav />
      <div>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
      <div className={styles.contentWrap}>
        <Aslide />
        <div>
          <div className={styles.breadcrumb}>
          本页位置：
            <Breadcrumb separator='>>'>
              <Breadcrumb.Item><Link to='/'>首页</Link></Breadcrumb.Item>
              <Breadcrumb.Item>{props.title || 'lllll'}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default BasicLayout
