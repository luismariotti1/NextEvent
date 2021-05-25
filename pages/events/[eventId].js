import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

export default function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if (!event) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>event not found</p>
                </ErrorAlert>
                <div className={'center'}>
                    <Button link={'/events'}>Show All Events</Button>
                </div>
            </Fragment>
        )
    }
    return (
        <div>
            <Fragment>
                <EventSummary title={event.title}/>
                <EventLogistics
                    date={event.date}
                    address={event.location}
                    image={event.image}
                    title={event.title}
                />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </Fragment>
        </div>
    );
}