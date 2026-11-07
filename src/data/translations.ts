export type Language = 'FR' | 'ES';

export interface Translations {
  navbar: {
    badge1: string;
    badge2: string;
    callUs: string;
    studyBtn: string;
    links: {
      accueil: string;
      solutions: string;
      innovation: string;
      comparatif: string;
      realisations: string;
      prescripteurs: string;
      faq: string;
      contact: string;
    };
  };
  hero: {
    kicker1: string;
    kicker2: string;
    kicker3: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    btnSolutions: string;
    btnSimulate: string;
    btnQuote: string;
    truckDelivery: string;
    factoryDelivery: string;
    mobileSilo: string;
    ecoBadgeTitle: string;
    ecoBadgeDesc: string;
    statExperience: string;
    statPermeable: string;
    pillars: Array<{ title: string; subtitle: string }>;
  };
  solutions: {
    title: string;
    subtitle: string;
    badge: string;
    cctpBtn: string;
    quoteBtn: string;
  };
  innovation: {
    badge: string;
    title: string;
    subtitle: string;
    charterTag: string;
    charterTitle: string;
    charterSlogan: string;
    charterDesc: string;
    steps: Array<{ title: string; desc: string }>;
  };
  simulator: {
    badge: string;
    title: string;
    subtitle: string;
    areaLabel: string;
    thicknessLabel: string;
    calcBtn: string;
    summaryTitle: string;
    truckCount: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    projectLabel: string;
    sendBtn: string;
  };
  footer: {
    slogan: string;
    desc: string;
    rights: string;
    ecoMember: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  FR: {
    navbar: {
      badge1: 'Fabricant français depuis 1997',
      badge2: 'Livraisons camions bennes en France et Espagne',
      callUs: 'Conseil technique',
      studyBtn: 'Demander une étude',
      links: {
        accueil: 'Accueil',
        solutions: 'Solutions',
        innovation: 'Innovation R&D',
        comparatif: 'Comparatif',
        realisations: 'Réalisations',
        prescripteurs: 'Prescripteurs',
        faq: 'FAQ',
        contact: 'Contact'
      }
    },
    hero: {
      kicker1: 'TERRAINS DURABLES',
      kicker2: 'ESPACES DE VIE',
      kicker3: 'SOLUTIONS NATURELLES',
      titleStart: 'Spécialiste des revêtements de sols',
      titleHighlight: 'extérieurs stabilisés',
      subtitle: 'Des solutions durables, perméables et haute performance pour vos espaces urbains, paysagers et sportifs. Liant breveté à base de ciment de verre issu du recyclage.',
      btnSolutions: 'Découvrir nos solutions',
      btnSimulate: 'Simuler mon projet (m²)',
      btnQuote: 'Demande rapide de devis',
      truckDelivery: 'Livraison camions bennes : France & Espagne',
      factoryDelivery: 'Départ usine & centrales partenaires',
      mobileSilo: 'Silo mobile sur chantier',
      ecoBadgeTitle: 'Des sols durables pour aujourd’hui et pour demain',
      ecoBadgeDesc: 'Liant inédit ECOSTABIL® à base de ciment de verre breveté (soutiens BRGM & Eco-Emballages).',
      statExperience: '+25 ans de savoir-faire',
      statPermeable: 'Perméable & Zéro Ruissellement',
      pillars: [
        { title: 'Éco-matériaux', subtitle: 'Verre recyclé micronisé' },
        { title: 'Bas carbone', subtitle: 'Sans cuisson de clinker' },
        { title: 'Perméable', subtitle: 'Infiltration naturelle' },
        { title: 'Îlot de fraîcheur', subtitle: 'Albédo frais & naturel' },
        { title: 'Économie circulaire', subtitle: 'Verres de déconstruction' }
      ]
    },
    solutions: {
      title: 'Nos revêtements stabilisés écologiques',
      subtitle: 'Trois gammes techniques brevetées développées pour résister aux intempéries, au trafic et au temps.',
      badge: 'GAMME FABRICANT',
      cctpBtn: 'Fiche technique & CCTP',
      quoteBtn: 'Demander un chiffrage'
    },
    innovation: {
      badge: 'INNOVATION R&D BREVETÉE',
      title: 'Le ciment de verre au service de l’environnement',
      subtitle: 'Transformer les verres ultimes non recyclables en un liant minéral de très haute résistance sans aucune cuisson énergivore.',
      charterTag: 'NOUVELLE CHARTE OFFICIELLE',
      charterTitle: 'De la matière recyclée à la livraison sur chantier',
      charterSlogan: '« La qualité environnementale vue du sol »',
      charterDesc: 'Notre processus valorise les rebuts verriers en un ciment pouzzolanique breveté, livré en bennes prêtes à l’emploi.',
      steps: [
        { title: '1. Verres ultimes recyclés', desc: 'Déconstruction, vitrages et pare-brises non réutilisables.' },
        { title: '2. Micronisation à froid', desc: 'Broyage fin sans clinkerisation (-75% d’empreinte carbone).' },
        { title: '3. Livraison directe', desc: 'Acheminement en camions bennes partout en France et Espagne.' }
      ]
    },
    simulator: {
      badge: 'ESTIMATEUR TECHNIQUE',
      title: 'Calculez vos tonnages et volumes',
      subtitle: 'Obtenez immédiatement une estimation précise des matériaux nécessaires à votre surface.',
      areaLabel: 'Surface à aménager (m²)',
      thicknessLabel: 'Épaisseur compactée (cm)',
      calcBtn: 'Appliquer au devis',
      summaryTitle: 'Synthèse de vos besoins',
      truckCount: 'Camions bennes estimés'
    },
    contact: {
      badge: 'ÉTUDE PERSONNALISÉE',
      title: 'Contactez notre service technique',
      subtitle: 'Réponse sous 24h ouvrées par nos ingénieurs applicateurs.',
      nameLabel: 'Nom & Prénom',
      emailLabel: 'Adresse email professionnelle',
      phoneLabel: 'Numéro de téléphone',
      projectLabel: 'Décrivez votre projet (lieu, surface, usage)',
      sendBtn: 'Envoyer ma demande d’étude'
    },
    footer: {
      slogan: '« La qualité environnementale vue du sol »',
      desc: 'Fabricant français de revêtements de sols stabilisés écologiques depuis 1997.',
      rights: 'Tous droits réservés.',
      ecoMember: 'Membre du réseau éco entreprises'
    }
  },
  ES: {
    navbar: {
      badge1: 'Fabricante desde 1997',
      badge2: 'Entregas en camiones volquete en España y Francia',
      callUs: 'Asesoramiento técnico',
      studyBtn: 'Solicitar presupuesto',
      links: {
        accueil: 'Inicio',
        solutions: 'Soluciones',
        innovation: 'Innovación I+D',
        comparatif: 'Comparativa',
        realisations: 'Obras',
        prescripteurs: 'Prescriptores',
        faq: 'Preguntas',
        contact: 'Contacto'
      }
    },
    hero: {
      kicker1: 'SUELOS SOSTENIBLES',
      kicker2: 'ESPACIOS DE VIDA',
      kicker3: 'SOLUCIONES NATURALES',
      titleStart: 'Especialista en pavimentos exteriores',
      titleHighlight: 'estabilizados ecológicos',
      subtitle: 'Soluciones duraderas, permeables y de alto rendimiento para espacios urbanos, paisajísticos y deportivos. Ligante patentado a base de cemento de vidrio reciclado.',
      btnSolutions: 'Descubrir nuestras soluciones',
      btnSimulate: 'Simular mi proyecto (m²)',
      btnQuote: 'Solicitud rápida de presupuesto',
      truckDelivery: 'Entregas en camiones volquete : España y Francia',
      factoryDelivery: 'Salida de fábrica y plantas asociadas',
      mobileSilo: 'Silo móvil disponible en obra',
      ecoBadgeTitle: 'Suelos duraderos para hoy y para el futuro',
      ecoBadgeDesc: 'Ligante pionero ECOSTABIL® formulado con cemento de vidrio patentado.',
      statExperience: '+25 años de experiencia',
      statPermeable: '100% Permeable y Sin Escorrentía',
      pillars: [
        { title: 'Eco-materiales', subtitle: 'Vidrio reciclado micronizado' },
        { title: 'Bajo en carbono', subtitle: 'Sin cocción de clínker (-75% CO₂)' },
        { title: 'Permeable', subtitle: 'Infiltración natural del agua' },
        { title: 'Alivio térmico', subtitle: 'Albedo fresco y natural' },
        { title: 'Economía circular', subtitle: 'Residuos de vidrio valorizados' }
      ]
    },
    solutions: {
      title: 'Nuestros pavimentos estabilizados ecológicos',
      subtitle: 'Tres gamas técnicas patentadas desarrolladas para resistir al clima, al tránsito y al paso del tiempo.',
      badge: 'GAMA DE FABRICANTE',
      cctpBtn: 'Ficha técnica y pliego',
      quoteBtn: 'Solicitar presupuesto'
    },
    innovation: {
      badge: 'INNOVACIÓN I+D PATENTADA',
      title: 'El cemento de vidrio al servicio del medio ambiente',
      subtitle: 'Transformación de residuos vítreos no reciclables en un ligante mineral de muy alta resistencia sin cocción contaminante.',
      charterTag: 'NUEVA IDENTIDAD OFICIAL',
      charterTitle: 'Desde la materia prima reciclada hasta la entrega en obra',
      charterSlogan: '« La calidad medioambiental vista desde el suelo »',
      charterDesc: 'Nuestro proceso industrial transforma el residuo de vidrio en un ligante puzolánico patentado, suministrado directamente en camiones volquete.',
      steps: [
        { title: '1. Vidrios reciclados', desc: 'Vidrios de derribo y parabrisas no aprovechables por la vía clásica.' },
        { title: '2. Micronizado en frío', desc: 'Molienda de alta precisión sin hornos energívoros (-75% huella CO₂).' },
        { title: '3. Entrega directa en obra', desc: 'Suministro en camiones volquete en toda España y Francia.' }
      ]
    },
    simulator: {
      badge: 'ESTIMADOR TÉCNICO',
      title: 'Calcule sus toneladas y volúmenes',
      subtitle: 'Obtenga al instante una estimación precisa de los materiales necesarios para su superficie.',
      areaLabel: 'Superficie a pavimentar (m²)',
      thicknessLabel: 'Espesor compactado (cm)',
      calcBtn: 'Aplicar al presupuesto',
      summaryTitle: 'Resumen de necesidades',
      truckCount: 'Camiones volquete estimados'
    },
    contact: {
      badge: 'ESTUDIO PERSONALIZADO',
      title: 'Contacte con nuestro equipo técnico',
      subtitle: 'Respuesta en 24h laborables por ingenieros especialistas.',
      nameLabel: 'Nombre y Apellidos',
      emailLabel: 'Correo electrónico profesional',
      phoneLabel: 'Teléfono de contacto',
      projectLabel: 'Describa su proyecto (ubicación, superficie, uso previsto)',
      sendBtn: 'Enviar solicitud de estudio'
    },
    footer: {
      slogan: '« La calidad medioambiental vista desde el suelo »',
      desc: 'Fabricante de pavimentos estabilizados ecológicos desde 1997.',
      rights: 'Todos los derechos reservados.',
      ecoMember: 'Compromiso medioambiental y economía circular'
    }
  }
};
