import classes from './event-item.module.css'
import Button from "../ui/button";
import DateIcon from "../../public/icons/date-icon";
import ArrowRightIcon from "../../public/icons/arrow-right-icon";
import AddressIcon from "../../public/icons/address-icon";

export default function EventItem(props) {
    const {title, image, date, location, id} = props;
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'});
    const formattedLocation = location.replace(',', '\n');
    const formattedLinks = '/events/' + id;
    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title}/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <DateIcon/>
                    <time>{formattedDate}</time>
                </div>
                <div>
                    <address className={classes.address}><AddressIcon/>{formattedLocation}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={formattedLinks}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}