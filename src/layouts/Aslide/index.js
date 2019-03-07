import { Menu, Icon } from 'antd';
import React from 'react'

const SubMenu = Menu.SubMenu;

export default class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>联系我们</span></span>}>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>学车流程</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>在线报名</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>咨询投诉</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>人才招聘</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>校长信箱</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>班车路线</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>交通法规</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>新手上路</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>学车指南</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>驾校风采</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>驾校资讯</span></span>}>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>驾校简介</span></span>}>
        </SubMenu>
      </Menu>
    );
  }
}
