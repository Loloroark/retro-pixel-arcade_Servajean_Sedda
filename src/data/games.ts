import pacMan from '../assets/games/pac-man.jpg'
import spaceInvaders from '../assets/games/space-invaders.png'
import donkeyKong from '../assets/games/donkey-kong.jpeg'
import tetris from '../assets/games/tetris.jpeg'
import superMarioBros from '../assets/games/super-mario-bros.jpg'
import zelda from '../assets/games/zelda.jpg'
import sonic from '../assets/games/sonic.jpeg'
import streetFighter2 from '../assets/games/street-fighter-2.webp'
import galaga from '../assets/games/galaga.avif'

export type Game = {
  slug: string
  title: string
  year: number
  studio: string
  platform: string
  genre: string
  cover: string
  description: string
  longDescription: string
  score: number
  stock: 'disponible' | 'epuise'
  price: string
  highScore: { pseudo: string; score: number }
}

export const games: Game[] = [
  {
    slug: 'pac-man',
    title: 'Pac-Man',
    year: 1980,
    studio: 'Namco',
    platform: 'Borne d\'arcade',
    genre: 'Labyrinthe',
    cover: pacMan,
    description: 'Le labyrinthe le plus célèbre du jeu vidéo.',
    longDescription:
      'Pac-Man doit avaler toutes les pastilles d\'un labyrinthe tout en évitant quatre fantômes. Sorti en 1980, il reste une icône absolue de l\'âge d\'or de l\'arcade.',
    score: 94,
    stock: 'disponible',
    price: '14,90 €',
    highScore: { pseudo: 'BIL', score: 3333360 },
  },
  {
    slug: 'space-invaders',
    title: 'Space Invaders',
    year: 1978,
    studio: 'Taito',
    platform: 'Borne d\'arcade',
    genre: 'Shoot them up',
    cover: spaceInvaders,
    description: 'Le shoot them up fondateur du genre.',
    longDescription:
      'Repousser des vagues d\'envahisseurs qui descendent inexorablement vers le joueur : Space Invaders a posé en 1978 les bases d\'un genre entier.',
    score: 88,
    stock: 'disponible',
    price: '12,50 €',
    highScore: { pseudo: 'REX', score: 999999 },
  },
  {
    slug: 'donkey-kong',
    title: 'Donkey Kong',
    year: 1981,
    studio: 'Nintendo',
    platform: 'Borne d\'arcade',
    genre: 'Plateforme',
    cover: donkeyKong,
    description: 'Les débuts de Mario, alors charpentier anonyme.',
    longDescription:
      'Un gorille a enlevé Pauline en haut d\'un chantier. Jumpman (futur Mario) doit grimper les échelles et éviter les tonneaux pour la secourir.',
    score: 85,
    stock: 'epuise',
    price: '16,00 €',
    highScore: { pseudo: 'WES', score: 1218000 },
  },
  {
    slug: 'tetris',
    title: 'Tetris',
    year: 1984,
    studio: 'Alexey Pajitnov',
    platform: 'PC / Game Boy',
    genre: 'Puzzle',
    cover: tetris,
    description: 'Le puzzle game le plus porté de l\'histoire.',
    longDescription:
      'Empiler des tétriminos pour compléter des lignes avant qu\'elles n\'atteignent le sommet du plateau. Conçu en URSS en 1984, Tetris s\'est depuis vendu sur toutes les plateformes imaginables.',
    score: 96,
    stock: 'disponible',
    price: '9,90 €',
    highScore: { pseudo: 'JOS', score: 1750000 },
  },
  {
    slug: 'super-mario-bros',
    title: 'Super Mario Bros.',
    year: 1985,
    studio: 'Nintendo',
    platform: 'NES',
    genre: 'Plateforme',
    cover: superMarioBros,
    description: 'Le jeu qui a relancé l\'industrie après le krach de 1983.',
    longDescription:
      'Mario traverse le royaume Champignon pour délivrer la princesse Peach. Son défilement horizontal fluide et son level design ont défini le jeu de plateforme moderne.',
    score: 97,
    stock: 'disponible',
    price: '18,00 €',
    highScore: { pseudo: 'TOM', score: 9999950 },
  },
  {
    slug: 'the-legend-of-zelda',
    title: 'The Legend of Zelda',
    year: 1986,
    studio: 'Nintendo',
    platform: 'NES',
    genre: 'Action-aventure',
    cover: zelda,
    description: 'Le point de départ de l\'action-aventure moderne.',
    longDescription:
      'Link explore le royaume d\'Hyrule, donjon après donjon, pour reconstituer la Triforce et sauver la princesse Zelda. Un monde ouvert pionnier pour l\'époque.',
    score: 93,
    stock: 'disponible',
    price: '19,50 €',
    highScore: { pseudo: 'LNK', score: 230 },
  },
  {
    slug: 'sonic-the-hedgehog',
    title: 'Sonic the Hedgehog',
    year: 1991,
    studio: 'Sega',
    platform: 'Mega Drive',
    genre: 'Plateforme',
    cover: sonic,
    description: 'La mascotte vitesse de Sega entre en scène.',
    longDescription:
      'Sonic traverse Green Hill Zone à toute vitesse pour empêcher le Dr Robotnik de transformer les animaux en robots. Lancé en 1991 pour concurrencer Mario.',
    score: 90,
    stock: 'epuise',
    price: '15,00 €',
    highScore: { pseudo: 'SNC', score: 189640 },
  },
  {
    slug: 'street-fighter-2',
    title: 'Street Fighter II',
    year: 1991,
    studio: 'Capcom',
    platform: 'Borne d\'arcade',
    genre: 'Combat',
    cover: streetFighter2,
    description: 'Le jeu de combat qui a lancé le genre en compétition.',
    longDescription:
      'Huit combattants du monde entier s\'affrontent dans un tournoi. Street Fighter II a posé les bases du jeu de combat compétitif et de la scène eSport naissante.',
    score: 92,
    stock: 'disponible',
    price: '17,00 €',
    highScore: { pseudo: 'RYU', score: 999900 },
  },
  {
    slug: 'galaga',
    title: 'Galaga',
    year: 1981,
    studio: 'Namco',
    platform: 'Borne d\'arcade',
    genre: 'Shoot them up',
    cover: galaga,
    description: 'La suite spirituelle de Galaxian, avec capture de vaisseau.',
    longDescription:
      'Face à des escadrilles d\'insectes spatiaux, le joueur peut se faire capturer son vaisseau par un boss puis le récupérer pour tirer double. Un classique de l\'arcade japonaise.',
    score: 87,
    stock: 'disponible',
    price: '13,00 €',
    highScore: { pseudo: 'GAL', score: 1450000 },
  },
]

export const getGameBySlug = (slug: string) => games.find((g) => g.slug === slug)
