import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if (!event){
        return <p>event not found</p>
    }
    return (
        <div>
            <Fragment>
                <EventSummary/>
                <EventLogistics/>
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </Fragment>
        </div>
    );
}