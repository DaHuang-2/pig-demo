import React from "react"
import { Button } from "antd-mobile"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./Register.less"

class Register extends React.PureComponent {
  RegisterClick = () => {
    console.log(123)
    const username = this.users.value
    console.log(username)
    const password = this.password.value
    console.log(password)
    let users = localStorage.getItem("users")
    if (users) {
      users = JSON.parse(users)
      if (users.username === username && users.password === password) {
        alert("注册成功")
        this.props.history.push("/login")
      } else {
        this.props.history.push("/register")
        localStorage.setItem("users", JSON.stringify({ username, password }))
      }
    } else {
      localStorage.setItem("users", JSON.stringify({ username, password }));
      this.props.history.push("/login");
    }
    else{
      localStorage.setItem("users", JSON.stringify({ username, password }));
      this.props.history.push("/register");
    }
  }
  // RegisterClick = () => {

  //   let obj = [];
  //   const username = this.users.value;
  //   const password = this.password.value;
  //   let ls_users = localStorage.getItem("users");

  //   if (ls_users) {
  //     //如果ls_users存在证明已有至少用户注册,
  //     obj = JSON.parse(ls_users);
  //     console.log(obj);

  //     //对本地存储数据进行遍历和输入值对比
  //     let fg = obj.some(item => {
  //       if (item.username === username) return true; //用户名已存在
  //     });

  //     if (fg) {
  //       //fg为真找到用户名，接下里对密码判断
  //       //对存储数据遍历，比对用户名名与密码
  //       let f = false;
  //       obj.map(item => {
  //         if (item.username === username && item.password === password) {
  //           f = true;
  //           return f;
  //         }
  //       });
  //       if (f) {
  //         //查询正确可以正常登录
  //         alert("登录成功");
  //         this.props.history.push("/home");
  //       } else {
  //         alert("密码错误");
  //       }
  //     } else {
  //       //没找到对将用户保存到本地，进行自动注册
  //       obj.push({ username, password });
  //       localStorage.setItem("users", JSON.stringify(obj));
  //       this.props.history.push("/home");
  //     }
  //   } else {
  //     //没有用户注册，直接保存到本地存储
  //     obj.push({ username, password });
  //     localStorage.setItem("users", JSON.stringify(obj));
  //     this.props.history.push("/home");
  //   }
  // };

  render() {
    return (
      <div className='page-register'>
        {/* 头部 */}
        <div className='headerbar'>
          <Link to='/center'>
            <i className='iconfont icon-cha'></i>
          </Link>
        </div>

        {/* 内容 */}
        <div className='container'>
          <div className='hualogo'>
            <p>账号注册</p>
          </div>
          <div className='formgroup'>
            <div className='formgroup-input'>
              <input
                type='text'
                placeholder='请输入账号'
                ref={el => (this.users = el)}
              />
            </div>
          </div>
          {/* <div className="formgroup">
            <div className="formgroup-input">
              <input type="text" placeholder="请输入短信验证码" />
              <div className="formgroup-btn">获取验证码</div>
            </div>
          </div> */}
          <div className='formgroup'>
            <div className='formgroup-input'>
              <input
                type='password'
                placeholder='请设置密码'
                ref={el => (this.password = el)}
              />
            </div>
          </div>
          <div className='form-btn'>
            <Button
              onClick={this.RegisterClick}
              type='warning'
              style={{
                borderRadius: "50px",
                backgroundColor: "#ff734c"
              }}
            >
              注册
            </Button>
          </div>
          <div className='flex'>
            {/* <div className="flex-left">
              账号密码登录
              <i className="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
            </div> */}
            <div className='flex-right'>
              <Link to='/login'>已有帐号，去登录</Link>
              <i className='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></i>
            </div>
          </div>
        </div>
        {/* 其他登录方式 */}
        <div className='other'>
          <div className='other-item inline'>
            <a href='https://m.hua.com/Passport/QQ/Login'>
              <i className='iconfont icon-QQ'></i>
              <span>QQ</span>
            </a>
          </div>
          <div className='other-item'>
            <span>|</span>
          </div>
          <div className='other-item'>
            <a href='https://m.hua.com/Passport/Alipay/Login'>
              <i className='iconfont icon-zhifubao'></i>
              <span>支付宝</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
