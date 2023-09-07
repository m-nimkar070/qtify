import React from 'react';
import styles from "./Navbar.module.css";
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// import {ReactComponent as Logo} from '../../assets/headphone.svg';
import SearchBar from '../Search/SearchBar';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <SearchBar />
        <Button child={'Give Feedback'} />
    </nav>
  )
}

export default Navbar
