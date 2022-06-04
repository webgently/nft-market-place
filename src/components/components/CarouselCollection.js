import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    const NFTList = [
      { id: 1,  name: "Johnny", chainType: "ERC-192", auther: "./img/author/author-1.jpg" , url: "./art/55.png" },
      { id: 2,  name: "Jenny", chainType: "ERC-61", auther: "./img/author/author-2.jpg" , url: "./art/133.png" },
      { id: 3,  name: "Sam", chainType: "ERC-126", auther: "./img/author/author-3.jpg" , url: "./art/2149.png" },
      { id: 4,  name: "Dean", chainType: "ERC-73", auther: "./img/author/author-4.jpg" , url: "./art/5759.png" },
      { id: 5,  name: "Tom", chainType: "ERC-85", auther: "./img/author/author-5.jpg" , url: "./art/2373.png" },
      { id: 6,  name: "Carter", chainType: "ERC-42", auther: "./img/author/author-6.jpg" , url: "./art/6718.png" },
      { id: 7,  name: "Amik", chainType: "ERC-126", auther: "./img/author/author-7.jpg" , url: "./art/5871.png" },
      { id: 8,  name: "Henry", chainType: "ERC-85", auther: "./img/author/author-8.jpg" , url: "./art/6739.png" },
      { id: 9,  name: "elizabeth", chainType: "ERC-61", auther: "./img/author/author-9.jpg" , url: "./art/1645.png" },
      { id: 10, name: "Tanya", chainType: "ERC-126", auther: "./img/author/author-10.jpg" , url: "./art/988.png" }
    ]
    return (
        <div className='nft'>
        <Slider {...settings}>
          {NFTList.map(item => { 
            return (
              <CustomSlide className='itm' key={item.id} index={item.id}>
                <div className="nft_coll owner-nft">
                  <div className="nft_wrap">
                    <span><img src={ item.url} className="lazy img-fluid b-radius" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                  <span onClick={() => window.open("/home", "_self")}><img className="lazy" src={ item.auther } alt=""/></span>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                  <span onClick={() => window.open("/home", "_self")}><h4>{item.name }</h4></span>
                    <span>{item.chainType}</span>
                  </div>
                </div>
              </CustomSlide>
            )
          })}
          </Slider>
        </div>
    );
  }
}
