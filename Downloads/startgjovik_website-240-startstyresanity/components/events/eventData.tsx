const BASE_IMAGE_URL = '/images';
const BASE_EVENT_URL = '/alle-arrangementer';

// Array of objects representing events
export const events = [
    // Event object structure
    {
        id: '1', // Unique identifier for the event
        imageUrl: `${BASE_IMAGE_URL}/bcm.png`,
        title: 'BCM',
        subtitle: 'Business Canvas Mastery: Lås opp potensialet i din forretningsidé!',
        alt: 'BCM',
        description: `Oppdag nøkkelen til en vellykket forretningsmodell med vårt Business Canvas-modellkurs! Dette er en gyllen mulighet for studenter til å dykke ned i en av de mest kritiske verktøyene for å forbedre både din pitch og din forretningsmodell. Lær hvordan du kan bringe din idé til liv og få en dypere forståelse av ditt forretningskonsept gjennom et interaktivt kurs ledet av erfarne veiledere.
        Etter kurset får du sjansen til å sette teori ut i praksis: bruk Business Canvas-modellen på din egen idé og fremfør din pitch foran et panel av eksperter og dine medstudenter. Dette er ikke bare en læringsøkt, men en reell mulighet til å få verdifull tilbakemelding og nettverke med likesinnede.
        BCM-kurset har vært en stor suksess tidligere, og deltakere har gått fra arrangementet med ny innsikt og forbedrede ferdigheter som er umiddelbart anvendelige. Ikke gå glipp av denne sjansen til å gi din forretningsidé det løftet den fortjener. Registrer deg nå og begynn reisen mot forretningsmestring!`,
        link: `${BASE_EVENT_URL}/bcm`, // URL for the event detail page
    },
    {
        id: '2', // Unique identifier for the event
        imageUrl: `${BASE_IMAGE_URL}/blender.png`,
        title: 'Blender',
        subtitle: 'Blender: Når Studenter og Næringsliv Kolliderer',
        alt: 'blender',
        description: `Bli med på "Blender", en dynamisk og elektrisk kveld hvor morgendagens talenter møter dagens bransjeledere! Dette er en enestående mulighet for studenter til å dykke inn i næringslivets verden, og for bedrifter å oppdage den friske kreativiteten som blomstrer på Gjøvik og i Innlandet.
        Gjennom "Blender", åpner vi dørene til et univers av muligheter. Her får studenter sjansen til å nettverke med topp bedrifter innenfor sitt studiefelt, lære om karrieremuligheter i regionen, og bygge relasjoner som kan forme fremtiden. For bedriftene er dette en unik anledning til å møte og rekruttere talentfulle individer som kan bringe ny energi og ideer.
        Denne kvelden er mer enn bare nettverksbygging - det er en feiring av kunnskap, innovasjon og det uforutsette som kan skje når forskjellige verdener møtes. Forvent en fullpakket agenda med inspirerende samtaler, interaktive sesjoner og morsomme aktiviteter.
        "Blender" er din mulighet til å være der hvor det skjer. Bli med, utvid ditt profesjonelle nettverk, og oppdag alle veiene som kan åpne seg i Gjøvik og Innlandet. Meld deg på nå for en kveld fylt med lærerike opplevelser og minneverdige møter!`,
        link: `${BASE_EVENT_URL}/blender`, // URL for the event detail page
    },
    {
        id: '3', // Unique identifier for the event
        imageUrl: `${BASE_IMAGE_URL}/baerekraft.png`,
        title: 'Bærekraftsforedrag',
        subtitle: 'Grønn Visjon: Utforsk Bærekraftens Hjerte og Sjel',
        alt: 'bærekraft',
        description: `Velkommen til "Bærekraftsforedrag", et dyptgående og inspirerende foredrag dedikert til kunsten og vitenskapen bak bærekraft. I en tid hvor planeten vår står overfor uforutsette utfordringer, er det mer essensielt enn noen gang å integrere bærekraftige praksiser i kjernen av våre forretningsidéer.
        Dette foredraget gir deg en unik mulighet til å forstå dybden og betydningen bak FNs bærekraftsmål. Hvorfor ble disse målene skapt, og hva representerer de egentlig? Vi vil utforske disse spørsmålene og mer, og avdekke hvorfor det er avgjørende for dagens og morgendagens bedrifter å rette sin kurs mot bærekraft.
        Du vil lære ikke bare om 'hva' og 'hvorfor' av bærekraftsmålene, men også om 'hvordan' - hvordan du kan anvende disse målene for å forme en mer ansvarlig, lønnsom og fremtidsrettet forretningsmodell. Dette foredraget er en invitasjon til å bli en del av løsningen og å drive forandring gjennom innovasjon og strategisk tenkning.
        "Bli med på "Bærekraftsforedrag" - hvor vi sammen tar skrittet mot en bærekraftig fremtid. Meld deg på i dag og gjør bærekraft til hjørnesteinen i din forretningsreise.`,
        link: `${BASE_EVENT_URL}/baerekraftsforedrag`, // URL for the event detail page
    },
    {
        id: '4',
        imageUrl: `${BASE_IMAGE_URL}/casebreaker.png`,
        title: 'Casebreaker',
        subtitle: 'Bli med på Casebreaker: En maraton av innovasjon og strategi!',
        alt: 'casebreaker',
        description: `Er du klar for å teste dine ferdigheter i virkelige utfordringer fra ledende bedrifter? Casebreaker gir deg en sjelden mulighet til å dykke inn i spennende caser, designet spesielt med studentenes perspektiv i tankene. Fra intense 6-timers sprinter til dyptgående 24-timers strategisessioner – du vil få kjenne på adrenalinet i en hackathon-lignende opplevelse, der de beste løsningene ikke bare anerkjennes, men også belønnes med attraktive premier.
        Hvert case er en mulighet til å vise frem din kreativitet, analytiske evner og innovative tenkning. Arbeid alene eller samle et dream team; dette er din sjanse til å skinne og imponere potensielle arbeidsgivere med din problemløsning i praksis.
        Er du klar for utfordringen? Kan du jobbe under press og levere banebrytende løsninger? Meld deg på Casebreaker nå, og la din nyskapende tankegang bli din billett til anerkjennelse og fantastiske premier!`,
        link: `${BASE_EVENT_URL}/casebreaker`,
    },
    {
        id: '5',
        imageUrl: `${BASE_IMAGE_URL}/starte-bedrift.png`,
        title: 'Hvordan starte bedrift fra A til Å',
        subtitle: 'Grip Fremtiden: Din A til Å Guide i Entreprenørskap',
        alt: 'hvordan starte bedrift fra a til å',
        description: `Er du klar til å ta steget inn i gründerverdenen, men usikker på hvor du skal begynne? "Hvordan starte bedrift fra A til Å" er det foredraget du ikke vil gå glipp av! På bare to timer vil du få en grundig og engasjerende innføring i kunsten å starte din egen bedrift, direkte fra de som kjenner prosessen best.
        Vi har invitert topp fagpersoner, fra anerkjente organisasjoner som Deloitte og Skatteetaten, for å gi deg en insider's guide til oppstartsprosessen. Fra å velge riktig selskapsform til å forstå de juridiske aspektene - vi dekker alt du trenger for å ta din forretningsidé fra drøm til virkelighet.
        Dette foredraget er mer enn bare en teoretisk gjennomgang; det er en hands-on workshop der du vil lære hvilke trinn som er viktige for å sette i gang. Du vil få verdifulle innsikter i hvordan du kan tilpasse din forretningsmodell til ditt unike formål og hvordan du navigerer i det regulatoriske landskapet.
        Bli med på "Hvordan starte bedrift fra A til Å" og forvandle din gründerdrøm til en levedyktig virksomhet. Dette er din mulighet til å skaffe deg kunnskapen og verktøyene du trenger for å lykkes i den spennende verden av entreprenørskap. Din reise fra A til Å starter her!`,
        link: `${BASE_EVENT_URL}/hvordan-starte-bedrift-fra-a-til-aa`,
    },
    {
        id: '6',
        imageUrl: `${BASE_IMAGE_URL}/idekonkurranse.png`,
        title: 'Idèkonkurranse',
        subtitle: 'Pitch Perfekt: Fra Visjon til Virkelighet',
        alt: 'idekonkurranse',
        description: `Er du klar for å sette ditt kreative stempel på fremtiden? Bli med på "Idèkonkurranse", en konkurranse som transformerer visjonen din til virkelighet. Dette er din arena - hvor innovative tanker møter kritisk analyse og veiledning fra erfarne eksperter.
        Studenter med en gnist av en idé får en unik mulighet til å presentere sine konsepter foran en kvalifisert jury. Men det stopper ikke der: de mest lovende ideene vil få skreddersydd veiledning fra vårt team i Start og andre bransjeveteraner. Dette er din sjanse til å få din idé evaluert, raffinert og klar til å erobre markedet.
        Men vent, det blir enda bedre! Vinnerne av idèkonkurransen vil ikke bare få verdifull veiledning, men også tilgang til et nettverk av investorer, mentorer og bransjeledere. Dette kan være din billett til å forvandle din idé til en blomstrende virksomhet.
        Sett av ettermiddagen, ta med din idé og forbered deg på en reise fra konsept til konkretisering. Møt likesinnede, knytt verdifulle kontakter, og la din kreative energi blomstre i et miljø av støtte og innovasjon. Dette er startskuddet du har ventet på - grip sjansen, pitch din idé, og ta steget mot suksess med idèkonkurranse!`,
        link: `${BASE_EVENT_URL}/idekonkurranse`,
    },
    {
        id: '7',
        imageUrl: `${BASE_IMAGE_URL}/mot-grunder.png`,
        title: 'Møt en gründer',
        subtitle: 'Realiser Drømmene Dine: Møt Gründerne som Forandret Spillet',
        alt: 'møt en grunder',
        description: `Har du noen gang lurt på hvordan det er å forvandle en dristig idé til en blomstrende virksomhet? Bli med på vårt eksklusive event "Realiser Drømmene Dine", hvor erfarne gründere deler sine suksesshistorier og hemmelighetene bak deres triumfer.
        Dette er en sjelden sjanse til å høre fra de som har tatt det store spranget - gründere som ikke bare tenkte stort, men også våget å satse alt på sine visjoner. De vil fortelle om sine opp- og nedturer, dele sine personlige erfaringer, og gi innsikt i hva som kreves for å lykkes i dagens konkurransedyktige næringsliv.
        Mer enn bare et foredrag, dette er en inspirasjonssesjon designet for å sette fyr på din entreprenørånd. Det spiller ingen rolle om du er midt i studiene eller akkurat har startet på gründerreisen; du vil forlate dette møtet med ny giv, kunnskap og kanskje til og med en mentor.
        "Realiser Drømmene Dine" er ikke bare et event, det er en oppvåkning. Grip sjansen til å lære av de beste, og ta det første skrittet mot å realisere dine egne forretningsdrømmer. Meld deg på nå, og bli en del av en kveld fylt med inspirasjon, nettverking og banebrytende innsikter!`,
        link: `${BASE_EVENT_URL}/mot-en-grunder`,
    },
    {
        id: '8',
        imageUrl: `${BASE_IMAGE_URL}/andre-arrangementer.png`,
        title: 'Andre arrangementer',
        subtitle: 'Utforsk det uforutsette med Start Gjøvik!',
        alt: 'andre arrangementer',
        description: `Hos Start Gjøvik handler det ikke bare om de faste arrangementene - vi elsker å overraske og engasjere med et mangfold av spennende, unike hendelser! Våre arrangementer er designet for å utfordre, inspirere og underholde, og de er alt annet enn vanlige.
        Enten det er et popup-seminar med banebrytende teknologi, en inspirerende workshop med bransjeledere, eller en uventet sosial samling for å styrke nettverket ditt - disse eventene byr på perfekte muligheter til å lære, vokse og koble sammen med likesinnede.
        Det beste av alt? Våre arrangementer formes delvis av deg, våre engasjerte deltakere! Har du en idé til et arrangement, en gjest du drømmer om å møte, eller et tema du brenner for? Ta kontakt med oss! Vi setter pris på dine forslag og jobber for å realisere de mest inspirerende og relevante arrangementene for vårt samfunn.
        Hold deg oppdatert med Start Gjøvik og bli med på våre arrangementer - hvor nye ideer møter gamle venner, og hvor hver samling er en mulighet til å skape minner som varer. Vi lover at du ikke vil gå glipp av det vi har på lager!`,
        link: `${BASE_EVENT_URL}/andre-arrangementer`,
    },
];
