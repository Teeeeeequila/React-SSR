import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return <div>
    <Link to="/">首页</Link>|
    <Link to="/about">关羽页面</Link>|
    <Link to="/user">用户</Link>|
    <Link to="/wqert">不存在</Link>

  </div>
}