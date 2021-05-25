import {useRouter} from 'next/router';
import {Fragment} from "react";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventPages() {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return <p className={'center'}>loading...</p>
    }

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    if (
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2030 ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className={'center'}>
                    <Button link={'/events'}>Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className={'center'}>
                    <Button link={'/events'}>Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(filteredYear, filteredMonth - 1);

    return (
        <Fragment>
            <div className={'center'}>
                <ResultsTitle date={date}/>
            </div>
            <EventList items={filteredEvents}/>
        </Fragment>
    );
}