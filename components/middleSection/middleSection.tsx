import Button from '@/components/Button/button';

export default function MiddleSection() {
    return (
        // Use responsive padding: smaller on mobile (p-4), larger on larger screens (px-10 on medium screens and px-40 on large screens)
        <div className='flex flex-col md:flex-row items-center justify-between bg-[#132D4E] px-4 md:px-16 py-6'>
            {/* Text container, adjust text size on smaller screens if necessary */}
            <h3 className='text-white font-bold text-[22px] md:text-[28px] max-w-full md:max-w-[60%] text-center md:text-left mb-4 md:mb-0'>
                Ønsker du å bli en del av oss, eller et samarbeid med oss?
            </h3>

            {/* Buttons container, allow wrapping if needed */}
            <div className='flex gap-4 md:gap-8 justify-center md:justify-start'>
                <Button text='FOR BEDRIFTER' link='/for-bedrifter' dark />
                <Button text='BLI MED' link='/bli-medlem' dark />
            </div>
        </div>
    );
}
