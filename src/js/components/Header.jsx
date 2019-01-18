import React, { Component } from 'react';

class Header extends Component {
  state = {
    banner: './assets/images/sideart.png',
    nav: [...this.props.navigation],
  };
  render() {
    const { banner, nav } = this.state;
    const navitems = [...nav];
    return (
      <div className='_init_container' id='introduction'>
        <img className='_init_side_image' src={banner} alt='Art' />
        <div className='_init_nav'>
          <div className='_init_nav_container'>
            {navitems.map(navitem => {
              return (
                <a
                  key={navitem.id}
                  id={navitem.id}
                  className={`_init_nav_item ${navitem.active ? 'active' : ''}`}
                  href={navitem.link}>
                  {navitem.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className='_init_inner_container container'>
          <div className='_init_burger'>
            <span className='top' />
            <span className='mid' />
            <span className='bot' />
          </div>
          <div className='_init_indicators'>
            {navitems.map(navitem => {
              return (
                <a
                  key={navitem.id}
                  id={navitem.id.split('_').pop()}
                  className={`_init_indicators_item ${
                    navitem.active ? 'active' : ''
                  }`}
                  href={navitem.link}>
                  {navitem.name}
                </a>
              );
            })}
          </div>
          <div className='_init_introduction_container'>
            <div className='_init_introduction' id='Introduction'>
              <p className='_init_sub'>Let's talk about the</p>
              <h1 className='_init_title'>State of the Web</h1>
              <p className='_init_description'>
                I'm <span id='description' />
              </p>
              <a className='_init_button' href='#best_practices'>
                Let's Start
              </a>
            </div>
          </div>
          <div className='_init_social_container'>
            <a
              className='_init_social_item'
              target='_blank'
              href='https://artisawesm.com'>
              website
            </a>
            <a
              className='_init_social_item'
              target='_blank'
              href='https://dev.to/artisawesm'>
              dev
            </a>
            <a
              className='_init_social_item'
              target='_blank'
              href='https://github.com/artisawesm'>
              github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
