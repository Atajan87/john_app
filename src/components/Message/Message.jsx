import styles from './style.module.css';


// Компанент содержит персон и показывает о нем инфо
export function PersonInfo(props) {
	return <p className={styles.header}>{props.name}: {props.info}</p>;
}