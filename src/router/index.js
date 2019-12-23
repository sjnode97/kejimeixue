import React, {Component} from 'react';
import {Switch,Route,Redirect} from "react-router";
import Index from "../components/index/index"
import History from "../components/history";
import Technology from "../components/technology";
import ReactI from "../components/technology/react";
import Vue from "../components/technology/vue";
import Node from "../components/technology/node";
import Angular from "../components/technology/angular";
import Read from "../components/read";
import Sunjian from "../components/sunjian/sunjian";
import User from "../components/user/user";
export default class RouterIndex extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path={"/"}  render={()=>(
                        <Redirect to={"/index"} />
                    )}></Route>
                    <Route path={"/index"} component={Index}></Route>
                    <Route path={"/history"} component={History}></Route>
                    <Route path={"/read"} component={Read}></Route>
                    <Route path={"/technology"} exact component={Technology}></Route>
                    <Route path={"/technology/vue"} component={Vue}></Route>
                    <Route path={"/technology/node"} component={Node}></Route>
                    <Route path={"/technology/react"} component={ReactI}></Route>
                    <Route path={"/technology/angular"} component={Angular}></Route>
                    <Route path={"/user"} component={User}></Route>
                    <Route path={"/sunjian"} component={Sunjian}></Route>
                </Switch>
            </div>
        );
    }
}

