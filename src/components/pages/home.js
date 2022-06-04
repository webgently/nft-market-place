import React from 'react';
import SliderCarousel from '../components/SliderCarousel';
import CarouselCollection from '../components/CarouselCollection';
import CarouselNew from '../components/CarouselNew';
import AuthorList from '../components/authorList';
import Browsercategory from '../components/Browsecategory';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar .search #quick_search{
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const homethree= () => (
  <div>
    <GlobalStyles />
    <section className="jumbotron no-bg no-bottom"><br />
      <div className='container-fluid'>
        <div className='row'>
            <SliderCarousel/>
        </div>
      </div>
    </section>
    <section className='container no-bottom'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
            <h2 className='style-2'>Hot Collections</h2>
            <div className="small-border"></div>
        </div>
      </div>
      <div className='container no-top'>
        <div className='row'>
          <div className='col-lg-12 px-0'>
            <CarouselCollection/>
          </div>
        </div>
      </div>
    </section>
    <section className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
            <h2 className='style-2'>New Items</h2>
            <div className="small-border"></div>
        </div>
      </div>
      <CarouselNew/>
    </section>
    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
            <h2 className='style-2'>Top Seller</h2>
            <div className="small-border"></div>
        </div>
        <div className='col-lg-12'>
          <AuthorList/>
        </div>
      </div>
    </section>
    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
            <h2 className='style-2'>Browse Category</h2>
            <div className="small-border"></div>
        </div>
      </div>
      <div className='container px-0'>
        <Browsercategory />                 
      </div>
    </section>
    <Footer />
  </div>
);
export default homethree;