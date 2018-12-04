require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
// import imagesURL from '../data/imageDatas.js'
// console.log(imageURL)
let imageDatas = require('../data/imageDatas.json');
// let imageURL = require('../images/1.jpg')
// 利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
  for(let i=0,j=imageDatasArr.length;i<j;i++){
    let singleImageData = imageDatasArr[i];
    singleImageData.imagesURL = require('../images/'+ singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas)
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      <section className="img-sec"></section>
      <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
