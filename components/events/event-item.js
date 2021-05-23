import Link from "next/link";
import classes from './event-item.module.css'

export default function EventItem(props) {
    const {title, image, date, location, id} = props;
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'});
    const formattedLocation = location.replace(',', '\n');
    const formattedLinks = '/events/' + {id};
    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title}/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <time>{formattedDate}</time>
                </div>
                <div>
                    <address className={classes.address}>{formattedLocation}</address>
                </div>
                <div className={classes.actions}>
                    <Link href={formattedLinks}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}