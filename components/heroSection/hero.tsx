import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Item } from '@/types/Item';
import Image from 'next/image';

const items: Item[] = [
    {
        id: 1,
        subtitle: '📸 Instagram',
        title: '@startgjovik',
        content: '700+ følgere',
        color: 'bg-blue-500',
        description: 'Følg oss på Instagram, @startgjovik! Der legger vi ut flere innlegg fra konkurranser og annet spennende. Det er den sosiale mediekanalen vi er mest aktive på!',
        figure: '📷',
        link: 'https://www.instagram.com/startgjovik/',
        buttonText: 'Besøk Instagram'
    },
    {
        id: 2,
        subtitle: '👥 Organisasjonen',
        title: 'Start Gjøvik',
        content: '20 medlemmer',
        color: 'bg-green-500',
        description: 'Start Gjøvik er et lokallag under Start Norge som jobber med å fremme entreprenørskap blant studenter. Vi ønsker å gi muligheter for studenter her i Gjøvik og hjelpe dem med å realisere sine ideer.',
        figure: '🤝',
        link: 'https://www.startnorge.no/',
        buttonText: 'Les mer om Start Norge her'
    },
    {
        id: 3,
        subtitle: '🌍 Bærekraft',
        title: 'FNs Bærekraftsmål',
        content: 'For en bedre fremtid',
        color: 'bg-yellow-500',
        description: 'Vi i Start Gjøvik støtter FNs bærekraftsmål. FNs mål for bærekraftig utvikling er en felles arbeidsplan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030. De består av 17 hovedmål og 169 delmål.',
        figure: '🌱',
        link: 'https://www.fn.no/fns-baerekraftsmaal',
        buttonText: 'Les mer'
    },
];

export default function Hero() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleCardClick = (itemId: number) => {
        setSelectedId(selectedId === itemId ? null : itemId);
    };

    return (
        <div className="flex flex-wrap justify-center">
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    onClick={() => handleCardClick(item.id)}
                    className={`flex flex-col items-center justify-center p-6 m-4 rounded-lg cursor-pointer shadow-lg w-72 h-72 ${item.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h5 className="text-gray-100 text-xl">{item.subtitle}</motion.h5>
                    <motion.h2 className="text-white text-3xl font-bold mt-2">{item.title}</motion.h2>
                    <p className="text-gray-200 mt-4">{item.content}</p>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => handleCardClick(selectedId)}
                        />
                        <motion.div
                            key="modal"
                            layoutId={`item-${selectedId}`}
                            className="fixed inset-0 flex items-center justify-center z-50"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                                <motion.h5 className="text-gray-600 text-xl">{items[selectedId - 1].subtitle}</motion.h5>
                                <motion.h2 className="text-3xl font-bold mt-2">{items[selectedId - 1].title}</motion.h2>
                                <p className="text-gray-500 mt-4">{items[selectedId - 1].content}</p>
                                <p className="text-gray-500 mt-2">{items[selectedId - 1].description}</p>
                                <div className="flex items-center mt-4">
                                    <span className="text-2xl mr-2">{items[selectedId - 1].figure}</span>
                                    <span className="text-gray-500">{items[selectedId - 1].figure}</span>
                                </div>
                                <a
                                    href={items[selectedId - 1].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                    {items[selectedId - 1].buttonText}
                                </a>

                                <motion.button
                                    onClick={() => handleCardClick(selectedId)}
                                    className="mt-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Lukk
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
