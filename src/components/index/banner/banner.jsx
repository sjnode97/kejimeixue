import React, {Component} from 'react';
import Img from "../../../assets/imgs/banner1.png"
import Nav from "../nav/nav";
import "antd/dist/antd.min.css"
import {Row,Col} from "antd";
import {Link} from "react-router-dom";
import Swiper from "swiper";
import 'swiper/css/swiper.min.css'
import Swiper1 from "../../../assets/imgs/swiper-1.png"
import Swiper2 from "../../../assets/imgs/swiper-2.png"

export default class Banner extends Component {
    componentDidMount(){
        new Swiper('.swiper-container', {
            progress: true,
            loop: true,     //循环
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 2500,
                disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });

    }
    ti(e){
        let onf=document.getElementsByClassName("onoff");
        onf[0].style.display="block"
        onf[1].style.display="block"
        e.preventDefault();

    }
    yi(e){
        let onf=document.getElementsByClassName("onoff");
        onf[0].style.display="none"
        onf[1].style.display="none"
        e.preventDefault();
    }

    render() {
        return (
            <div className={"banner"}>
                <Nav/>
                <div className={"bannerImg"}>
                    <img src={Img} alt=""/>
                </div>
                <Row className={"banner-data"}>
                    <Col span={12}>
                        <h1 className={"banner-h1"}>探索与我的执着<br/>与热爱</h1>
                        <p>
                            <Link to={"/sunjian"}>
                                关于博主
                            </Link>
                            <i>> </i>
                            <i className={"clearfix"}></i>
                        </p>
                    </Col>
                    <Col span={12} className={"banner-swiper"} >
                        <div className={"swiper-index"}
                             onMouseOver={this.ti.bind(this)}
                             onMouseLeave={this.yi.bind(this)}
                        >
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <Link to={"/"}>
                                            <div className={"slide-1"}><img src={Swiper1} alt="#"/></div>
                                        </Link>
                                    </div>
                                    <div className="swiper-slide slide">
                                        <Link to={"/history"}>
                                            <div className={"slide-1"}><img src={Swiper2} alt="#"/></div>
                                        </Link>
                                    </div>
                                    <div className="swiper-slide slide">
                                        <Link to={"/read"}>
                                            <div className={"slide-1"}><img src={Swiper1} alt="#"/></div>
                                        </Link>
                                    </div>
                                </div>
                                {/*如果需要分页器 */}
                                <div className="swiper-pagination"></div>

                                {/*如果需要导航按钮*/}
                                        <div className="swiper-button-prev onoff"></div>
                                        <div className="swiper-button-next onoff"></div>
                                {/*如果需要滚动条*/}
                                {/*<div className="swiper-scrollbar"></div>*/}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

