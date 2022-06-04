import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from '@reach/router';
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
    const NFTList = [
      { id: 1,  bname: "Johnny", sname: "url", url: "/gif/868.gif" },
      { id: 2,  bname: "Jenny", sname: "url", url: "/gif/1569.gif" },
      { id: 3,  bname: "Sam", sname: "url", url: "/gif/1088.gif" },
      { id: 4,  bname: "Dean", sname: "url", url: "/gif/1712.gif" },
      { id: 5,  bname: "Dean", sname: "url", url: "/gif/6072.gif" },
      { id: 6,  bname: "Dean", sname: "url", url: "/gif/2568.gif" },
      { id: 7,  bname: "Dean", sname: "url", url: "/gif/6386.gif" },
      { id: 8,  bname: "Dean", sname: "url", url: "/gif/4368.gif" },
      { id: 9,  bname: "Dean", sname: "url", url: "/gif/6806.gif" },
      { id: 10, bname: "Dean", sname: "url", url: "/gif/5247.gif" },
      { id: 11, bname: "Johnny", sname: "url", url: "/gif/7050.gif" },
      { id: 12, bname: "Jenny", sname: "url", url: "/gif/5353.gif" },
      { id: 13, bname: "Sam", sname: "url", url: "/gif/8648.gif" },
      { id: 14, bname: "Dean", sname: "url", url: "/gif/5879.gif" },
      { id: 15, bname: "Dean", sname: "url", url: "/gif/9124.gif" },
      { id: 16, bname: "Dean", sname: "url", url: "/gif/6738.gif" },
      { id: 17, bname: "Dean", sname: "url", url: "/gif/9598.gif" },
      { id: 18, bname: "Dean", sname: "url", url: "/gif/9609.gif" },
      { id: 19, bname: "Dean", sname: "url", url: "/gif/9907.gif" },
      { id: 20, bname: "Dean", sname: "url", url: "/gif/9843.gif" }
    ];
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
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

    return (
        <div className='nft-big'>
          <Slider {...settings}>
            { NFTList.map(item => { 
                return (
                  <CustomSlide className='itm' key={item.id} index={item.id}>
                    <div className="nft_pic">                            
                      <span>
                        <Link to="/ItemDetail">
                          <span className="nft_pic_info">
                            <span className="nft_pic_title">live Arts</span>
                            <span className="nft_pic_by">Nicholas Daniels</span>
                          </span>
                        </Link>
                      </span>
                      <div className="nft_pic_wrap">
                        {/* <video autoPlay="true" loop="true" className="lazy img-fluid">
                            <source src="/video/plant1.mp4" type="video/mp4" />
                        </video> */}
                        <img src={item.url} className="lazy img-fluid" alt=""/>
                      </div>
                    </div>
                  </CustomSlide>
                )
              })
            }
          </Slider>
        </div>
    );
  }
}
