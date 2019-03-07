
import { Menu, Icon } from 'antd'
import router from 'umi/router'

const SubMenu = Menu.SubMenu
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
      <Menu.Item key='one'>
        <Icon type='one' />功能1
      </Menu.Item>
      <Menu.Item key='user'>
        <Icon type='user' />功能2
      </Menu.Item>
      <SubMenu title={<span className='submenu-title-wrapper'><Icon type='setting' />功能3</span>}>
        <Menu.Item key='setting:1'>Option 1</Menu.Item>
        <Menu.Item key='setting:2'>Option 2</Menu.Item>
        <Menu.Item key='setting:3'>Option 3</Menu.Item>
        <Menu.Item key='setting:4'>Option 4</Menu.Item>
      </SubMenu>
      <Menu.Item key='alipay'>
        功能4
      </Menu.Item>
    </Menu>)
}
