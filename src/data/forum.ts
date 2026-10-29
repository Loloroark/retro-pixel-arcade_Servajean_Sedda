export type Thread = {
  id: number
  title: string
  author: string
  date: string
  replies: number
  excerpt: string
}

export const threads: Thread[] = [
  {
    id: 1,
    title: 'Meilleure méthode pour battre le pattern de fantômes sur Pac-Man ?',
    author: 'Mika_84',
    date: '12 octobre 2026',
    replies: 14,
    excerpt: 'Je bloque toujours au niveau 5, les fantômes deviennent trop rapides...',
  },
  {
    id: 2,
    title: 'Qui a connu les bornes d\'arcade avant la Mega Drive ?',
    author: 'RetroGrandpa',
    date: '9 octobre 2026',
    replies: 31,
    excerpt: 'Petit souvenir nostalgique des salles d\'arcade des années 80...',
  },
  {
    id: 3,
    title: 'Astuce warp zone sur Super Mario Bros.',
    author: 'ToadStool',
    date: '2 octobre 2026',
    replies: 8,
    excerpt: 'Le monde 1-2 cache un passage vers le monde 4 si on sait où taper...',
  },
  {
    id: 4,
    title: 'Comparatif émulateurs pour tourner les ROMs Mega Drive',
    author: 'SegaForever',
    date: '28 septembre 2026',
    replies: 19,
    excerpt: 'Discussion sur les émulateurs légaux pour vos cartouches possédées...',
  },
]

export type Review = {
  id: number
  gameSlug: string
  author: string
  rating: number
  comment: string
}

export const reviews: Review[] = [
  {
    id: 1,
    gameSlug: 'tetris',
    author: 'PixelQueen',
    rating: 5,
    comment: 'Un jeu intemporel, toujours aussi addictif 40 ans après.',
  },
  {
    id: 2,
    gameSlug: 'street-fighter-2',
    author: 'Hadouken_42',
    rating: 5,
    comment: 'Ryu vs Ken reste le duel le plus légendaire de l\'arcade.',
  },
  {
    id: 3,
    gameSlug: 'the-legend-of-zelda',
    author: 'HyruleFan',
    rating: 4,
    comment: 'Difficile sans guide, mais quelle aventure pour l\'époque.',
  },
]
