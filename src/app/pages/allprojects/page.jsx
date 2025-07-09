'use client';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './All.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function AdminPanel() {

  return (
    <>
      <main className={styles.container}>
        <div className={styles.left}>
          <div className={styles.adminsection}>
            <div className={styles.img_container}>
              <img
                src="https://i1.sndcdn.com/artworks-eEliO3WIyEx5XlCx-OqzuHQ-t240x240.jpg"
                alt="Admin"
              />
            </div>
            <p>Admin</p>
          </div>
          <div className={styles.links}>
            <a className={styles.link1} href="/pages/adminpanel">
              <i className="bi bi-house"></i> &nbsp; მთავარი
            </a>
            <a className={styles.link2} href="/pages/settingss">
              <i className="bi bi-gear"></i> &nbsp; პარამეტრები
            </a>
          </div>
          <div id={styles.dropdown} className="btn-group mt-3">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <i className="bi bi-people"></i> Users
              </button>
              <ul id={styles.uldrop} className="dropdown-menu dropdown-menu-lg-end">
                <li><a className="dropdown-item" href="/pages/adminfreevias">Freevias</a></li>
                <li><a className="dropdown-item" href="/pages/adminusers">Users</a></li>
              </ul>
            </div>
            <a href="" className={styles.Signout}>
              <i className="bi bi-box-arrow-right"></i> &nbsp; Sign out
            </a>  
        </div>
        
        <div className={styles.right}>
          <div className={styles.top}>
            <a href="/pages/settingss">
              <div className={styles.top_card2}>
                <i className="bi bi-search"></i>
                <p>Find project</p>
              </div>
            </a>
            
            <a href="/pages/allprojects">
              <div className={styles.top_card1}>
                <i className="bi bi-download"></i>
                <p>All projects</p>
              </div>
            </a>
          </div>
          <div className={styles.middle}>
            <div className={styles.mid_left}>
                <h3>Project list</h3>
                <div className={styles.mid_row}>
                    <span>Industry</span>
                    <a className={styles.A1} href="">All</a>
                    <a className={styles.A2} href="">Banking</a>
                    <a className={styles.A2} href="">Financial</a>
                    <a className={styles.A2} href="">Government</a>
                    <a className={styles.A2} href="">Developing</a>
                    <a className={styles.A2} href="">Hi-Tech</a>
                    <a className={styles.A2} href="">Insurance</a>
                </div>
                <br />
                <div className={styles.mid_row}>
                    <span>Status</span>&nbsp;
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                        <label className="form-check-label" htmlFor="checkDefault">
                            In progress
                        </label>
                    </div>
                    &nbsp;
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                        <label className="form-check-label" htmlFor="checkDefault">
                            Completed
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.mid_right}>
                <div className={styles.mid_row}>
                    <span>In progress</span>
                    581
                </div>   
                <div className={styles.mid_row}>
                    <span>Completed</span>
                    &nbsp;
                    &nbsp;
                    3
                </div>   
            </div>
          </div>
          <div className={styles.bottom}>
            <h4> &nbsp; Found: 5611</h4>
            <br />
            <div className={styles.proj_table}>
                <div className={styles.proj_top_row}>
                    <div className={styles.section1}>Practice</div>
                    <div className={styles.section2}>Project name</div>
                    <div className={styles.section3}>Short name</div>
                    <div className={styles.section4}>Status</div>
                    <div className={styles.section5}>Start date</div>
                    <div className={styles.section6}>End date</div>
                    <div className={styles.section7}>Account</div>
                    <div className={styles.section8}>Region</div>
                    <div className={styles.section9}>Industry</div>
                    <div className={styles.section10}>Source type</div>
                    <div style={{ display: 'none' }} className={styles.section11}>.</div>
                </div>
                <div className={styles.proj_row1}>
                    <div className={styles.section1}>ENG</div>
                    <div className={styles.section2}>ABC app</div>
                    <div className={styles.section3}>ABCAPP</div>
                    <div className={styles.section4}>In progress</div>
                    <div className={styles.section5}>11.01.2008</div>
                    <div className={styles.section6}>11.01.2009</div>
                    <div className={styles.section7}>ABC</div>
                    <div className={styles.section8}>Latin America</div>
                    <div className={styles.section9}>Utilities</div>
                    <div className={styles.section10}>Customer</div>
                    <div className={styles.section11}><i className="bi bi-trash"></i> <i className="bi bi-pen"></i></div>
                </div>
                <div className={styles.proj_row2}>
                    <div className={styles.section1}>ENG</div>
                    <div className={styles.section2}>ABC app</div>
                    <div className={styles.section3}>ABCAPP</div>
                    <div className={styles.section4}>In progress</div>
                    <div className={styles.section5}>11.01.2008</div>
                    <div className={styles.section6}>11.01.2009</div>
                    <div className={styles.section7}>ABC</div>
                    <div className={styles.section8}>Latin America</div>
                    <div className={styles.section9}>Utilities</div>
                    <div className={styles.section10}>Customer</div>
                    <div className={styles.section11}><i className="bi bi-trash"></i> <i className="bi bi-pen"></i></div>
                </div>
                <div className={styles.proj_row1}>
                    <div className={styles.section1}>ENG</div>
                    <div className={styles.section2}>ABC app</div>
                    <div className={styles.section3}>ABCAPP</div>
                    <div className={styles.section4}>In progress</div>
                    <div className={styles.section5}>11.01.2008</div>
                    <div className={styles.section6}>11.01.2009</div>
                    <div className={styles.section7}>ABC</div>
                    <div className={styles.section8}>Latin America</div>
                    <div className={styles.section9}>Utilities</div>
                    <div className={styles.section10}>Customer</div>
                    <div className={styles.section11}><i className="bi bi-trash"></i> <i className="bi bi-pen"></i></div>
                </div>
                <div className={styles.proj_row2}>
                    <div className={styles.section1}>ENG</div>
                    <div className={styles.section2}>ABC app</div>
                    <div className={styles.section3}>ABCAPP</div>
                    <div className={styles.section4}>In progress</div>
                    <div className={styles.section5}>11.01.2008</div>
                    <div className={styles.section6}>11.01.2009</div>
                    <div className={styles.section7}>ABC</div>
                    <div className={styles.section8}>Latin America</div>
                    <div className={styles.section9}>Utilities</div>
                    <div className={styles.section10}>Customer</div>
                    <div className={styles.section11}><i className="bi bi-trash"></i> <i className="bi bi-pen"></i></div>
                </div>
                
            </div>
            
            <div className={styles.the_bottom}>
                <div className={styles.the_top_ofthebottom}>
                    <a href=""><i className="bi bi-arrow-left"></i></a>
                    <div className={styles.tabs}>
                        <span className={styles.tab1}>1</span>
                        <span className={styles.tab}>2</span>
                        <span className={styles.tab}>3</span>
                        <span className={styles.tab2}>4</span>
                        <span className={styles.tab}>5</span>
                        <span className={styles.tab3}>...</span>
                        <span className={styles.tab}>31</span>
                    </div>
                    <a href=""><i className="bi bi-arrow-right"></i></a>
                </div>
                <div className={styles.the_bottom_ofthebottom}>
                    <p className={styles.prev}>Previous</p>
                    <p className={styles.next}>Next &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Show all</p>
                </div>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
