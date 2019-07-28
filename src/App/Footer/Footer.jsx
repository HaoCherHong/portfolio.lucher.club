import React from "react";
import {Link} from 'react-router-dom';
import {footer, list, listItem, author} from './Footer.css';

const Footer = () => (
  <footer className={footer}>
    <ul className={list}>
      <li className={listItem}>
        <Link to="/">Home</Link>
        </li>
      <li className={listItem}>
        <a href="https://blog.lucher.club?utm_source=portfolio.lucher.club">Blog</a>
      </li>
      <li className={listItem}>
        <a href="https://www.linkedin.com/in/haocherhong?utm_source=portfolio.lucher.club">LinkedIn</a>
      </li>
      <li className={listItem}>
        <a href="mailto:rax333j@gmail.com">Email</a>
      </li>
      <div className={author}>
        Social Media @haocherhong
      </div>
    </ul>
  </footer>
)

export default Footer;