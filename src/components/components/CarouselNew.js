import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 260px;
  overflow: hidden;
  border-radius: 8px;
`;

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  dummyData = [{
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-1.jpg",
        previewImg: "./img/items/static-1.jpg",
        title: "Pinky Ocean",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-10.jpg",
        previewImg: "./img/items/static-2.jpg",
        title: "Deep Sea Phantasy",
        price: "0.06 ETH",
        bid: "1/22",
        likes: 80
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-11.jpg",
        previewImg: "./img/items/static-3.jpg",
        title: "Rainbow Style",
        price: "0.05 ETH",
        bid: "1/11",
        likes: 97
    },
    {
        deadline:"January, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/static-4.jpg",
        title: "Two Tigers",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/anim-4.webp",
        title: "The Truth",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 15, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-2.jpg",
        previewImg: "./img/items/anim-2.webp",
        title: "Running Puppets",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-3.jpg",
        previewImg: "./img/items/anim-1.webp",
        title: "USA Wordmation",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-4.jpg",
        previewImg: "./img/items/anim-5.webp",
        title: "Loop Donut",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 3, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-5.jpg",
        previewImg: "./img/items/anim-3.webp",
        title: "Lady Copter",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-7.jpg",
        previewImg: "./img/items/static-5.jpg",
        title: "Purple Planet",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-6.jpg",
        previewImg: "./img/items/anim-6.webp",
        title: "Oh Yeah!",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-8.jpg",
        previewImg: "./img/items/anim-7.webp",
        title: "This is Our Story",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/static-6.jpg",
        title: "Pixel World",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/anim-8.webp",
        title: "I Believe I Can Fly",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
  }]
  constructor(props) {
      super(props);
      this.state = { deadline: "January, 10, 2022", deadline1: "February, 10, 2022", deadline2: "February, 1, 2022" };
  }
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
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
      { id: 1,  nftname: "#55", price: "0.8 BNB", num: "1/22", health: 90, author: "./img/author/author-1.jpg", url: "/art/55.png" },
      { id: 2,  nftname: "#60", price: "0.7 BNB", num: "1/15", health: 80, author: "./img/author/author-2.jpg", url: "/art/60.png" },
      { id: 3,  nftname: "#65", price: "0.6 BNB", num: "1/13", health: 70, author: "./img/author/author-3.jpg", url: "/art/65.png" },
      { id: 4,  nftname: "#83", price: "0.5 BNB", num: "1/10", health: 60, author: "./img/author/author-4.jpg", url: "/art/83.png" },
      { id: 5,  nftname: "#114", price: "0.8 BNB", num: "1/20", health: 80, author: "./img/author/author-5.jpg", url: "/art/114.png" },
      { id: 6,  nftname: "#133", price: "0.9 BNB", num: "1/5", health: 70, author: "./img/author/author-6.jpg", url: "/art/133.png" },
      { id: 7,  nftname: "#138", price: "0.5 BNB", num: "1/10", health: 80, author: "./img/author/author-7.jpg", url: "/art/138.png" },
      { id: 8,  nftname: "#205", price: "0.5 BNB", num: "1/14", health: 90, author: "./img/author/author-8.jpg", url: "/art/205.png" },
      { id: 9,  nftname: "#207", price: "0.6 BNB", num: "1/8", health: 70, author: "./img/author/author-9.jpg", url: "/art/207.png" },
      { id: 10, nftname: "#213", price: "0.8 BNB", num: "1/10", health: 80, author: "./img/author/author-10.jpg", url: "/art/213.png" },
      { id: 11, nftname: "#219", price: "0.5 BNB", num: "1/5", health: 90, author: "./img/author/author-4.jpg", url: "/art/219.png" },
      { id: 12, nftname: "#242", price: "0.9 BNB", num: "1/9", health: 60, author: "./img/author/author-6.jpg", url: "/art/242.png" },
      { id: 13, nftname: "#353", price: "0.5 BNB", num: "1/10", health: 70, author: "./img/author/author-7.jpg", url: "/art/353.png" },
      { id: 14, nftname: "#488", price: "0.8 BNB", num: "1/5", health: 95, author: "./img/author/author-4.jpg", url: "/art/488.png" },
      { id: 15, nftname: "#506", price: "0.7 BNB", num: "1/2", health: 70, author: "./img/author/author-5.jpg", url: "/art/506.png" },
    ];
    return (
        <div className='nft'>
          <Slider {...settings}>
            {NFTList.map(item => { 
              return (
                <CustomSlide className='itm' key={item.id} index={item.id}>
                  <div className="d-item">
                    <div className="nft__item slider-item">
                        {/* <div className="de_countdown">
                        <Clock deadline={this.state.deadline} />
                        </div> */}
                        <div className="author_list_pp">
                            <span onClick={()=> window.open("/home1", "_self")}>                                    
                            <img className="lazy" src={ item.author} alt=""/>
                              <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <div className="nft__item_wrap">
                          <Outer>
                            <span>
                              <img src={ item.url } className="lazy nft__item_preview" alt=""/>
                            </span>
                          </Outer>
                        </div>
                        <div className="nft__item_info">
                            <span onClick={()=> window.open("/#", "_self")}>
                              <h4>{ item.nftname }</h4>
                            </span>
                            <div className="nft__item_price">
                              {item.price}<span>{ item.num }</span>
                            </div>
                            <div className="nft__item_action">
                              <div className="nft_item_actbtn" onClick={()=> window.open("/#", "_self")}>
                                <h4>Place&nbsp;a&nbsp;bid</h4>
                                <h4>Place&nbsp;a&nbsp;bid</h4>
                              </div>
                              {/* <span onClick={()=> window.open("/#", "_self")}>Place a bid</span> */}
                            </div>
                            <div className="nft__item_like">
                              <i className="fa fa-heart"></i><span>{ item.health}</span>
                            </div>                            
                        </div> 
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
