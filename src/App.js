import { useState } from 'react';
import './App.css';
import './detailProduct.css';

import { BsFillCheckCircleFill } from 'react-icons/bs'

function App() {
  const [product, setProduct] = useState([
    {
      img: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B',
      title: 'COM SIEU MAI',
      price: '69.0000d',
      content: 'Bánh mì kẹp thịt heo Việt Nam'

    },
    {
      img: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B',
      title: 'COM SIEU MAI',
      price: '69.0000d',
      content: 'Bánh mì kẹp thịt heo Việt Nam'

    },
    {
      img: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B',
      title: 'COM SIEU MAI',
      price: '69.0000d',
      content: 'Bánh mì kẹp thịt heo Việt Nam'

    },
    {
      img: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B',
      title: 'COM SIEU MAI',
      price: '69.0000d',
      content: 'Bánh mì kẹp thịt heo Việt Nam'

    },
    {
      img: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B',
      title: 'COM SIEU MAI',
      price: '69.0000d',
      content: 'Bánh mì kẹp thịt heo Việt Nam'

    },
  ]);

  return (
    <div>
      <section className='services' id='services'>
        <div className='max-width'>
          <h3 className='title'></h3>
          <div className='product' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px', width: '100%' }}>
            <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src='https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B' alt="" />

            <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px', width: '70%' }}>
              <div style={{ display: 'flex' }}>
                <h2>COM SIEU MAI</h2>
                <span style={{ width: '80%', height: '38px', borderBottomStyle: 'dotted' }}></span>
                <h3>69,000đ</h3>
              </div>
              <span>Bánh mì kẹp thịt heo Việt Nam</span>
            </div>
          </div>

          <div className='product' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px', width: '100%' }}>
            <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src='https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B' alt="" />

            <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px', width: '70%' }}>
              <div style={{ display: 'flex' }}>
                <h2>COM CHAY</h2>
                <span style={{ width: '80%', height: '38px', borderBottomStyle: 'dotted' }}></span>
                <h3>69,000đ</h3>
              </div>
              <span>Bánh mì kẹp thịt heo Việt Nam</span>
            </div>
          </div>
        </div>
      </section >

      <section className='services' id='services'>
        <div className='max-width'>
          <h3 className='title1'></h3>
          <div style={{ display: 'flex', flexDirection: 'colum', justifyContent: 'center' }}>
            <div className='product' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px', width: '40%' }}>
              <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src='https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B' alt="" />

              <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
                <div style={{ display: 'flex' }}>
                  <h2>BANH MI HEO QUAY</h2>
                  <span style={{ width: '200px', height: '38px', borderBottomStyle: 'dotted' }}></span>
                  <h3>69,000đ</h3>
                </div>
                <span>Bánh mì kẹp thịt heo Việt Nam</span>
              </div>
            </div>

            <div className='product' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px', width: '40%' }}>
              <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src='https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B' alt="" />

              <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
                <div style={{ display: 'flex' }}>
                  <h2>BANH MI GA XA</h2>
                  <span style={{ width: '200px', height: '38px', borderBottomStyle: 'dotted' }}></span>
                  <h3>69,000đ</h3>
                </div>
                <span>Bánh mì kẹp thịt heo Việt Nam</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'colum', justifyContent: 'center' }}>
            <div className='product' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px', width: '40%' }}>
              <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src='https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B' alt="" />

              <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
                <div style={{ display: 'flex' }}>
                  <h2>BANH MI SIEU MAI</h2>
                  <span style={{ width: '200px', height: '38px', borderBottomStyle: 'dotted' }}></span>
                  <h3>69,000đ</h3>
                </div>
                <span>Bánh mì kẹp thịt heo Việt Nam</span>
              </div>
            </div>

            <div className='product' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px', width: '40%' }}>
              <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src='https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/314703622_852123449540049_4265168496833332752_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w2IBPyWOAK0AX_TbmVW&_nc_ht=scontent.fdad3-6.fna&oh=03_AdSmiQvK4yrb16ZVsvveOi7XzMUEplmfOA8Zic3mCu8WMg&oe=639EDF0B' alt="" />

              <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
                <div style={{ display: 'flex' }}>
                  <h2>BANH MI XA XIU</h2>
                  <span style={{ width: '200px', height: '38px', borderBottomStyle: 'dotted' }}></span>
                  <h3>69,000đ</h3>
                </div>
                <span>Bánh mì kẹp thịt heo Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className='services' id='services'>
        <div className='max-width'>
          <h3 className='title2'></h3>
          <div className="product-container">
            {product.map((item) => {
              return <ServiceProduct img={item.img} title={item.title} price={item.price} content={item.content} />
            })}
          </div>
        </div>
      </section >
    </div >
  );
}

function ServiceProduct(props) {
  return (
    <div className='product-service'>
      <img style={{ cursor: 'pointer', justifyItems: 'flex-start', width: '80px' }} src={props.img} alt="" />
      <div style={{ cursor: 'pointer', margin: '-10px 30px', lineHeight: '50px' }}>
        <div style={{ display: 'flex' }}>
          <h2>{props.title}</h2>
          <span style={{ width: '100px', height: '38px', borderBottomStyle: 'dotted' }}></span>
          <h3>{props.price}</h3>
        </div>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

function App2() {
  return (
    <div>
      <section className='detail' id='details'>
        <div className='max-width'>
          <h3 className='title3'></h3>
          <div className='both-img-content'>
            <img className='img-product' src='https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/315525556_3036552803312151_1436920043068930030_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2dG41myeAJgAX_yXkrR&_nc_ht=scontent.fdad1-3.fna&oh=03_AdTJALJWH39Ec5TbweJR5xkxAzWt-LuRA81ml0tPxNLIHQ&oe=63A027B1' />

            <div className='content-product' style={{ marginLeft: '50px', gap: '10px' }}>
              <h3 className='title4' style={{ fontSize: '25px', margin: '10px 0 10px' }}>COM XA XIU</h3>
              <span className='content' >Banh mi kep thit heo Viet Nam</span>
              <h3 className='thanhPhan' >THANH PHAN</h3>

              <div className='infoProduct'>
                <div className='detailProduct'>
                  <p><BsFillCheckCircleFill style={{ margin: '20px 20px 0 0' }} />Xiên thịt lớn</p>
                  <p className='lineProduct'></p>
                </div>

                <div className='detailProduct'>
                  <p><BsFillCheckCircleFill style={{ BackgroundColor: '', margin: '20px 20px 0 0' }} />Ướp dua chua, cà rốt / củ cải</p>
                  <p className='lineProduct'></p>
                </div>

                <div className='detailProduct'>
                  <p><BsFillCheckCircleFill style={{ BackgroundColor: '', margin: '20px 20px 0 0' }} />Ớt đỏ</p>
                  <p className='lineProduct'></p>
                </div>

                <div className='detailProduct'>
                  <p><BsFillCheckCircleFill style={{ BackgroundColor: '', margin: '20px 20px 0 0' }} />Hành đỏ</p>
                  <p className='lineProduct'></p>
                </div>

                <div className='detailProduct'>
                  <p><BsFillCheckCircleFill style={{ BackgroundColor: '', margin: '20px 20px 0 0' }} />Ngò / Rau mùi</p>
                  <p className='lineProduct'></p>
                </div>

                <div className='detailProduct'>
                  <p><BsFillCheckCircleFill style={{ BackgroundColor: '', margin: '20px 20px 0 0' }} />Ớt Mayonnaise</p>
                  <p className='lineProduct'></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >
    </div >
  );
}

//export default App;

export default App2;