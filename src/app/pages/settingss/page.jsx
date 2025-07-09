'use client';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './Settings.module.css';
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
              <div className={styles.top_card1}>
                <i className="bi bi-search"></i>
                <p>Find project</p>
              </div>
            </a>
            
            <a href="/pages/allprojects">
              <div className={styles.top_card2}>
                <i className="bi bi-download"></i>
                <p>All projects</p>
              </div>
            </a>
            
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottom_top}>
              <h2>Filter</h2>
            </div>
            <div className={styles.bottom_middle}>
              <div className={styles.bot_left}>
                <div className={styles.section}>
                  <label htmlFor="name">Project name</label>
                  <input name='name' placeholder='Search...' type="text" />
                </div>
                <div className={styles.section}>
                  <label htmlFor="description">Project description</label>
                  <input name='description' placeholder='Search...' type="text" />
                </div>
                <div className={styles.section1}>
                  <div className={styles.section2}>
                    <label htmlFor="">Account</label>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className={styles.section2}>
                    <label htmlFor="">Industry</label>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.bot_right}>
                <div className={styles.section}>
                  <label htmlFor="name">Budget Type</label>
                  <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Any</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section2}>
                    <label htmlFor="">Start date from:</label>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className={styles.section2}>
                    <label htmlFor="" style={{ visibility: 'hidden' }}>.</label>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.section2}>
                    <label htmlFor="">Finish date from:</label>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className={styles.section2}>
                    <label htmlFor="" style={{ visibility: 'hidden' }}>.</label>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom_bottom}>
              <a className={styles.btn1} href="">Clear</a>
              <a className={styles.btn2} href="">Search</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
