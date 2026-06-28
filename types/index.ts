export type Role = 'IGL' | 'Rifler' | 'AWPer' | 'Support' | 'Entry Fragger'
export type Region = 'NA' | 'EU' | 'SA' | 'ASIA' | 'OCE'
export type GameType = 'CS2' | 'VALORANT' | 'DOTA2' | 'PUBG'

export interface Player {
  id: string
  ign: string
  uid: string
  role: Role
  country: string
  currentTeam?: string
  avatar?: string
  stats: {
    kills: number
    wins: number
    kd: number
    avgDamage: number
    headshots: number
  }
  achievements?: string[]
  createdAt: string
}

export interface Team {
  id: string
  name: string
  logo: string
  banner: string
  captain: string
  coach?: string
  roster: string[]
  region: Region
  achievements?: string[]
  ranking: number
  createdAt: string
}

export interface Tournament {
  id: string
  name: string
  game: GameType
  prizePool: number
  teams: number
  startDate: string
  endDate: string
  status: 'upcoming' | 'live' | 'completed'
  image?: string
  description?: string
  region: Region
  createdAt: string
}

export interface Scrim {
  id: string
  name: string
  game: GameType
  scheduledTime: string
  region: Region
  maxTeams: number
  registeredTeams: number
  status: 'upcoming' | 'live' | 'completed'
  createdAt: string
}

export interface LeaderboardEntry {
  rank: number
  playerId: string
  playerName: string
  team?: string
  rating: number
  matches: number
  wins: number
  winRate: number
}

export interface Registration {
  id: string
  type: 'tournament' | 'scrim'
  referenceId: string
  captainName: string
  teamName: string
  players: string[]
  whatsapp: string
  discord: string
  email: string
  region: Region
  logoUrl?: string
  screenshotUrl?: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
}

export interface News {
  id: string
  title: string
  content: string
  image?: string
  author: string
  category: string
  views: number
  createdAt: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  category: string
  website?: string
}

export interface Gallery {
  id: string
  image: string
  title: string
  category: string
  event?: string
  createdAt: string
}
