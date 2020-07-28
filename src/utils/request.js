import app from './tcb.js';

export default options => {
    return app.callFunction({
      // 云函数名称
      ...options
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
        console.log(error);
    })
};
