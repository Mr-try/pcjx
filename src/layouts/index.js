import { Carousel, Breadcrumb } from 'antd'
import styles from './index.css'
import Link from 'umi/link'
import Nav from './Nav'
import Aslide from './Aslide'
import carousel1 from '../assets/carousel/1.jpg'
function BasicLayout (props) {
  return (
    <div className={styles.normal}>
      <Nav />
      <div className={styles.carousel}>
        <Carousel autoplay>
          <div><img width='950' height='300' src={carousel1} /></div>
          <div><img width='950' src={carousel1} /></div>
          <div><img width='950' src={carousel1} /></div>
          <div><img width='950' src={carousel1} /></div>
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
