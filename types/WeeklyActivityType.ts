export type WeeklyActivityType = {
    _id: string;
    title: string;
    description: string;
    date?: string;
    dayOfWeek?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    time?: string;
    location?: string;
    image?: string;
    isActive: boolean;
    order: number;
    registrationUrl?: string;
};

export const dayOfWeekInNorwegian: Record<NonNullable<WeeklyActivityType['dayOfWeek']>, string> = {
    monday: 'Mandag',
    tuesday: 'Tirsdag',
    wednesday: 'Onsdag',
    thursday: 'Torsdag',
    friday: 'Fredag',
    saturday: 'Lørdag',
    sunday: 'Søndag',
};

