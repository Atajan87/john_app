// import React from 'react';
import styles from './style.module.css';


// Компанент принимает props
export function Welcome(props) {
	return <p className={styles.header}>{props.name}: {props.info}</p>;
}