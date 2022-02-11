// import React from 'react';
import styles from './style.module.css';

// const MyComponent = () => {
//   return <div className={styles.makeItGreen}>Green!</div>;
// };


export function Welcome(props) {
	return <h1 className={styles.header}> Привет, {props.name}</h1>;
}