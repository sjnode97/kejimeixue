import React, {Component} from 'react';
import "antd/dist/antd.min.css"
import "./index.less"
import Banner from "./banner/banner";
import {List,Card} from "antd";
import {Link} from "react-router-dom";
import vuei from ".././../assets/imgs/vue.png"
import reacti from ".././../assets/imgs/react.png"
import anguagei from ".././../assets/imgs/angular.png"
import nodei from ".././../assets/imgs/node.png"

class Index extends Component {
    constructor(ag){
        super(ag);
        this.state={
            technology:[
                {
                        title:"vue"
                        ,explain:"不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。"
                        ,image:vuei
                    }
                ,
                {
                        title:"react"
                        ,explain:"一套框架，多种平台移动端 & 桌面端"
                        ,image:reacti
                    },
                {
                        title:"angular"
                        ,explain:"用于构建用户界面的 JavaScript 库"
                        ,image:anguagei
                    },
                {
                        title:"node"
                        ,explain:"Node.js 使用了一个事件驱动、非阻塞式I/O 的模型，使其轻量又高效"
                        ,image:nodei
                    }
            ],
            route:{

            }
        }
    }

    render() {
        let technology=this.state.technology
        return (
            <div className={"index-box"}>
                    <Banner/>
                    <div className={"technology"}>
                        <h1>技术天地</h1>
                        <List
                            grid={{
                                gutter: [32,16],
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,

                            }}
                            dataSource={technology}
                            renderItem={(item,index) => (
                                <List.Item >
                                    <Card title={item.title} className={"listfour"}>
                                        <Link to={`/technology/${item.title}`} >
                                            <img className={"technology-img"} src={item.image} alt="#"/>
                                            <p className={"technologyp"}>{item.explain}</p>
                                        </Link>
                                    </Card>
                                </List.Item>
                            )}
                        />

                    </div>
            </div>
        );
    }
}

export default Index;