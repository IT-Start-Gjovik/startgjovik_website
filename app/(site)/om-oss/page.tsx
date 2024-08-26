import { fetchImageByCategory } from '@/backend/sanity-utils';
import AboutHeroContent from '@/components/aboutStart/aboutHeroContent';
import { AboutStart } from '@/components/aboutStart/aboutstartText';
import Hero from '@/components/hero/hero';
import BoardMembers from '@/components/startMembers/startBoardList';
import { ImageCategory } from '@/enums/EImageCategory';

const aboutHeroProps = {
    title: 'Om oss',
    color: '#132D4E',
    textColor: '#',
    logo: false,
    content: <AboutHeroContent />,
    contentBackground: '/images/hero-background-blue.png',
};

export default async function AboutUsPage() {
    const teamPic = await fetchImageByCategory(ImageCategory.TEAM_PIC as 'TEAM_PIC');
    return (
        <main className='bg-gray-900 min-h-screen text-white'>
            <Hero {...aboutHeroProps} imageSrc={teamPic?.asset.url} />
            <AboutStart />
            <BoardMembers />
        </main>
    );
}
