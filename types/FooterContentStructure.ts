//Alt data for footer
interface LinkItem {
    name: string;
    url: string;
}

interface Section {
    title: string;
    links: LinkItem[];
}

interface FooterContentStructure {
    email: string;
    emailText: string;
    sections: Section[];
}

const FooterContent: FooterContentStructure = {
    email: 'leder@startgjovik.no',
    emailText: 'Email: leder@startgjovik.no ',
    sections: [
        {
            title: 'Nyttige lenker',
            links: [
                { name: 'Om oss', url: '/om-oss' },
                { name: 'Våre arrangementer', url: '/arrangementer' },
                { name: 'For bedrifter', url: '/for-bedrifter' },
                { name: 'Bærekraft', url: '/baerekraft' },
            ],
        },
        {
            title: 'Sosiale medier',
            links: [
                { name: 'Instagram', url: 'https://www.instagram.com/startgjovik/' },
                {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/startntnugjovik',
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/company/start-gjøvik/',
                },
            ],
        },
    ],
};

export { FooterContent };