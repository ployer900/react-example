/**
 * 基本组件例子
 */
import React, {Component} from 'react';


export default class Example extends Component {
    /**
     * 构造函数
     * @param  {[type]} props [description]
     * @return {[type]}       [description]
     */
    constructor(props) {
        super(props);
    }

    /**
     * DOM节点挂载后的生命周期方法
     * @return {[type]} [description]
     */
    componentDidMount() {

    }

    /**
     * to do ...
     * 这里可以根据需要添加react组件
     * 的其他生命周期方法
     */


    /**
     * 渲染组件，吐出视图
     * @return {[type]} [description]
     */
    render() {
        return (
                <div className="example">this is a example component, developing your own component according to you circumstance</div>
            );
    }
}

