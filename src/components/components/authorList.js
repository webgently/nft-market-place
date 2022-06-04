import React from 'react';

const author = [
    { id: 1,  name: "Johnny", price: "5 BNB", auther: "./img/author/author-1.jpg" },
    { id: 2,  name: "Jenny", price: "4 BNB", auther: "./img/author/author-2.jpg" },
    { id: 3,  name: "Sam", price: "5.5 BNB", auther: "./img/author/author-3.jpg" },
    { id: 4,  name: "Dean", price: "3.2 BNB", auther: "./img/author/author-4.jpg" },
    { id: 5,  name: "Tom", price: "4.5 BNB", auther: "./img/author/author-5.jpg" },
    { id: 6,  name: "Carter", price: "6 BNB", auther: "./img/author/author-6.jpg" },
    { id: 7,  name: "Amik", price: "8 BNB", auther: "./img/author/author-7.jpg" },
    { id: 8,  name: "Henry", price: "2.2 BNB", auther: "./img/author/author-8.jpg" },
    { id: 9,  name: "elizabeth", price: "2.5 BNB", auther: "./img/author/author-9.jpg" },
    { id: 10, name: "Tanya", price: "4 BNB", auther: "./img/author/author-10.jpg" },
    { id: 11, name: "Tanya", price: "5 BNB", auther: "./img/author/author-11.jpg" },
    { id: 12, name: "Tanya", price: "5.5 BNB", auther: "./img/author/author-12.jpg" }
]
const authorlist= () => (
    <div>
        <ol className="author_list">
            {author.map(item => { 
                return (
                    <li>                                    
                        <div className="author_list_pp">
                            <span onClick={()=> window.open("", "_self")}>
                                <img className="lazy" src={ item.auther } alt=""/>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>                                    
                        <div className="author_list_info">
                            <span onClick={() => window.open("", "_self")}>{item.name }</span>
                            <span className="bot">{ item.price}</span>
                        </div>
                    </li>
                )
            })}
        </ol>
  </div>
);
export default authorlist;