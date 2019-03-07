
import { Menu } from 'antd'
import router from 'umi/router'

export default function () {
  const state = {
    current: 'one'
  }
  const handleClick = (e) => {
    console.log('click ', e)
    router.push(e.key)
  }
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[state.current]}
      mode='horizontal'
    >
      <Menu.Item key='index'>
       网站首页
      </Menu.Item>
      <Menu.Item key='info'>
        驾校简介
      </Menu.Item>
      <Menu.Item key='news'>
        驾校资讯
      </Menu.Item>
      <Menu.Item key='gallery'>
        驾校风采
      </Menu.Item>
      <Menu.Item key='guide'>
        学车指南
      </Menu.Item>
      <Menu.Item key='noob'>
        新手上路
      </Menu.Item>
      <Menu.Item key='rule'>
        交通法规
      </Menu.Item>
      <Menu.Item key='about'>
        联系我们
      </Menu.Item>
    </Menu>)
}
