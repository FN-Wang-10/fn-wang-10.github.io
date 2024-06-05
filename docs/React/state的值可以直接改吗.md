this.state.message = "你好啊,李银河";可以改但是不会触发页面更新  
setState 直接改是不会触发 render 更新的，需要使用 this.setState
