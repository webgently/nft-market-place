import React, { Component } from "react";
import Clock from "./Clock";

export default class Responsive extends Component {
    dummyData = [{
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-1.jpg",
        previewImg: "./art/55.png",
        title: "#55",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-10.jpg",
        previewImg: "./art/60.png",
        title: "#60",
        price: "0.6 BNB",
        bid: "1/22",
        likes: 80
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-11.jpg",
        previewImg: "./art/65.png",
        title: "#65",
        price: "0.5 BNB",
        bid: "1/11",
        likes: 97
    },
    {
        deadline:"January, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./art/83.png",
        title: "#83",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/114.png",
        title: "#114",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 15, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-2.jpg",
        previewImg: "./art/133.png",
        title: "#133",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-3.jpg",
        previewImg: "./art/138.png",
        title: "#138",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-4.jpg",
        previewImg: "./art/205.png",
        title: "#205",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 3, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-5.jpg",
        previewImg: "./art/207.png",
        title: "#207",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-7.jpg",
        previewImg: "./art/213.png",
        title: "#213",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-6.jpg",
        previewImg: "./art/219.png",
        title: "#219",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-8.jpg",
        previewImg: "./art/242.png",
        title: "#242",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/506.png",
        title: "#506",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/507.png",
        title: "#507",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/515.png",
        title: "#515",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/516.png",
        title: "#516",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/533.png",
        title: "#533",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/642.png",
        title: "#642",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/643.png",
        title: "#643",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/875.png",
        title: "#875",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/877.png",
        title: "#877",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/988.png",
        title: "#988",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1170.png",
        title: "#1170",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1182.png",
        title: "#1182",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1410.png",
        title: "#1410",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1569.png",
        title: "#1569",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1583.png",
        title: "#1583",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1645.png",
        title: "#1645",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1696.png",
        title: "#1696",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1764.png",
        title: "#1764",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1887.png",
        title: "#1887",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/1899.png",
        title: "#1899",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2148.png",
        title: "#2148",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2149.png",
        title: "#2149",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2373.png",
        title: "#2373",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2149.png",
        title: "#2149",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2373.png",
        title: "#2373",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2149.png",
        title: "#2149",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2373.png",
        title: "#2373",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2581.png",
        title: "#2581",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2584.png",
        title: "#2584",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/2669.png",
        title: "#2669",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/4371.png",
        title: "#4371",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/4496.png",
        title: "#4496",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5400.png",
        title: "#5400",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5411.png",
        title: "#5411",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5526.png",
        title: "#5526",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5527.png",
        title: "#5527",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5759.png",
        title: "#5759",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5780.png",
        title: "#5780",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/5871.png",
        title: "#5871",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    

        {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/6169.png",
        title: "#6169",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/6231.png",
        title: "#6231",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/6434.png",
        title: "#6434",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
        },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/6596.png",
        title: "#6596",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/6718.png",
        title: "#6718",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./art/6739.png",
        title: "#6739",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./art/488.png",
        title: "#488",
        price: "0.8 BNB",
        bid: "1/20",
        likes: 50
    }]
    constructor(props) {
        super(props);
        this.state = {
            nfts: this.dummyData.slice(0,8),
            height: 0
        };
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    loadMore = () => {
        let nftState = this.state.nfts
        let start = nftState.length
        let end = nftState.length+4
        this.setState({
            nfts: [...nftState, ...(this.dummyData.slice(start, end))]
        });
    }
    onImgLoad({target:img}) {
        let currentHeight = this.state.height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }
    render() {
        return (
            <div className='row'>
                {this.state.nfts.map( (nft, index) => (
                    <div key={index} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="nft__item m-0 slider-item">
                            { nft.deadline &&
                                <div className="de_countdown">
                                    <Clock deadline={nft.deadline} />
                                </div>
                            }
                            <div className="author_list_pp">
                                <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
                                    <img className="lazy" src={nft.authorImg} alt=""/>
                                    <i className="fa fa-check"></i>
                                </span>
                            </div>
                            <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                                <span>
                                    <img onLoad={this.onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
                                </span>
                            </div>
                            <div className="nft__item_info">
                                <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                    <h4>{nft.title}</h4>
                                </span>
                                <div className="nft__item_price">
                                    {nft.price}<span>{nft.bid}</span>
                                </div>
                                <div className="nft__item_action">
                                    <div className="nft_item_actbtn" onClick={()=> window.open("/#", "_self")}>
                                        <h4>Place&nbsp;a&nbsp;bid</h4>
                                        <h4>Place&nbsp;a&nbsp;bid</h4>
                                    </div>
                                    {/* <span onClick={()=> window.open(nft.bidLink, "_self")}>Place a bid</span> */}
                                </div>
                                <div className="nft__item_like">
                                    <i className="fa fa-heart"></i><span>{nft.likes}</span>
                                </div>                            
                            </div> 
                        </div>
                    </div>  
                ))}
                { this.state.nfts.length !== this.dummyData.length &&
                    <div className='col-lg-12'>
                        <div className="spacer-single"></div>
                        <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
                    </div>
                }
            </div>              
        );
    }
}