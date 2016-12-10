/**
 * 主文件
 */

/**
 * 引入样式文件
 */
import '../style/app.scss';

/**
 * 引入react库和相应组件
 */
import React from 'react';
import ReactDom from 'react-dom';
import Example from '../component/example';



/**
 * 启动程序
 */
(function() {
    ReactDom.render(<Example />, document.getElementById('app'));
})();