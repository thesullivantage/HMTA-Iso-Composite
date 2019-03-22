import React, { Component } from 'react';
import '../main.css';

// HMTA Demo Page to be deconstructed


class Demo extends Component {
  render() {
    return (
          <div>
            <title>HMTA new site</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" type="text/css" href="/main.css" />
            <div className="site">
              <header className="header">
                <a href="/" className="hmta-logo-link" src="/"><img alt="" src="./assets/hmta logo.png" className="hmta-logo-link-image" /></a>
                <nav className="menu-toggle transition">
                  <span className="toggle-1" />
                  <span className="toggle-2" />
                  <span className="toggle-3" />
                </nav>
              </header>
              <div className="intro-slide block">
                <div className="wrapper">
                  <div className="intro-info">
                    <h1 className="intro-text"> BE <span>BOLD</span></h1>
                    <p className="intro-paragraph">This is where a paragrah would go and what not</p>
                    <button className="intro-button transition">ENTER HERE</button>
                  </div>
                  {/* <div class="intro-title">HAND ME <span class="title-outline">THE AUX</span></div>
              */}
                </div>
              </div>
              <div className="quote-block">
                <div className="quote-bg">
                  <div className="quote-block-info">
                    <h2 className="quote-info-text">
                      HERE WITH MY WINGS CLIPPED
                      </h2>
                  </div>
                </div>
              </div>
              <div className="hmta-menu block">
                <div className="menu-left">
                  <div className="drip">
                    <h1 className="drip-title">HAND ME <span className="title-outline">THE AUX</span></h1>
                    <div className="drip-div" />
                    <img alt="" className="menu-left-img" src="./assets/menu drip.png" />
                  </div>
                </div>
                <div className="menu-right">
                  <nav className="menu-links">
                    <a href="/"> HOME</a>
                    <a href="/"> events</a>
                    <a href="/"> blog</a>
                    <a href="/"> creative services</a>
                    <a href="/"> contact us</a>
                    <a href="/"> artists mngmnt</a>
                    <a href="/"> discover playlist</a>
                  </nav>
                </div>
              </div>
              <div className="discover-weekly block" style={{ backgroundImage: 'url("/dw bg sample.png")' }}>
                <div className="discover-image">
                  <div className="discover-text-block">
                    <div className="discover-info">
                      <div className="discover-title-block">
                        <h1 className="discover-title disc-top">DISCOVER</h1>
                        <div className="dw-bottom">
                          <h1 className="discover-title disc-bottom">WEEKLY</h1>
                        </div>
                      </div>
                      <div className="play-block">
                        <a href="/"> <img alt="" className="play-button discover-play" src="./assets/play button filled play.svg" /></a> <span> PLAY
                            ON SPOTIFY</span>
                      </div>
                      <p>Check out HMTA's editoral staffs' picks of songs for the week! Certified heat; updated every
                          Monday. This week's theme: <b>Pink Slip</b> sponsored by Hennessey.</p>
                    </div>
                  </div>
                  <img alt="" className="discover-image-graphic" src="./assets/dw test graphic.png" />
                  <div className="dw-image-drip" />
                </div>
              </div>
              <div className="artists-slide">
                <div className="artists-wrapper">
                  <div className="aritst-slide-title-block">
                    <div className="artits-slide-title">ARTISTS</div>
                  </div>
                  <div className="artists-slide-artists">
                    <h2> KEENON RUSH</h2>
                    <h2> TROOP BRAND</h2>
                  </div>
                </div>
                <a href="/" className="artists-slide-contact">Contact</a>
              </div>
              <div className="what-we-do-slide block">
                <div className="what-we-do-wrapper">
                  <div className="what-we-do-info">
                    <h1 className="what-we-do-text">what we do</h1>
                    <div className="what-we-do-bar" />
                    <p>this is like the long version of our vision and maybe some icons as wellthis is like the long
                      version of our vision and maybe some icons as wellthis is like the long version of our vision
                      and maybe some icons as wellthis is like the long version of our vision and maybe some icons as
                        well</p>
                  </div>
                  <div className="what-we-do-drip">
                    <img alt="" className="img-collage" src="./assets/wwd.png" />
                    <div className="what-do-drip-bar" />
                  </div>
                </div>
              </div>
              <div className="ar-slide block">
                <div className="ar-wrapper">
                  {/* this is the inside of it */}
                  <h1 className="ar-title">A<span className="ar-outline">&amp;</span>R</h1>
                  <img alt="" className="arc" src="./assets/collage.png" />
                  <ul className="ar-points">
                    <li>Bullet Point 1</li>
                    <li>Bullet Point 2</li>
                    <li>Bullet Point 3</li>
                  </ul>
                  <p className="ar-p"> paragraph goes here and you’d write a bunch of stuff, it’s left aligned</p>
                </div>
              </div>
              <div className="contact-us-slide block">
                <div className="contact-us-left">
                  <img alt="" className="drip-cu" src="./assets/arrow contact.png" />
                </div>
                <form className="slide-cu-form">
                  <h1> Contact <span className="cu-outline">US</span></h1>
                  <p>This is where a paragraph would go and what not </p>
                  <input type="text" name="name" placeholder="name" />
                  <input type="text" name="email" placeholder="email" />
                  <textarea type="text" name="message" placeholder="message" className="large-cu-input" defaultValue={""} />
                  <button className="cu-submit">SEND</button>
                </form>
              </div>
              <div className="creative-services-slide block" style={{ backgroundImage: 'url("cs bg.png")' }}>
                <div className="darken">
                  <div className="c-services">
                    <div className="c-service">
                      <img alt="" src="./assets/camera.svg" />
                      <h2>Photography</h2>
                    </div>
                    <div className="c-service">
                      <img alt="" src="./assets/mv icon.svg" />
                      <h2>Music Videos</h2>
                    </div>
                    <div className="c-service">
                      <img alt="" src="./assets/ps icon.svg" />
                      <h2>Graphic Design</h2>
                    </div>
                  </div>
                  <div className="c-services-info">
                    <div className="c-services-info-text">
                      <h1 className="c-services-title">Creative Services</h1>
                      <p className="c-services-explantion">Paragraph explaining the services</p>
                    </div>
                  </div>
                  <div className="get-services-link">
                    GET SERVICES
                    </div>
                </div>
              </div>
              <div className="events-slide block">
                <div className="events-top-title">HAND ME <span className="title-outline">THE AUX</span></div>
                <div className="events-bottom-title">HAND ME <span className="title-outline">THE AUX</span></div>
                <div className="event-title-link">EVENTS</div>
                <div className="wrapper">
                  <div className="event-slide-feed">
                    <div className="event-slide-event">
                      <img alt="" className="event-long-image" src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2017/05/thr_snl_9978_09_1805_splash.jpg" />
                      <div className="event-date">
                        <h4 className="event-date-day"> 12 </h4>
                        <h1 className="event-date-month">May</h1>
                      </div>
                      <div className="event-long-title">
                        Married to the game
                        </div>
                      <div className="event-long-description">
                        Clients (Aziz Ansari, Sasheer Zamata, Melissa Villaseñor, Pete Davidson) share how they were
                        helped by the law firm of Broderick (Kate McKinnon) &amp; Ganz (Bobby Moynihan).
                        </div>
                      <div className="event-bottom-info">
                        <span className="event-short-address"> Address Here</span><span className="start-time"> Start
                            Time</span>- <span className="end-time"> End Time</span>
                      </div>
                    </div>
                    <div className="event-slide-event">
                      <img alt="" className="event-long-image" src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2017/05/thr_snl_9978_09_1805_splash.jpg" />
                      <div className="event-date">
                        <h4 className="event-date-day"> 12 </h4>
                        <h1 className="event-date-month">May</h1>
                      </div>
                      <div className="event-long-title">
                        Married to the game
                        </div>
                      <div className="event-long-description">
                        Clients (Aziz Ansari, Sasheer Zamata, Melissa Villaseñor, Pete Davidson) share how they were
                        helped by the law firm of Broderick (Kate McKinnon) &amp; Ganz (Bobby Moynihan).
                        </div>
                      <div className="event-bottom-info">
                        <span className="event-short-address"> Address Here</span><span className="start-time"> Start
                            Time</span>- <span className="end-time"> End Time</span>
                      </div>
                    </div>
                  </div>
                  <div className="events-side-feed">
                    <div className="side-event">
                      <div className="event-info">
                        <div className="event-date">
                          <div className="event-date-month">MAY</div>
                          <div className="event-date-day">15</div>
                        </div>
                        <img alt="" className="event-image" src="https://www.dailybreeze.com/wp-content/uploads/2018/09/0921_NWS_TDN-L-LALALAND-0921-2jpg-1.jpg?w=620" />
                      </div>
                      <div className="event-title">Event Title Here</div>
                      <button className="event-ticket-button intro-button">Buy Tickets</button>
                    </div>
                    <div className="side-event">
                      <div className="event-info">
                        <div className="event-date">
                          <div className="event-date-month">MAY</div>
                          <div className="event-date-day">15</div>
                        </div>
                        <img alt="" className="event-image" src="https://www.dailybreeze.com/wp-content/uploads/2018/09/0921_NWS_TDN-L-LALALAND-0921-2jpg-1.jpg?w=620" />
                      </div>
                      <div className="event-title">Event Title Here</div>
                      <button className="event-ticket-button intro-button">Buy Tickets</button>
                    </div>
                    <div className="side-event">
                      <div className="event-info">
                        <div className="event-date">
                          <div className="event-date-month">MAY</div>
                          <div className="event-date-day">15</div>
                        </div>
                        <img alt="" className="event-image" src="https://www.dailybreeze.com/wp-content/uploads/2018/09/0921_NWS_TDN-L-LALALAND-0921-2jpg-1.jpg?w=620" />
                      </div>
                      <div className="event-title">Event Title Here</div>
                      <button className="event-ticket-button intro-button">Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-page">
                <div className="blog-title-bg" style={{ backgroundImage: 'url("http://cache.vevo.com/Content/VevoImages/video/8F469607E26335FF7C3B71469F16A1D6.jpg")' }}>
                  <div className="darken">
                    <div className="blog-page-title-holder">
                      <h1 className="blog-page-title">BLOG</h1>
                    </div>
                  </div>
                </div>
                <div className="blog-main">
                  <div className="blog-posts-feed">
                    <div className="blog-post">
                      <div className="blog-post-pre">
                        <div className="blog-post-cat">Category</div>
                        <div className="blog-post-date">March 1st, 2019</div>
                        <div className="blog-post-share-links">
                        </div>
                      </div>
                      <div className="blog-post-info">
                        <h1 className="bp-title">Blog Title </h1>
                        <div className="author-info">
                          <img alt="" src="https://djbooth.net/.image/t_share/MTYyMTY2MTE3Njk4MTE5NDg5/lil-pump-harverd-dropout-album-review.jpg" />
                          <div className="author-info-text">
                            <div className="by">by <span>Armon Sadler</span></div>
                            <div className="author-pos">Staff Writer</div>
                          </div>
                        </div>
                      </div>
                      <div className="blog-post-post" />
                    </div>
                  </div>
                  <div className="blog-menu">
                    <input type="text" name="search blog" placeholder="search blog" className="blog-search" />
                    <div className="menu-slider">Archive</div>
                    <div className="menu-slider">Recent Posts</div>
                    <div className="menu-link">Lyric Generator</div>
                  </div>
                </div>
              </div>
              <footer>
                <div className="wrapper">
                  <div className="footer-top">
                    <div className="discover-link-footer">
                      <img alt="" src="./assets/play button no fill.svg" /> <span> Discover Playlist </span>
                    </div>
                    <div className="footer-social-links">
                      <p> ndskfndsknfl</p>
                    </div>
                  </div>
                  <div className="footer-main">
                    <div className="footer-info">
                      <div className="footer-hmta-name">
                        <h3 className="footer-hmta-title">Hand Me The Aux LLC</h3>
                        <h4 className="footer-hmta-address">1040 Forest Overlook Trail, Atlanta GA, 30331</h4>
                      </div>
                      <div className="footer-hmta-contact">
                        <h3 className="footer-hmta-contact-title">Connect With Us</h3>
                        <div className>678-313-5746</div>
                        <a href="/"> ojp3@cornell.edu</a>
                      </div>
                    </div>
                    <div className="footer-middle">
                      <h2 className="footer-headline">We party, we design, we make music. Check us out</h2>
                      <nav className="footer-navs">
                        <a href="/" className="footer-nav-link" > BLog</a>
                        <a href="/" className="footer-nav-link" > Merch</a>
                        <a href="/" className="footer-nav-link" > Creative Services</a>
                        <a href="/" className="footer-nav-link" > About Us</a>
                        <a href="/" className="footer-nav-link" > Contact Us</a>
                        <a href="/" className="footer-nav-link" > Artists</a>
                        <a href="/" className="footer-nav-link" > Events</a>
                      </nav>
                    </div>
                    <div className="footer-event-link">
                      <div className="footer-event">
                        <div className="event-info">
                          <div className="event-date">
                            <div className="event-data-month">MAY</div>
                            <div className="event-data-day">15</div>
                          </div>
                          <img alt="" className="event-image" src="https://www.okayplayer.com/wp-content/uploads/2017/05/Awful-Records-Launches-Monthly-Red-Bull-Radio-Show-Bruh-with-Zack-Fox-and-Flying-Lotus--715x480.jpg" />
                        </div>
                        <div className="event-title">Event Title Here</div>
                        <button className="event-ticket-button">Buy Tickets</button>
                      </div>
                    </div>
                    <div className="footer-drip-bar" />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        );
      }
    };
  


export default Demo;
