'use client';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './AdminUser.module.css';
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
            <a className={styles.link2} href="/pages/adminpanel">
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
            <div className={styles.top_section}>
              <div className={styles.text_top}>
                <h1>12</h1>
                <span>Freevias</span>
              </div>
            </div>
            <div className={styles.top_section}>
              <div className={styles.text_top}>
                <h1>5</h1>
                <span>Users</span>
              </div>
            </div>
            <div className={styles.top_section1}>
              <div className={styles.text_top}>
                <h1>1</h1>
                <span>Admins</span>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.search}>
              <div className={styles.aqet}>
                <a className={styles._link1} href=""><i className="bi bi-filter"></i> Filters</a>
                <a className={styles._link2} href=""><i className="bi bi-plus-lg"></i> Add User</a>
                <span>1 row selected</span>
              </div>
              <div className={styles.iqet}>
                <i className="bi bi-search"></i>
                <input placeholder='Search' type="text" />
              </div>
            </div>
            <div className={styles.user_table}>
              <div className={styles.top_table}>
                <div className={styles.check}>
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                </div>
                <div className={styles.learners}>
                  <span>Learners</span> &nbsp; <i className="bi bi-arrow-down-short"></i>
                </div>
                <div className={styles.mail}>
                  <span>Mail </span> &nbsp; <i className="bi bi-arrow-down-short"></i>
                </div>
                <div className={styles.occ}>
                  <span>Occupation </span> &nbsp; <i className="bi bi-arrow-down-short"></i>
                </div>
                <div className={styles.number}>
                  <span>Number </span> &nbsp; <i className="bi bi-arrow-down-short"></i>
                </div>
                <div className={styles.sub}>
                  <span>Subscription </span> &nbsp; <i className="bi bi-arrow-down-short"></i>
                </div>
                <div className={styles.nothing}></div>
              </div>
              <div className={styles.table_row}>
                <div className={styles.check}>
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                </div>
                <div className={styles.learners}>
                  <img src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg" alt="" />
                  <div className={styles.text}>
                    <span className={styles.span_1}>John Doe <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" /></span>
                    <span className={styles.span_2}>John.doe@gmail.com</span>
                  </div>
                </div>
                <div className={styles.mail}>
                  <span className={styles.span1}>Saba@gmail.com </span>
                </div>
                <div className={styles.occ}>
                  <span className={styles.span1}> Designer </span>
                </div>
                <div className={styles.number}>
                  <span className={styles.span1}> 577 45 23 78 </span>
                </div>
                <div className={styles.sub}>
                  <span className={styles.span1}> Free Trail </span>
                </div>
                <div className={styles.nothing}>
                  <i className="bi bi-trash"></i>
                  <i className="bi bi-pen"></i>
                </div>
              </div>
              <div className={styles.table_row}>
                <div className={styles.check}>
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                </div>
                <div className={styles.learners}>
                  <img src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg" alt="" />
                  <div className={styles.text}>
                    <span className={styles.span_1}>John Doe <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" /></span>
                    <span className={styles.span_2}>John.doe@gmail.com</span>
                  </div>
                </div>
                <div className={styles.mail}>
                  <span className={styles.span1}>Saba@gmail.com </span>
                </div>
                <div className={styles.occ}>
                  <span className={styles.span1}> Designer </span>
                </div>
                <div className={styles.number}>
                  <span className={styles.span1}> 577 45 23 78 </span>
                </div>
                <div className={styles.sub}>
                  <span className={styles.span1}> Free Trail </span>
                </div>
                <div className={styles.nothing}>
                  <i className="bi bi-trash"></i>
                  <i className="bi bi-pen"></i>
                </div>
              </div>
              <div className={styles.table_row}>
                <div className={styles.check}>
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                </div>
                <div className={styles.learners}>
                  <img src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg" alt="" />
                  <div className={styles.text}>
                    <span className={styles.span_1}>John Doe <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" /></span>
                    <span className={styles.span_2}>John.doe@gmail.com</span>
                  </div>
                </div>
                <div className={styles.mail}>
                  <span className={styles.span1}>Saba@gmail.com </span>
                </div>
                <div className={styles.occ}>
                  <span className={styles.span1}> Designer </span>
                </div>
                <div className={styles.number}>
                  <span className={styles.span1}> 577 45 23 78 </span>
                </div>
                <div className={styles.sub}>
                  <span className={styles.span1}> Free Trail </span>
                </div>
                <div className={styles.nothing}>
                  <i className="bi bi-trash"></i>
                  <i className="bi bi-pen"></i>
                </div>
              </div>
              <div className={styles.table_row}>
                <div className={styles.check}>
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                </div>
                <div className={styles.learners}>
                  <img src="https://as1.ftcdn.net/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg" alt="" />
                  <div className={styles.text}>
                    <span className={styles.span_1}>John Doe <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" /></span>
                    <span className={styles.span_2}>John.doe@gmail.com</span>
                  </div>
                </div>
                <div className={styles.mail}>
                  <span className={styles.span1}>Saba@gmail.com </span>
                </div>
                <div className={styles.occ}>
                  <span className={styles.span1}> Designer </span>
                </div>
                <div className={styles.number}>
                  <span className={styles.span1}> 577 45 23 78 </span>
                </div>
                <div className={styles.sub}>
                  <span className={styles.span1}> Free Trail </span>
                </div>
                <div className={styles.nothing}>
                  <i className="bi bi-trash"></i>
                  <i className="bi bi-pen"></i>
                </div>
              </div>
              <div className={styles.bottom_table}>
                <a href="">Previous</a>
                <span>Page 1 of 10</span>
                <a href="">Next</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
