import Button from '@/components/Button/button';

export default function MiddleSection() {
    return (
        <div className='flex items-center justify-between bg-[#132D4E] p-6 px-40'>
            {/* Text container */}
            <h3 className='text-white font-bold text-[28px] max-w-[60%]'>
                Ønsker du å bli en del av oss, eller et samarbeid med oss?
            </h3>

            {/* Buttons container */}
            <div className='flex gap-8'>
                <Button text='FOR BEDRIFTER' link='/for-bedrifter' />
                <Button text='BLI MED' link='/bli-medlem' />
            </div>
        </div>
    );
}
