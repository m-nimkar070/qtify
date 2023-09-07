import React from 'react';
import styles from './SearchBar.module.css';
import {ReactComponent as Search} from '../../assets/Search-icon.svg';

const SearchBar = () => {
  return (
    <div >
      <form className={styles.wrapper}>
        <input className={styles.searchBar} placeholder='Search'/>
        <div>
            <button className={styles.searchButton} type='submit' >
                <Search />
            </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
