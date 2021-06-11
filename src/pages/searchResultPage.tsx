import styles from './index.less';
import { Input } from 'antd';
import { Component } from 'react';

class SearchResultPage extends Component{

  onPressEnter = (e) => {
    console.log(e.target.value);
  }

  render () {
    return (
      <div className={styles.searchDiv}>
        <div className={styles.titleDiv}>SOUPU</div>
        <Input className={styles.searchInput} placeholder='Basic usage' onPressEnter={this.onPressEnter}/>
      </div>
    );
  }
}

export default SearchResultPage;
