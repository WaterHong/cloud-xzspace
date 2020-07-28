const tcb = require("tcb-js-sdk");
const app = tcb.init({
  env: "env-8gx9j3xs8e9a6d63"
});

const auth = app.auth();

async function login(){
  await auth.signInAnonymously();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState();
  console.log(loginState.isAnonymousAuth ? "login success" : "oops!"); // true
}

//登录tcb
login();

export default app ;