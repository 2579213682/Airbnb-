import { PureComponent } from "react";

function logRenderTime (OriginComponent) {
  return class NewComponent extends PureComponent {
    UNSAFE_componentWillMount () {
      this.beginTime = new Date().getTime()
    }

    componentDidMount () {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(`当前页面${OriginComponent.name}花费${interval}ms渲染完成`)
    };

    render () {
      return <OriginComponent {...origin} />
    }
  }
}
export default logRenderTime