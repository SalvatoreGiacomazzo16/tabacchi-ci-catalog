import type { Product } from '../types/product';

const placeholderImage =
  'https://imgs.search.brave.com/6GaHqxd0OsaVg03SImicQ0W88__cXnMjXQe5S-6xZLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnRl/aW5tb3ZpbWVudG9k/ZW1hcmlhLml0Lzkw/OTAtaG9tZV9kZWZh/dWx0L3B1bGNpbmVs/bGEtc3RhdHVpbmEt/YXJ0aWNvbG8tcmVn/YWxvLmpwZw';

export const products: Product[] = [
  {
    id: 'cotto-001',
    price: 24.9,
    size: '30 x 30 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Classico Vesuvio',
        description:
          'Vaso artigianale in cotto napoletano dal profilo tradizionale, ideale per balconi, terrazze e ingressi dal gusto mediterraneo.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Classic Vesuvio Vase',
        description:
          'Handcrafted Neapolitan terracotta vase with a traditional profile, ideal for balconies, terraces, and entrances with a Mediterranean feel.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Clásico Vesuvio',
        description:
          'Jarrón artesanal de terracota napolitana de perfil tradicional, ideal para balcones, terrazas y entradas con estilo mediterráneo.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Classique Vesuvio',
        description:
          'Vase artisanal en terre cuite napolitaine au profil traditionnel, idéal pour balcons, terrasses et entrées au style méditerranéen.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Klassische Vesuvio-Vase',
        description:
          'Handgefertigte neapolitanische Terrakotta-Vase mit traditioneller Form, ideal für Balkone, Terrassen und Eingangsbereiche im mediterranen Stil.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-002',
    price: 18.5,
    size: '28 x 12 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Ciotola Partenope Bassa',
        description:
          'Ciotola decorativa in cotto naturale, perfetta per composizioni floreali, piante aromatiche e piccoli agrumi ornamentali.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Partenope Low Bowl',
        description:
          'Decorative bowl in natural terracotta, perfect for floral arrangements, aromatic herbs, and small ornamental citrus plants.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Cuenco Bajo Partenope',
        description:
          'Cuenco decorativo de terracota natural, perfecto para composiciones florales, plantas aromáticas y pequeños cítricos ornamentales.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Coupe Basse Partenope',
        description:
          'Coupe décorative en terre cuite naturelle, parfaite pour compositions florales, plantes aromatiques et petits agrumes ornementaux.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Flache Partenope-Schale',
        description:
          'Dekorative Schale aus natürlicher Terrakotta, perfekt für Blumenarrangements, Kräuter und kleine Zier-Zitruspflanzen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-003',
    price: 39.9,
    size: '22 x 45 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Anfora Napoli Antica',
        description:
          'Anfora ispirata alle forme della tradizione campana, pensata come elemento decorativo per giardini, cortili e spazi interni rustici.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Ancient Naples Amphora',
        description:
          'Amphora inspired by traditional Campanian shapes, designed as a decorative element for gardens, courtyards, and rustic interiors.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Ánfora Nápoles Antigua',
        description:
          'Ánfora inspirada en las formas de la tradición campana, pensada como elemento decorativo para jardines, patios y espacios interiores rústicos.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Amphore Naples Ancienne',
        description:
          'Amphore inspirée des formes de la tradition campanienne, conçue comme élément décoratif pour jardins, cours et intérieurs rustiques.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Amphore Alt-Neapel',
        description:
          'Amphore, inspiriert von den Formen der kampanischen Tradition, gedacht als dekoratives Element für Gärten, Höfe und rustikale Innenräume.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-004',
    price: 21,
    size: '26 x 26 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Portavaso Sorrento',
        description:
          'Portavaso in cotto napoletano con finitura calda e materica, adatto a valorizzare piante ornamentali di medie dimensioni.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Sorrento Plant Holder',
        description:
          'Neapolitan terracotta plant holder with a warm, textured finish, suitable for enhancing medium-sized ornamental plants.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Portamaceta Sorrento',
        description:
          'Portamaceta de terracota napolitana con acabado cálido y matérico, ideal para realzar plantas ornamentales de tamaño medio.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Porte-pot Sorrento',
        description:
          'Porte-pot en terre cuite napolitaine avec finition chaude et texturée, adapté pour mettre en valeur des plantes ornementales de taille moyenne.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Pflanzgefäß Sorrento',
        description:
          'Pflanzenhalter aus neapolitanischer Terrakotta mit warmer, strukturierter Oberfläche, geeignet zur Aufwertung mittelgroßer Zierpflanzen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-005',
    price: 32.5,
    size: '50 x 20 x 18 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Fioriera Campania Rettangolare',
        description:
          'Fioriera in cotto rettangolare, pensata per erbe aromatiche, fiori stagionali e composizioni da davanzale o terrazzo.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Rectangular Campania Planter',
        description:
          'Rectangular terracotta planter designed for aromatic herbs, seasonal flowers, and arrangements for windowsills or terraces.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jardinera Rectangular Campania',
        description:
          'Jardinera rectangular de terracota, pensada para hierbas aromáticas, flores de temporada y composiciones para alféizares o terrazas.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Jardinière Rectangulaire Campania',
        description:
          'Jardinière rectangulaire en terre cuite, conçue pour herbes aromatiques, fleurs de saison et compositions de rebord de fenêtre ou terrasse.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Rechteckiger Campania-Pflanzkasten',
        description:
          'Rechteckiger Pflanzkasten aus Terrakotta, gedacht für Kräuter, saisonale Blumen und Arrangements für Fensterbänke oder Terrassen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-006',
    price: 34,
    size: '25 x 40 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Pompei Alto',
        description:
          'Vaso slanciato in cotto artigianale, perfetto per piante decorative verticali e per dare eleganza a ingressi e porticati.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Tall Pompeii Vase',
        description:
          'Tall handcrafted terracotta vase, perfect for vertical decorative plants and for adding elegance to entrances and porticoes.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Alto Pompeya',
        description:
          'Jarrón esbelto de terracota artesanal, perfecto para plantas decorativas verticales y para dar elegancia a entradas y pórticos.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Haut Pompéi',
        description:
          'Vase élancé en terre cuite artisanale, parfait pour les plantes décoratives verticales et pour apporter de l’élégance aux entrées et portiques.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Hohe Pompeji-Vase',
        description:
          'Schlanke handgefertigte Terrakotta-Vase, ideal für vertikale Zierpflanzen und um Eingangsbereichen und Arkaden Eleganz zu verleihen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-007',
    price: 16.9,
    size: '24 x 10 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Ciotola Capri Decor',
        description:
          'Ciotola in cotto dal design semplice e raffinato, ideale per centrotavola naturali, succulente e piante basse.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Capri Decor Bowl',
        description:
          'Terracotta bowl with a simple and refined design, ideal for natural centerpieces, succulents, and low-growing plants.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Cuenco Capri Decor',
        description:
          'Cuenco de terracota de diseño sencillo y refinado, ideal para centros de mesa naturales, suculentas y plantas bajas.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Coupe Capri Decor',
        description:
          'Coupe en terre cuite au design simple et raffiné, idéale pour centres de table naturels, succulentes et plantes basses.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Capri-Dekorschale',
        description:
          'Terrakotta-Schale mit schlichtem und elegantem Design, ideal für natürliche Tischdekorationen, Sukkulenten und niedrige Pflanzen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-008',
    price: 27.5,
    size: '32 x 32 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Tradizione Napoletana',
        description:
          'Vaso classico con linee sobrie e lavorazione ispirata alla manifattura locale, adatto sia ad ambienti esterni che interni.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Neapolitan Tradition Vase',
        description:
          'Classic vase with understated lines and craftsmanship inspired by local manufacturing, suitable for both outdoor and indoor spaces.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Tradición Napolitana',
        description:
          'Jarrón clásico de líneas sobrias y elaboración inspirada en la manufactura local, apto tanto para exteriores como para interiores.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Tradition Napolitaine',
        description:
          'Vase classique aux lignes sobres et à la fabrication inspirée de l’artisanat local, adapté aux espaces extérieurs comme intérieurs.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Vase Neapolitanische Tradition',
        description:
          'Klassische Vase mit schlichten Linien und von lokaler Handwerkskunst inspirierter Verarbeitung, geeignet für Außen- und Innenbereiche.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-009',
    price: 44.9,
    size: '26 x 52 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Anfora Ercolano',
        description:
          'Elemento decorativo in cotto napoletano con silhouette morbida e presenza scenica, pensato per ambienti dal gusto autentico.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Herculaneum Amphora',
        description:
          'Decorative element in Neapolitan terracotta with a soft silhouette and strong visual presence, designed for spaces with authentic character.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Ánfora Herculano',
        description:
          'Elemento decorativo en terracota napolitana con silueta suave y presencia escénica, pensado para ambientes de gusto auténtico.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Amphore Herculanum',
        description:
          'Élément décoratif en terre cuite napolitaine à la silhouette douce et à la forte présence visuelle, conçu pour des espaces au goût authentique.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Herculaneum-Amphore',
        description:
          'Dekoratives Element aus neapolitanischer Terrakotta mit weicher Silhouette und starker Wirkung, gedacht für Räume mit authentischem Charakter.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-010',
    price: 48,
    size: '60 x 24 x 22 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Fioriera Vesuviana Grande',
        description:
          'Fioriera capiente in cotto naturale, ideale per terrazzi, giardini o spazi commerciali che cercano un’estetica calda e tradizionale.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Large Vesuvian Planter',
        description:
          'Large natural terracotta planter, ideal for terraces, gardens, or commercial spaces seeking a warm and traditional aesthetic.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jardinera Vesubiana Grande',
        description:
          'Jardinera amplia de terracota natural, ideal para terrazas, jardines o espacios comerciales que buscan una estética cálida y tradicional.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Grande Jardinière Vésuvienne',
        description:
          'Grande jardinière en terre cuite naturelle, idéale pour terrasses, jardins ou espaces commerciaux recherchant une esthétique chaleureuse et traditionnelle.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Großer Vesuv-Pflanzkasten',
        description:
          'Großer Pflanzkasten aus natürlicher Terrakotta, ideal für Terrassen, Gärten oder gewerbliche Räume mit warmer und traditioneller Ästhetik.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-011',
    price: 14.5,
    size: '20 x 14 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Porta Aromi Posillipo',
        description:
          'Contenitore in cotto studiato per basilico, rosmarino e altre aromatiche, perfetto per cucina, balcone o piccolo patio.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Posillipo Herb Holder',
        description:
          'Terracotta container designed for basil, rosemary, and other herbs, perfect for kitchens, balconies, or small patios.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Porta Aromas Posillipo',
        description:
          'Recipiente de terracota pensado para albahaca, romero y otras hierbas aromáticas, perfecto para cocina, balcón o pequeño patio.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Porte-aromates Posillipo',
        description:
          'Contenant en terre cuite conçu pour basilic, romarin et autres herbes aromatiques, parfait pour cuisine, balcon ou petit patio.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Posillipo-Kräutergefäß',
        description:
          'Terrakotta-Gefäß für Basilikum, Rosmarin und andere Kräuter, perfekt für Küche, Balkon oder kleinen Patio.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-012',
    price: 22.9,
    size: '27 x 27 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Amalfi Medio',
        description:
          'Vaso in cotto di media grandezza dal colore caldo e naturale, adatto a piante fiorite, sempreverdi e piccoli arbusti.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Medium Amalfi Vase',
        description:
          'Medium-sized terracotta vase with a warm natural tone, suitable for flowering plants, evergreens, and small shrubs.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Amalfi Mediano',
        description:
          'Jarrón de terracota de tamaño medio con color cálido y natural, adecuado para plantas floridas, perennes y pequeños arbustos.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Amalfi Moyen',
        description:
          'Vase en terre cuite de taille moyenne à la teinte chaude et naturelle, adapté aux plantes fleuries, persistantes et petits arbustes.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Mittlere Amalfi-Vase',
        description:
          'Mittelgroße Terrakotta-Vase in warmem Naturton, geeignet für blühende Pflanzen, immergrüne Gewächse und kleine Sträucher.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-013',
    price: 19.9,
    size: '30 x 14 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Coppa Ornamentale San Gregorio',
        description:
          'Coppa ornamentale in cotto napoletano, ideale come pezzo decorativo per tavoli esterni, mensole o nicchie arredate.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'San Gregorio Ornamental Bowl',
        description:
          'Ornamental bowl in Neapolitan terracotta, ideal as a decorative piece for outdoor tables, shelves, or styled niches.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Copa Ornamental San Gregorio',
        description:
          'Copa ornamental de terracota napolitana, ideal como pieza decorativa para mesas exteriores, estantes o nichos decorados.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Coupe Ornementale San Gregorio',
        description:
          'Coupe ornementale en terre cuite napolitaine, idéale comme pièce décorative pour tables extérieures, étagères ou niches aménagées.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Zierschale San Gregorio',
        description:
          'Zierschale aus neapolitanischer Terrakotta, ideal als dekoratives Element für Außentische, Regale oder gestaltete Nischen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-014',
    price: 29.9,
    size: '35 x 35 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Torre del Greco',
        description:
          'Vaso robusto in cotto lavorato, pensato per ambienti esterni esposti e per piante dalla presenza importante.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Torre del Greco Vase',
        description:
          'Robust worked terracotta vase, designed for exposed outdoor areas and for plants with a strong visual presence.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Torre del Greco',
        description:
          'Jarrón robusto de terracota trabajada, pensado para exteriores expuestos y para plantas con presencia importante.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Torre del Greco',
        description:
          'Vase robuste en terre cuite travaillée, conçu pour les espaces extérieurs exposés et pour des plantes à forte présence visuelle.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Vase Torre del Greco',
        description:
          'Robuste bearbeitete Terrakotta-Vase, gedacht für exponierte Außenbereiche und Pflanzen mit starker Präsenz.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-015',
    price: 36.5,
    size: '55 x 18 x 20 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Fioriera Linea Partenope',
        description:
          'Fioriera elegante in cotto napoletano dalla forma lineare, perfetta per progetti verdi moderni con richiamo artigianale.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Partenope Line Planter',
        description:
          'Elegant Neapolitan terracotta planter with a linear shape, perfect for modern green projects with an artisanal touch.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jardinera Línea Partenope',
        description:
          'Elegante jardinera de terracota napolitana de forma lineal, perfecta para proyectos verdes modernos con toque artesanal.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Jardinière Ligne Partenope',
        description:
          'Élégante jardinière en terre cuite napolitaine à la forme linéaire, parfaite pour des projets verts modernes au caractère artisanal.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Pflanzkasten Linie Partenope',
        description:
          'Eleganter Pflanzkasten aus neapolitanischer Terrakotta mit geradliniger Form, perfekt für moderne Begrünungsprojekte mit handwerklichem Charakter.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-016',
    price: 42,
    size: '24 x 48 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Anfora Mediterranea Napoli',
        description:
          'Anfora decorativa in cotto naturale, dal carattere mediterraneo, ideale per dare personalità a giardini, verande e locali.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Mediterranean Naples Amphora',
        description:
          'Decorative amphora in natural terracotta with a Mediterranean character, ideal for adding personality to gardens, verandas, and venues.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Ánfora Mediterránea Nápoles',
        description:
          'Ánfora decorativa de terracota natural, de carácter mediterráneo, ideal para dar personalidad a jardines, verandas y locales.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Amphore Méditerranéenne Naples',
        description:
          'Amphore décorative en terre cuite naturelle au caractère méditerranéen, idéale pour donner de la personnalité aux jardins, vérandas et lieux.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Mediterrane Neapel-Amphore',
        description:
          'Dekorative Amphore aus natürlicher Terrakotta mit mediterranem Charakter, ideal um Gärten, Veranden und Räumen Persönlichkeit zu verleihen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-017',
    price: 25.5,
    size: '31 x 30 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Giardino Campano',
        description:
          'Vaso tradizionale in cotto con bordatura classica, versatile e adatto a una grande varietà di piante ornamentali.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Campanian Garden Vase',
        description:
          'Traditional terracotta vase with a classic rim, versatile and suitable for a wide variety of ornamental plants.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Jardín Campano',
        description:
          'Jarrón tradicional de terracota con borde clásico, versátil y adecuado para una amplia variedad de plantas ornamentales.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Jardin Campanien',
        description:
          'Vase traditionnel en terre cuite avec bordure classique, polyvalent et adapté à une grande variété de plantes ornementales.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Kampanischer Gartenvase',
        description:
          'Traditionelle Terrakotta-Vase mit klassischem Rand, vielseitig und geeignet für eine große Vielfalt an Zierpflanzen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-018',
    price: 15.9,
    size: '26 x 11 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Ciotola Rustica Napoli Sud',
        description:
          'Ciotola rustica in cotto napoletano, perfetta per piccoli angoli verdi, composizioni con cactus o decorazioni naturali.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Naples South Rustic Bowl',
        description:
          'Rustic bowl in Neapolitan terracotta, perfect for small green corners, cactus arrangements, or natural decorations.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Cuenco Rústico Nápoles Sur',
        description:
          'Cuenco rústico de terracota napolitana, perfecto para pequeños rincones verdes, composiciones con cactus o decoraciones naturales.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Coupe Rustique Naples Sud',
        description:
          'Coupe rustique en terre cuite napolitaine, parfaite pour petits coins verts, compositions de cactus ou décorations naturelles.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Rustikale Schale Neapel Süd',
        description:
          'Rustikale Schale aus neapolitanischer Terrakotta, perfekt für kleine grüne Ecken, Kaktus-Arrangements oder natürliche Dekorationen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-019',
    price: 31,
    size: '33 x 36 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Vaso Borbonico',
        description:
          'Vaso in cotto dal richiamo classico e senza tempo, ideale per arredare con gusto tradizionale cortili e terrazzi.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Bourbon Vase',
        description:
          'Terracotta vase with a classic and timeless appeal, ideal for decorating courtyards and terraces with traditional taste.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jarrón Borbónico',
        description:
          'Jarrón de terracota de aire clásico y atemporal, ideal para decorar patios y terrazas con gusto tradicional.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Vase Bourbon',
        description:
          'Vase en terre cuite au charme classique et intemporel, idéal pour décorer cours et terrasses avec un goût traditionnel.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Bourbonen-Vase',
        description:
          'Terrakotta-Vase mit klassischem und zeitlosem Charakter, ideal zur Gestaltung von Höfen und Terrassen im traditionellen Stil.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
  {
    id: 'cotto-020',
    price: 23.5,
    size: '40 x 18 x 16 cm',
    image: placeholderImage,
    currency: 'EUR',
    translations: {
      it: {
        title: 'Fioriera Napoli Centro',
        description:
          'Fioriera compatta in cotto artigianale, pratica e decorativa, adatta a balconi urbani e piccoli spazi verdi.',
        category: 'Cotto napoletano',
      },
      en: {
        title: 'Naples Center Planter',
        description:
          'Compact handcrafted terracotta planter, practical and decorative, suitable for urban balconies and small green spaces.',
        category: 'Neapolitan terracotta',
      },
      es: {
        title: 'Jardinera Nápoles Centro',
        description:
          'Jardinera compacta de terracota artesanal, práctica y decorativa, apta para balcones urbanos y pequeños espacios verdes.',
        category: 'Terracota napolitana',
      },
      fr: {
        title: 'Jardinière Naples Centre',
        description:
          'Jardinière compacte en terre cuite artisanale, pratique et décorative, adaptée aux balcons urbains et aux petits espaces verts.',
        category: 'Terre cuite napolitaine',
      },
      de: {
        title: 'Pflanzkasten Neapel Zentrum',
        description:
          'Kompakter handgefertigter Terrakotta-Pflanzkasten, praktisch und dekorativ, geeignet für städtische Balkone und kleine Grünflächen.',
        category: 'Neapolitanische Terrakotta',
      },
    },
  },
];