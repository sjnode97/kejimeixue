import React, {Component} from 'react';
import {Menu,Row,Col} from "antd";
import {Link} from "react-router-dom";
import "antd/dist/antd.min"
import logo from "../../../assets/imgs/logo.png"
export default class Nav extends Component {
    constructor(ag){
        super(ag);
        this.state={
            nav:{
                index:"首页",
                technology:"技术",
                read:"阅读",
                history:"历史",
                ico:"icn"
            }
        }
    }
    render() {
        return (
            <div className={"solid"}>
                <Row className={"nav"} justify={"center"}>
                    <Col span={12}>
                        <Link to={"/"} className={"logo"}>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </Col>
                    <Col span={12}>
                        <Menu className={"navlist"} mode={"horizontal"}>
                            <Menu.Item><Link to={"/index"}>{this.state.nav.index}</Link></Menu.Item>
                            <Menu.Item><Link to={"/technology"}>{this.state.nav.technology}</Link></Menu.Item>
                            <Menu.Item><Link to={"/history"}>{this.state.nav.history}</Link></Menu.Item>
                            <Menu.Item><Link to={"/read"}>{this.state.nav.read}</Link></Menu.Item>
                            <Menu.Item><Link to={"/user"}>{this.state.nav.ico}</Link></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}

