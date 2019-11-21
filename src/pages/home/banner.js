import React from 'react'
import { Carousel } from 'antd-mobile';
// import { black } from '_ansi-colors@3.2.4@ansi-colors';

export default class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['https://ftp.bmp.ovh/imgs/2019/10/6df0f572448ab71f.jpg', 'https://ftp.bmp.ovh/imgs/2019/10/ee8deb1f917aa6a3.jpg', 'https://ftp.bmp.ovh/imgs/2019/10/ff54483454231d8c.jpg'],
      });
    }, 100);
  }
  render() {
    return (
        // 写样式需要多加个{}
        <Carousel
          autoplay={false}
          infinite
          dotStyle={{
             backgroundColor: '#333'
          }}
          dotActiveStyle ={{
            backgroundColor: '#e54847',
            width: '0.1rem',
            height: '0.1rem'
          }}
          style= {{
            height: '2rem',
            flexShrink: 0,
          }}
        >
          {this.state.data.map((val,index) => (
            <a
              key={index}
              //href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '2rem'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
     
    );
  }
}

