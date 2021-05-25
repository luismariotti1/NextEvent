import Link from "next/link";
import classes from './button.module.css'

export default function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}><a className={classes.btn}>{props.children}</a></Link>
        );
    } else {
        return (
            <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
        )
    }
}