/**
 * ==========================================
 * script.js - Lógica Principal (Contenido + Animaciones)
 * ==========================================
 */

const CONTENT = {
    es: {
        nav: { home: 'Inicio', audit: 'Auditoría', sprints: 'Sprints', about: 'Nosotros', team: 'Equipo', faq: 'FAQ', contact: 'Contacto' },
        hero: { 
            h1: 'Ahorra tiempo, reduce errores y escala tu negocio con IA', 
            sub: 'Te entregamos un plan claro con qué automatizar, cómo, cuándo y por qué explicado de forma sencilla y accionable.',
            cta1: 'Agenda una llamada gratuita',
            cta2: 'Ver un ejemplo real'
        },
        who: {
            title: 'A Quién Ayudamos',
            subtitle: 'Para negocios que quieren resultados reales, no palabras de moda',
            text: 'Ayudamos a freelancers, pymes italianas y empresas locales en Dubái a optimizar procesos con automatizaciones de IA prácticas y medibles.'
        },
        audit: {
            title: 'Auditoría Operativa de IA + Roadmap de Automatización',
            desc: 'Analizamos tus procesos, detectamos ineficiencias y entregamos un roadmap claro y accionable. Puedes usarlo con nosotros o con tu propio equipo.',
            deliverablesTitle: 'Entregables:',
            list: [
                'Mapa de procesos en Notion',
                'Flujo de automatización en Miro',
                'Video walkthrough explicativo',
                'Plan de implementación 30/60/90 días'
            ],
            cta: 'Agenda auditoría gratuita'
        },
        sprints: {
            title: 'Sprints de Implementación',
            subtitle: 'Después de la auditoría, elige uno o más sprints para implementar soluciones de automatización concretas.',
            cta: 'Escoge tu sprint',
            items: [
                { title: 'Sprint 1', subtitle: 'Lead & CRM Automation', desc: 'Automatiza captación, calificación y seguimiento de leads mediante CRM.', image: 'sprint1.webp' },
                { title: 'Sprint 2', subtitle: 'Customer Care Automation', desc: 'Soporte 24/7 con respuestas automatizadas, chatbot y voicebot.', image: 'sprint2.webp' },
                { title: 'Sprint 3', subtitle: 'Finance Ops Automation', desc: 'Automatiza facturación, pagos, conciliaciones y reportes.', image: 'sprint3.webp' },
                { title: 'Sprint 4', subtitle: 'Internal Ops Automation', desc: 'Automatiza tareas internas, onboarding y dashboards operativos.', image: 'sprint4.webp' }
            ]
        },
        deliverables: {
            title: 'Qué verás en el entregable',
            subtitle: 'Transparencia total en lo que recibes.',
            items: [
                { title: 'Panel Notion', desc: 'Documentación de procesos y métricas clave.', icon: 'layout' },
                { title: 'Diagrama Miro', desc: 'Flujo visual de cada paso de la automatización.', icon: 'share-2' },
                { title: 'Checklist', desc: 'Prioridades basadas en impacto, costo y tiempo.', icon: 'check-square' },
                { title: 'Video Walkthrough', desc: 'Explicación completa de cada sección.', icon: 'play-circle' } 
            ]
        },
        about: {
            title: 'Nuestra Historia',
            text: `
                <p class="mb-4">Your Agent Lab nace en Dubái para ofrecer consultoría de IA de alto nivel a empresas que quieren innovar. Nuestra misión es impulsar la transformación digital a través de estrategias personalizadas, tecnologías de vanguardia y un enfoque modular.</p>
                <p class="mb-4">Creemos que la inteligencia artificial debe ser accesible, eficaz y orientada a resultados. Desde 2022, con la primera versión de ChatGPT, hemos estudiado la IA y aprendido cómo optimizar procesos, reducir costos y acelerar el crecimiento empresarial.</p>
                <p>Nuestra visión es convertirnos en el referente de consultoría IA en Italia y Oriente Medio.</p>
            `
        },
        team: {
            title: 'Nuestro Equipo',
            members: [
                { name: 'Nathalia', role: 'AI Specialist & Founder' },
                { name: 'Felipe', role: 'AI Developer & Automation Expert' },
                { name: 'Juan', role: 'Developer (Python, JS, HTML)' },
                { name: 'Brenda', role: 'Marketing Specialist' },
                { name: 'Luca', role: 'Growth Partner & Strategist' }
            ]
        },
        faq: {
            title: 'Preguntas Frecuentes',
            items: [
                { q: '¿Cuánto dura la auditoría?', a: 'El proceso dura unos 7-10 días hábiles.' },
                { q: '¿Qué accesos se requieren?', a: 'Solo accesos necesarios y temporales a herramientas existentes.' },
                { q: '¿Mis datos están seguros?', a: 'Sí. NDA disponible si se solicita.' },
                { q: '¿Y si no implemento con ustedes?', a: 'El roadmap es tuyo: úsalo internamente o con otros.' },
                { q: '¿Puedo empezar con un sprint sin auditoría?', a: 'La auditoría es esencial para definir prioridades e impacto.' },
                { q: '¿Cómo miden resultados?', a: 'Con KPIs como horas ahorradas, errores reducidos y automatizaciones en marcha.' },
                { q: '¿Qué herramientas usan?', a: 'GPT-4, Zapier, Make, n8n, CRM, Notion, integraciones Slack/WhatsApp.' },
                { q: '¿Se puede trabajar remotamente?', a: 'Sí - todo el proceso es online.' }
            ]
        },
        contact: { title: '¿Listo para comenzar?', scheduleTitle: 'Horario', schedule: ['Lunes - Viernes: 9:00 - 18:00', 'Sábado: 10:00 - 14:00'], formTitle: 'Agenda tu llamada', form: {name:'Nombre', company:'Empresa', email:'Email', phone:'Teléfono', msg:'Mensaje', send:'Enviar'} },
        whatsapp: 'Chatea en WhatsApp', 
        footer: { tagline: 'Soluciones de Automatización e IA.', linksTitle: 'Enlaces', legalTitle: 'Legal', socialTitle: 'Síguenos', privacy: 'Política de Privacidad', rights: 'Todos los derechos reservados.' },
        
        // --- POLÍTICA DE PRIVACIDAD EN ESPAÑOL ---
        privacy: `
            <h2 class="text-2xl font-bold mb-4 font-heading text-primary">Política de Privacidad</h2>
            <p class="mb-4 text-sm text-gray-500"><strong>Última actualización:</strong> 12 de Noviembre de 2025</p>
            
            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">1. Introducción</h3>
            <p class="mb-2">YourAgentLab ("nosotros", "nuestro") respeta su privacidad y se compromete a proteger sus datos personales. Esta política de privacidad le informa sobre cómo tratamos sus datos personales cuando visita nuestro sitio web y le informa sobre sus derechos de privacidad y cómo la ley lo protege.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">2. Datos que Recopilamos</h3>
            <p class="mb-2">Podemos recopilar, utilizar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li><strong>Datos de identidad:</strong> nombre, apellido.</li>
                <li><strong>Datos de contacto:</strong> dirección de correo electrónico, número de teléfono.</li>
                <li><strong>Datos empresariales:</strong> nombre de la empresa, sector.</li>
                <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, zona horaria.</li>
                <li><strong>Datos de uso:</strong> información sobre cómo utiliza nuestro sitio web.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">3. Cómo Utilizamos sus Datos</h3>
            <p class="mb-2">Utilizamos sus datos personales para:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li>Responder a sus solicitudes de información.</li>
                <li>Proporcionarle nuestros servicios.</li>
                <li>Mejorar nuestro sitio web y nuestros servicios.</li>
                <li>Enviarle comunicaciones de marketing (solo con su consentimiento).</li>
                <li>Cumplir con obligaciones legales.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">4. Base Jurídica del Tratamiento</h3>
            <p class="mb-2">Tratamos sus datos personales basándonos en su consentimiento, para la ejecución de un contrato, para cumplir con obligaciones legales o para perseguir nuestros intereses comerciales legítimos.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">5. Compartir Datos</h3>
            <p class="mb-2">No vendemos sus datos personales a terceros. Podemos compartir sus datos con proveedores de servicios que nos ayudan a gestionar nuestro negocio (por ejemplo, hosting, email marketing), siempre cumpliendo con el RGPD.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">6. Seguridad de los Datos</h3>
            <p class="mb-2">Hemos implementado medidas de seguridad adecuadas para prevenir la pérdida, el uso indebido o la alteración de sus datos personales. Todos los datos están encriptados y almacenados en servidores seguros.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">7. Sus Derechos</h3>
            <p class="mb-2">De acuerdo con el RGPD, usted tiene derecho a:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li>Acceder a sus datos personales.</li>
                <li>Rectificar datos inexactos.</li>
                <li>Solicitar la eliminación de sus datos.</li>
                <li>Oponerse al tratamiento de sus datos.</li>
                <li>Solicitar la limitación del tratamiento.</li>
                <li>Solicitar la portabilidad de los datos.</li>
                <li>Retirar el consentimiento en cualquier momento.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">8. Cookies</h3>
            <p class="mb-2">Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para mejorar la experiencia del usuario. Puede gestionar sus preferencias de cookies a través del banner presente en el sitio.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">9. Conservación de Datos</h3>
            <p class="mb-2">Conservamos sus datos personales solo durante el tiempo necesario para los fines para los que fueron recopilados, incluidos los requisitos legales, contables o de informes.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">10. Contacto</h3>
            <p class="mb-2">Para cualquier pregunta sobre esta política de privacidad o para ejercer sus derechos, contáctenos en: <a href="mailto:privacy@youragentlab.com" class="text-primary hover:underline">privacy@youragentlab.com</a></p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">11. Cambios en esta Política</h3>
            <p class="mb-2">Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le informaremos de cualquier cambio publicando la nueva política en esta página.</p>
        `
    },
    it: {
        nav: { home: 'Home', audit: 'Audit & Roadmap', sprints: 'Sprint', about: 'Chi Siamo', team: 'Team', faq: 'FAQ', contact: 'Contatti' },
        hero: { 
            h1: 'Libera tempo, elimina errori e scala il tuo lavoro con l\'IA', 
            sub: 'Ti consegniamo un piano chiaro con cosa automatizzare, come, quando e perché - spiegato in modo semplice e misurabile.',
            cta1: 'Prenota una call gratuita',
            cta2: 'Guarda un esempio reale'
        },
        who: {
            title: 'Chi Aiutiamo',
            subtitle: 'Parliamo a chi vuole risultati, non solo tecnologia',
            text: 'Aiutiamo freelance, PMI italiane e aziende locali a Dubai a rendere i processi più efficienti con soluzioni IA concrete e misurabili.'
        },
        audit: {
            title: 'AI Operations Audit + Automation Roadmap',
            desc: 'Analizziamo i tuoi processi operativi, identifichiamo sprechi di tempo e costi e forniamo una roadmap di automazione chiara e attuabile. Il piano è tuo, utilizzabile con noi o con il tuo team.',
            deliverablesTitle: 'Deliverable:',
            list: [
                'Mappa processi su Notion',
                'Flusso consigliato su Miro',
                'Video walkthrough esplicativo',
                'Piano operativo 30/60/90 giorni'
            ],
            cta: 'Prenota Audit gratuito'
        },
        sprints: {
            title: 'Sprint di Implementazione',
            subtitle: 'Sprint operativi per automazioni reali. Dopo l\'audit, puoi scegliere uno o più Sprint per implementare automazioni con risultati concreti.',
            cta: 'Scegli il tuo Sprint',
            items: [
                { title: 'Sprint 1', subtitle: 'Lead & CRM Automation', desc: 'Automatizza acquisizione e qualificazione lead, follow-up automatico, integrazione CRM.', image: 'sprint1.webp' },
                { title: 'Sprint 2', subtitle: 'Customer Care Automation', desc: 'Assistenza 24/7 con chatbot e voicebot, gestione ticket, risposte automatiche.', image: 'sprint2.webp' },
                { title: 'Sprint 3', subtitle: 'Finance Ops Automation', desc: 'Automatizza fatturazione, pagamenti, riconciliazioni, reportistica.', image: 'sprint3.webp' },
                { title: 'Sprint 4', subtitle: 'Internal Ops Automation', desc: 'Task interni, onboarding, notifiche e dashboard operativi.', image: 'sprint4.webp' }
            ]
        },
        deliverables: {
            title: 'Cosa troverai nel deliverable',
            subtitle: 'Nel nostro esempio vedrai:',
            items: [
                { title: 'Dashboard Notion', desc: 'Mappatura processi e metriche.', icon: 'layout' },
                { title: 'Flow Miro', desc: 'Step di automazione e priorità.', icon: 'share-2' },
                { title: 'Checklist priorità', desc: 'Impatto / costi / tempi.', icon: 'check-square' },
                { title: 'Video Walkthrough', desc: 'Spiegazione di ogni sezione.', icon: 'play-circle' } 
            ]
        },
        about: {
            title: 'La nostra storia',
            text: `
                <p class="mb-4">Your Agent Lab nasce a Dubai per offrire consulenza IA di alto livello alle aziende che vogliono innovare. La nostra missione è guidare la trasformazione digitale attraverso strategie personalizzate, tecnologie all'avanguardia e un approccio modulare.</p>
                <p class="mb-4">Crediamo che l'intelligenza artificiale debba essere accessibile, efficace e orientata ai risultati. Dal 2022, con la prima versione di ChatGPT, abbiamo studiato l'IA e imparato come ottimizzare processi, ridurre costi e accelerare la crescita di un'azienda.</p>
                <p>La nostra visione è diventare il punto di riferimento per l'AI consulting in Italia e Medio Oriente.</p>
            `
        },
        team: {
            title: 'Il nostro team',
            members: [
                { name: 'Nathalia', role: 'AI Specialist & Founder' },
                { name: 'Felipe', role: 'AI Developer & Automation Expert' },
                { name: 'Juan', role: 'Developer (Python, JavaScript, HTML)' },
                { name: 'Brenda', role: 'Marketing Specialist' },
                { name: 'Luca', role: 'Growth Partner & Strategist' }
            ]
        },
        faq: {
            title: 'FAQ',
            items: [
                { q: 'Quanto dura l\'audit?', a: 'Il processo richiede circa 7-10 giorni lavorativi.' },
                { q: 'Che accessi servono?', a: 'Solo quelli temporanei e necessari agli strumenti esistenti.' },
                { q: 'I dati sono al sicuro?', a: 'Sì. Possiamo firmare NDA su richiesta.' },
                { q: 'E se non implemento con voi?', a: 'La roadmap è tua: puoi usarla internamente o con altri.' },
                { q: 'Posso fare uno Sprint senza audit?', a: 'L\'audit è fondamentale per definire priorità e impatto.' },
                { q: 'Come misurate i risultati?', a: 'Con KPI come ore risparmiate, errori ridotti e automazioni attive.' },
                { q: 'Che strumenti usate?', a: 'GPT-4, Zapier, Make, n8n, CRM, Notion, Slack/WhatsApp integr.' },
                { q: 'Si può lavorare da remoto?', a: 'Sì, tutto il processo è online.' }
            ]
        },
        contact: { title: 'Pronto a partire?', scheduleTitle: 'Orari', schedule: ['Lunedì - Venerdì: 9:00 - 18:00', 'Sabato: 10:00 - 14:00'], formTitle: 'Prenota la tua call gratuita', form: {name:'Nome', company:'Azienda', email:'Email', phone:'Telefono', msg:'Messaggio', send:'Invia'} },
        whatsapp: 'Chatta su WhatsApp', 
        footer: { tagline: 'Soluzioni di Automazione e IA.', linksTitle: 'Link', legalTitle: 'Legale', socialTitle: 'Social', privacy: 'Privacy Policy', rights: 'Tutti i diritti riservati.' },
        
        // --- POLÍTICA DE PRIVACIDAD EN ITALIANO ---
        privacy: `
            <h2 class="text-2xl font-bold mb-4 font-heading text-primary">Informativa sulla Privacy</h2>
            <p class="mb-4 text-sm text-gray-500"><strong>Ultimo aggiornamento:</strong> 12 Novembre 2025</p>
            
            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">1. Introduzione</h3>
            <p class="mb-2">YourAgentLab ("noi", "nostro") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa sulla privacy ti informa su come trattiamo i tuoi dati personali quando visiti il nostro sito web e ti informa sui tuoi diritti in materia di privacy e su come la legge ti protegge.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">2. Dati che Raccogliamo</h3>
            <p class="mb-2">Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li><strong>Dati di identità:</strong> nome, cognome.</li>
                <li><strong>Dati di contatto:</strong> indirizzo email, numero di telefono.</li>
                <li><strong>Dati aziendali:</strong> nome azienda, settore.</li>
                <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, fuso orario.</li>
                <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">3. Come Utilizziamo i Tuoi Dati</h3>
            <p class="mb-2">Utilizziamo i tuoi dati personali per:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li>Rispondere alle tue richieste di informazioni.</li>
                <li>Fornirti i nostri servizi.</li>
                <li>Migliorare il nostro sito web e i nostri servizi.</li>
                <li>Inviarti comunicazioni di marketing (solo con il tuo consenso).</li>
                <li>Rispettare obblighi legali.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">4. Base Giuridica del Trattamento</h3>
            <p class="mb-2">Trattiamo i tuoi dati personali sulla base del tuo consenso, per l'esecuzione di un contratto, per adempiere a obblighi legali o per perseguire i nostri legittimi interessi commerciali.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">5. Condivisione dei Dati</h3>
            <p class="mb-2">Non vendiamo i tuoi dati personali a terzi. Possiamo condividere i tuoi dati con fornitori di servizi che ci aiutano a gestire la nostra attività (es. hosting, email marketing), sempre nel rispetto del GDPR.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">6. Sicurezza dei Dati</h3>
            <p class="mb-2">Abbiamo implementato misure di sicurezza appropriate per prevenire la perdita, l'uso improprio o l'alterazione dei tuoi dati personali. Tutti i dati sono criptati e archiviati in server sicuri.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">7. I Tuoi Diritti</h3>
            <p class="mb-2">Ai sensi del GDPR, hai il diritto di:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li>Accedere ai tuoi dati personali.</li>
                <li>Rettificare dati inesatti.</li>
                <li>Richiedere la cancellazione dei tuoi dati.</li>
                <li>Opporti al trattamento dei tuoi dati.</li>
                <li>Richiedere la limitazione del trattamento.</li>
                <li>Richiedere la portabilità dei dati.</li>
                <li>Revocare il consenso in qualsiasi momento.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">8. Cookie</h3>
            <p class="mb-2">Utilizziamo cookie essenziali per il funzionamento del sito e cookie analitici per migliorare l'esperienza utente. Puoi gestire le tue preferenze sui cookie tramite il banner presente sul sito.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">9. Conservazione dei Dati</h3>
            <p class="mb-2">Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi per cui sono stati raccolti, inclusi eventuali requisiti legali, contabili o di reporting.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">10. Contatti</h3>
            <p class="mb-2">Per qualsiasi domanda su questa informativa sulla privacy o per esercitare i tuoi diritti, contattaci a: <a href="mailto:privacy@youragentlab.com" class="text-primary hover:underline">privacy@youragentlab.com</a></p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">11. Modifiche a Questa Informativa</h3>
            <p class="mb-2">Ci riserviamo il diritto di aggiornare questa informativa sulla privacy in qualsiasi momento. Ti informeremo di eventuali modifiche pubblicando la nuova informativa su questa pagina.</p>
        `
    },
    en: {
        nav: { home: 'Home', audit: 'Audit & Roadmap', sprints: 'Sprints', about: 'About Us', team: 'Team', faq: 'FAQ', contact: 'Contact' },
        hero: { 
            h1: 'Save time, cut errors and scale your business with AI', 
            sub: 'We deliver a clear plan with what to automate, how, when and why - explained in plain language you can act on.',
            cta1: 'Book a free call',
            cta2: 'See a real example'
        },
        who: {
            title: 'Who We Help',
            subtitle: 'For businesses that want real results, not buzzwords',
            text: 'We help freelancers, Italian SMEs and local companies in Dubai streamline operations with practical, measurable AI automation.'
        },
        audit: {
            title: 'AI Operations Audit + Automation Roadmap',
            desc: 'We analyze your operational processes, identify inefficiencies and deliver a clear, actionable automation roadmap. You can use it with us or your own team.',
            deliverablesTitle: 'Deliverables:',
            list: [
                'Notion process map',
                'Miro automation flow',
                'Walkthrough video',
                '30/60/90 day implementation plan'
            ],
            cta: 'Book a free audit'
        },
        sprints: {
            title: 'Implementation Sprints',
            subtitle: 'Actionable sprints for real automation. After the audit, choose one or more sprints to implement tangible automation solutions.',
            cta: 'Choose your sprint',
            items: [
                { title: 'Sprint 1', subtitle: 'Lead & CRM Automation', desc: 'Automate lead capture, qualification and CRM follow-up.', image: 'sprint1.webp' },
                { title: 'Sprint 2', subtitle: 'Customer Care Automation', desc: '24/7 support with automated responses, chatbot and voicebot.', image: 'sprint2.webp' },
                { title: 'Sprint 3', subtitle: 'Finance Ops Automation', desc: 'Automate invoicing, payments, reconciliation and reports.', image: 'sprint3.webp' },
                { title: 'Sprint 4', subtitle: 'Internal Ops Automation', desc: 'Internal task automation, onboarding and operational dashboards.', image: 'sprint4.webp' }
            ]
        },
        deliverables: {
            title: 'What you\'ll see in the deliverable',
            subtitle: 'Includes:',
            items: [
                { title: 'Notion dashboard', desc: 'Processes and metrics.', icon: 'layout' },
                { title: 'Miro flow chart', desc: 'Automation steps and priorities.', icon: 'share-2' },
                { title: 'Priority checklist', desc: 'Impact / cost / time.', icon: 'check-square' },
                { title: 'Walkthrough video', desc: 'Full explanation of every section.', icon: 'play-circle' } 
            ]
        },
        about: {
            title: 'Our Story',
            text: `
                <p class="mb-4">Your Agent Lab was born in Dubai to offer high-level AI consulting to companies that want to innovate. Our mission is to drive digital transformation through custom strategies, cutting-edge technologies and a modular approach.</p>
                <p class="mb-4">We believe artificial intelligence should be accessible, effective and results-oriented. Since 2022, with the first version of ChatGPT, we have studied AI and learned how to optimize processes, reduce costs and accelerate business growth.</p>
                <p>Our vision is to become the go-to AI consulting firm in Italy and the Middle East.</p>
            `
        },
        team: {
            title: 'Our team',
            members: [
                { name: 'Nathalia', role: 'AI Specialist & Founder' },
                { name: 'Felipe', role: 'AI Developer & Automation Expert' },
                { name: 'Juan', role: 'Developer (Python, JavaScript, HTML)' },
                { name: 'Brenda', role: 'Marketing Specialist' },
                { name: 'Luca', role: 'Growth Partner & Strategist' }
            ]
        },
        faq: {
            title: 'FAQ',
            items: [
                { q: 'How long does the audit take?', a: 'The process takes about 7-10 business days.' },
                { q: 'What access is required?', a: 'Only temporary and necessary access to existing tools.' },
                { q: 'Is my data safe?', a: 'Yes. NDA can be signed on request.' },
                { q: 'What if I don\'t implement with you?', a: 'The roadmap is yours: use it internally or with others.' },
                { q: 'Can I start a sprint without an audit?', a: 'The audit is essential to define priorities and impact.' },
                { q: 'How do you measure results?', a: 'With KPIs like hours saved, errors reduced, active automations.' },
                { q: 'What tools do you use?', a: 'GPT-4, Zapier, Make, n8n, CRM, Notion, Slack/WhatsApp integr.' },
                { q: 'Can we work remotely?', a: 'Yes, the whole process is online.' }
            ]
        },
        contact: { title: 'Ready to start?', scheduleTitle: 'Hours', schedule: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 14:00'], formTitle: 'Book your free call', form: {name:'Name', company:'Company', email:'Email', phone:'Phone', msg:'Message', send:'Send'} },
        whatsapp: 'Chat on WhatsApp', 
        footer: { tagline: 'Automation and AI Solutions.', linksTitle: 'Links', legalTitle: 'Legal', socialTitle: 'Follow Us', privacy: 'Privacy Policy', rights: 'All rights reserved.' },
        
        // --- POLÍTICA DE PRIVACIDAD EN INGLÉS ---
        privacy: `
            <h2 class="text-2xl font-bold mb-4 font-heading text-primary">Privacy Policy</h2>
            <p class="mb-4 text-sm text-gray-500"><strong>Last Updated:</strong> November 12, 2025</p>
            
            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">1. Introduction</h3>
            <p class="mb-2">YourAgentLab ("we", "our") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights and how the law protects you.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">2. Data We Collect</h3>
            <p class="mb-2">We may collect, use, store, and transfer different kinds of personal data about you:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li><strong>Identity Data:</strong> first name, last name.</li>
                <li><strong>Contact Data:</strong> email address, phone number.</li>
                <li><strong>Business Data:</strong> company name, industry.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, time zone.</li>
                <li><strong>Usage Data:</strong> information about how you use our website.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">3. How We Use Your Data</h3>
            <p class="mb-2">We use your personal data to:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li>Respond to your requests for information.</li>
                <li>Provide you with our services.</li>
                <li>Improve our website and services.</li>
                <li>Send you marketing communications (only with your consent).</li>
                <li>Comply with legal obligations.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">4. Legal Basis for Processing</h3>
            <p class="mb-2">We process your personal data based on your consent, for the performance of a contract, to comply with legal obligations, or to pursue our legitimate business interests.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">5. Data Sharing</h3>
            <p class="mb-2">We do not sell your personal data to third parties. We may share your data with service providers who help us manage our business (e.g., hosting, email marketing), always in compliance with GDPR.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">6. Data Security</h3>
            <p class="mb-2">We have implemented appropriate security measures to prevent your personal data from being lost, used, or accessed in an unauthorized way, altered, or disclosed. All data is encrypted and stored on secure servers.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">7. Your Rights</h3>
            <p class="mb-2">Under the GDPR, you have the right to:</p>
            <ul class="list-disc pl-5 mb-2 space-y-1">
                <li>Access your personal data.</li>
                <li>Rectify inaccurate data.</li>
                <li>Request the deletion of your data.</li>
                <li>Object to the processing of your data.</li>
                <li>Request the restriction of processing.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time.</li>
            </ul>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">8. Cookies</h3>
            <p class="mb-2">We use essential cookies for the website's operation and analytical cookies to improve user experience. You can manage your cookie preferences via the banner on the site.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">9. Data Retention</h3>
            <p class="mb-2">We retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">10. Contact</h3>
            <p class="mb-2">For any questions about this privacy policy or to exercise your rights, please contact us at: <a href="mailto:privacy@youragentlab.com" class="text-primary hover:underline">privacy@youragentlab.com</a></p>

            <h3 class="text-lg font-bold mt-6 mb-2 font-heading">11. Changes to This Policy</h3>
            <p class="mb-2">We reserve the right to update this privacy policy at any time. We will notify you of any changes by posting the new policy on this page.</p>
        `
    }
};

// --- 2. STATE ---
let currentLang = 'it'; // Default to Italian
let currentServiceIdx = 0;

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    updateContent();

    if (window.AOS) {
        window.AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });
    }
});

// --- 4. LOGIC & EVENTS ---

window.toggleLangMenu = function(event) {
    if (event) event.stopPropagation();
    document.getElementById('lang-dropdown')?.classList.toggle('hidden');
};

document.addEventListener('click', function(event) {
    const menu = document.getElementById('lang-dropdown');
    if (menu && !menu.classList.contains('hidden') && !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

window.setLanguage = function(lang) {
    currentLang = lang;
    const label = document.getElementById('current-lang-label');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    updateContent();
    document.getElementById('lang-dropdown')?.classList.add('hidden');
};

window.toggleTheme = function() {
    document.documentElement.classList.toggle('dark');
    if (window.lucide) window.lucide.createIcons();
};

window.toggleMobileMenu = function() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
};

// ANIMATION LOGIC FOR SPRINTS
window.changeService = function(dir) {
    const card = document.getElementById('service-card');
    if (!card) return;

    // 1. Exit Animation
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '0';
    card.style.transform = dir > 0 ? 'translateX(-20px)' : 'translateX(20px)';
    
    // 2. Wait for exit animation, then update content
    setTimeout(() => {
        const items = CONTENT[currentLang].sprints.items;
        currentServiceIdx = (currentServiceIdx + dir + items.length) % items.length;
        renderSprintCard(items[currentServiceIdx]);
        if (window.lucide) window.lucide.createIcons();

        // 3. Prepare Enter Animation
        card.style.transition = 'none'; 
        card.style.transform = dir > 0 ? 'translateX(20px)' : 'translateX(-20px)';
        
        // 4. Trigger Enter Animation
        setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 50); 
    }, 300);
};


window.openPrivacyModal = function(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        // AQUÍ ES DONDE SE INYECTA EL NUEVO TEXTO DE PRIVACIDAD
        document.getElementById('privacy-content-body').innerHTML = CONTENT[currentLang].privacy;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
};

window.closePrivacyModal = function() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
};

// --- 5. RENDERERS ---

function updateContent() {
    const t = CONTENT[currentLang];
    if (!t) return;

    // Standard text replacement
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let val = t;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val && typeof val === 'string') el.textContent = val;
        if (val && typeof val === 'string' && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) el.placeholder = val;
    });

    // Special Renderers
    renderAuditList(t.audit.list);
    renderSprintCard(t.sprints.items[currentServiceIdx]);
    renderDeliverables(t.deliverables.items);
    renderAbout(t.about.text);
    renderTeam(t.team.members);
    renderFAQ(t.faq.items);
    renderSchedule(t.contact.schedule);
    
    if (window.lucide) window.lucide.createIcons();
    if (window.AOS) window.AOS.refresh();
}

function renderAuditList(list) {
    const container = document.getElementById('audit-list');
    if (!container) return;
    container.innerHTML = list.map(item => `
        <li class="flex items-center gap-3">
            <i data-lucide="check-circle-2" class="text-primary w-5 h-5 flex-shrink-0"></i>
            <span class="text-gray-700 dark:text-gray-300">${item}</span>
        </li>
    `).join('');
}

function renderSprintCard(item) {
    const container = document.getElementById('service-card');
    if (!container) return;
    const dots = CONTENT[currentLang].sprints.items.map((_, i) => 
        `<span class="block h-2 rounded-full transition-all duration-300 ${i === currentServiceIdx ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600'}"></span>`
    ).join('');
    
    // Updated Layout: Left side image, Right side text
    container.innerHTML = `
        <div class="flex-shrink-0 w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
            <img src="${item.image}" alt="${item.title}" class="w-full max-w-[350px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
            <div class="flex gap-2 mt-8">${dots}</div>
        </div>
        <div class="text-center md:text-left flex-grow w-full md:w-1/2 md:pl-8">
            <h3 class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">${item.title}</h3>
            <h4 class="text-xl font-bold mb-6 tracking-wide opacity-90 text-gray-900 dark:text-white">${item.subtitle}</h4>
            <p class="text-lg opacity-70 leading-relaxed mb-8 text-gray-700 dark:text-gray-300">${item.desc}</p>
        </div>
    `;
}

function renderDeliverables(items) {
    const container = document.getElementById('deliverables-grid');
    if (!container) return;
    container.innerHTML = items.map(item => `
        <div class="card-panel p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div class="p-3 bg-teal-50 dark:bg-gray-800 rounded-full mb-4 text-primary">
                <i data-lucide="${item.icon}" class="w-8 h-8"></i>
            </div>
            <h3 class="font-bold text-lg mb-2 font-heading">${item.title}</h3>
            <p class="text-sm opacity-80">${item.desc}</p>
        </div>
    `).join('');
}

function renderAbout(htmlText) {
    const container = document.querySelector('[data-i18n="about.text"]');
    if (container) container.innerHTML = htmlText;
}

function renderTeam(members) {
    const container = document.getElementById('team-grid');
    if (!container) return;
    container.innerHTML = members.map(m => `
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div class="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center text-primary font-bold text-xl mb-4">
                ${m.name.charAt(0)}
            </div>
            <h4 class="font-bold text-lg font-heading">${m.name}</h4>
            <p class="text-xs uppercase tracking-wide opacity-70 mt-1">${m.role}</p>
        </div>
    `).join('');
}

function renderFAQ(items) {
    const container = document.getElementById('faq-list');
    if (!container) return;
    container.innerHTML = items.map(f => `
        <details class="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
            <summary class="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer focus:outline-none list-none">
                <span class="text-lg font-medium font-heading text-gray-900 dark:text-gray-100">${f.q}</span>
                <span class="ml-6 flex-shrink-0 transition group-open:-rotate-180"><i data-lucide="chevron-down" class="text-primary"></i></span>
            </summary>
            <div class="px-6 pb-4 pt-0 opacity-70"><p>${f.a}</p></div>
        </details>
    `).join('');
}

function renderSchedule(times) {
    const container = document.getElementById('contact-schedule');
    if (!container) return;
    container.innerHTML = times.map(t => `<li>${t}</li>`).join('');
}