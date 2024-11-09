'use client';
import { useState, useRef, useEffect } from 'react';
import { EventCardType } from '@/types/EventCardType';
import getDateTimeFormat from '@/utils/date';
import MiniEventCard from '../events/miniEventCard';
import Button from '../Button/button';

const DEFAULT_VISIBLE_COUNT = 4;

export default function NoEvents({ events }: { events: EventCardType[] }) {
    const [showPreviousEvents, setShowPreviousEvents] = useState(false);
    const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState('0px');

    const previousEvents = events.filter(
        (event) => new Date(event.datetime) < new Date(),
    );

    const loadMoreEvents = () => {
        setVisibleCount((prevCount) => prevCount + DEFAULT_VISIBLE_COUNT);

        setTimeout(() => {
            buttonContainerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 100);
    };

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(
                showPreviousEvents
                    ? `${containerRef.current.scrollHeight}px`
                    : '0px',
            );
        }
    }, [showPreviousEvents, visibleCount]);

    return (
        <div className='min-h-full mt-4 px-2'>
            <div className='flex flex-col items-center'>
                <Button
                    onClick={() => {
                        setShowPreviousEvents(!showPreviousEvents);
                        if (!showPreviousEvents)
                            setVisibleCount(DEFAULT_VISIBLE_COUNT);
                    }}
                    text={
                        showPreviousEvents
                            ? 'Skjul tidligere arrangementer'
                            : 'Vis tidligere arrangementer'
                    }
                />
            </div>
            <div
                ref={containerRef}
                className='transition-max-height duration-500 ease-in-out overflow-hidden'
                style={{ maxHeight: containerHeight }}>
                <div className='mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {previousEvents.slice(0, visibleCount).map((event) => {
                        const { timeFormat } = getDateTimeFormat(event.datetime);

                        return (
                            <MiniEventCard
                                key={event._id}
                                imageUrl={event.image}
                                title={event.title}
                                date={new Date(event.datetime).toLocaleDateString(
                                    'en-GB',
                                )}
                                time={timeFormat}
                            />
                        );
                    })}
                </div>
            </div>
            {showPreviousEvents && visibleCount < previousEvents.length && (
                <div ref={buttonContainerRef} className='flex justify-center mt-4'>
                    <Button text='Vis flere' onClick={loadMoreEvents} />
                </div>
            )}
        </div>
    );
}
