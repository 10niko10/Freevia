'use client';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './Admin.module.css';
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
            <img src="https://i.pinimg.com/474x/a4/06/44/a40644181b3075027c1770df35af498d.jpg" alt="" />
            <h1>Freevia <i className="bi bi-pen"></i></h1>
          </div>
          <div className={styles.bottom}>
            <h2>Workspace admins</h2>
            <div className={styles.admin_container}>
              <div className={styles.admin_card}>
                <div className={styles.top_card}>
                  <i className="bi bi-x-lg"></i>
                </div>
                <img src="https://www.lockhatters.com/cdn/shop/files/Fairbanks-blog-image_2000x.jpg?v=1729159602" alt="" />
                <div className={styles.ptext}>
                  <p>John Johnsnon</p>
                </div>
                <span>CEO</span>
              </div>
              <div className={styles.admin_card}>
                <div className={styles.top_card}>
                  <i className="bi bi-x-lg"></i>
                </div>
                <img src="https://www.vmcdn.ca/f/files/localprofile/import/2023_08_image-3.png" alt="" />
                <div className={styles.ptext}>
                  <p>Jane Cooper</p>
                </div>
                <span>Design Lead</span>
              </div>
              <div className={styles.admin_card}>
                <div className={styles.top_card}>
                  <i className="bi bi-x-lg"></i>
                </div>
                <img src="https://www.lockhatters.com/cdn/shop/files/Fairbanks-blog-image_2000x.jpg?v=1729159602" alt="" />
                <div className={styles.ptext}>
                  <p>John Johnsnon</p>
                </div>
                <span>CEO</span>
              </div>
              <div className={styles.admin_card}>
                <div className={styles.top_card}>
                  <i className="bi bi-x-lg"></i>
                </div>
                <img src="https://www.lockhatters.com/cdn/shop/files/Fairbanks-blog-image_2000x.jpg?v=1729159602" alt="" />
                <div className={styles.ptext}>
                  <p>John Johnsnon</p>
                </div>
                <span>CEO</span>
              </div>
              <div className={styles.admin_card}>
                <div className={styles.top_card}>
                  <i className="bi bi-x-lg"></i>
                </div>
                <img src="https://www.lockhatters.com/cdn/shop/files/Fairbanks-blog-image_2000x.jpg?v=1729159602" alt="" />
                <div className={styles.ptext}>
                  <p>John Johnsnon</p>
                </div>
                <span>CEO</span>
              </div>
              <div className={styles.admin_card}>
                <div className={styles.top_card}>
                  <i className="bi bi-x-lg"></i>
                </div>
                <img src="https://www.lockhatters.com/cdn/shop/files/Fairbanks-blog-image_2000x.jpg?v=1729159602" alt="" />
                <div className={styles.ptext}>
                  <p>John Johnsnon</p>
                </div>
                <span>CEO</span>
              </div>
              <div className={styles.add_admin_card}>
                <i className="bi bi-plus"></i>
                <span>Add admin</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
