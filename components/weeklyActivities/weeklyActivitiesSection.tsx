import { WeeklyActivityType } from '@/types/WeeklyActivityType';
import WeeklyActivityCard from './weeklyActivityCard';

export default function WeeklyActivitiesSection({
    activities,
}: {
    activities: WeeklyActivityType[];
}) {
    if (!activities || activities.length === 0) {
        return null;
    }

    return (
        <div className='bg-gradient-to-br from-gray-50 to-white pt-16 pb-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h3 className='text-[#132D4E] font-semibold text-center text-4xl md:text-5xl py-5 px-4'>
                    Ukentlige aktiviteter
                </h3>
                <p className='text-gray-600 text-center mb-10 max-w-2xl mx-auto text-lg'>
                    Delta på våre faste aktiviteter og bli kjent med andre medlemmer!
                </p>

                <div className='flex flex-wrap justify-center gap-6'>
                    {activities.map((activity) => (
                        <WeeklyActivityCard key={activity._id} activity={activity} />
                    ))}
                </div>
            </div>
        </div>
    );
}

