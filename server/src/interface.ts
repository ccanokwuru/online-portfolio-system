import { Decimal } from "@prisma/client/runtime"

export interface IUser {
  id: number
  ref: string
  first_name?: string
  last_name?: string
  other_name?: string
  display_name: string
  email: string
  password: string
  interests: ISkill[]
  contacts: IContact[]
  creator?: ICreator
  favourites: IFavourite[]
  badges: IBadge[]
  createdAt: Date
  updatedAt: Date
  admin?: IAdmin
  reviews: IReview[]
  posts: IPost[]
  comments: IComment[]
  sentMessage: IMessage[]
  recievedMessage: IMessage[]
  role: string
  sessions: ISession[]
  jobs: IJob[]
  orders: IOrder[]
  wishlist: IWork[]
}

export interface IAdmin {
  id: number
  ref: string
  user: IUser
  badges: IBadge[]
  createdAt: Date
  updatedAt: Date
  userId: number
}

export interface ICreator {
  id: number
  ref: string
  user: IUser
  works: IWork[]
  skills: ISkill[]
  createdAt: Date
  updatedAt: Date
  jobs: IJob[]
  studio?: IStudio
  favourites: IFavourite[]
  exhibitions: IExhibition[]
  userId: number
  reactions: IReaction[]
}

export interface IFavourite {
  id: number
  work?: IWork
  post?: IPost
  user: IUser
  studio?: IStudio
  creator?: ICreator
  creatorId?: number
  createdAt: Date
  updatedAt: Date
  workId?: number
  userId: number
  studioId?: number
  postId?: number
}

export interface IReaction {
  id: number
  works: IWork[]
  posts: IPost[]
  studio: IStudio[]
  creator: ICreator[]
  type: string
  createdAt: Date
  updatedAt: Date
}

export interface ISkill {
  id: number
  name: string
  category: ICategory
  categoryId: number
  description?: string
  createdAt: Date
  updatedAt: Date
  users: IUser[]
  creators: ICreator[]
}

export interface ICategory {
  id?: number
  name: string
  catergories: ICategory[]
  skills: ISkill[]
  works: IWork[]
  jobs: IJob[]
  description?: string
  createdAt: Date
  updatedAt: Date
  p_category?: ICategory
  p_categoryId?: number
}

export interface IReview {
  id: number
  user: IUser
  comment: string
  rating: number
  createdAt: Date
  updatedAt: Date
  userId: number
  work?: IWork
  workId?: number
}

export interface IMessage {
  id: number
  ref: string
  sender: IUser
  senderId: number
  reciever: IUser
  recieverId: number
  message: String
  replies: IMessage[]
  p_message?: IMessage
  p_messageId?: number
  createdAt: Date
  updatedAt: Date
}

export interface IPost {
  id: number
  slug: string
  title: string
  content: string
  mainImage: string
  author: IUser
  authorId: number
  comments: IComment[]
  favourites: IFavourite[]
  createdAt: Date
  updatedAt: Date
  reactions: IReaction[]
}

export interface IComment {
  id: number
  ref: string
  post?: IPost
  postId: number
  p_comment?: IComment
  p_commentId?: number
  message: string
  user: IUser
  userId: number
  createdAt: Date
  updatedAt: Date
  comments: IComment[]
}

export interface IWork {
  id: number
  name: string
  ref: string
  category: ICategory
  categoryId: number
  description: string
  createdAt: Date
  updatedAt: Date
  creator: ICreator
  favourites: IFavourite[]
  studio?: IStudio
  studioId?: number
  reviews: IReview[]
  orders: IOrder[]
  wishers: IUser[]
  exhibition: IExhibition[]
  creatorId: number
  reaction?: IReaction
  reactionId?: number
}

export interface IOrder {
  id: number
  ref: string
  description?: string
  user: IUser
  works: IWork[]
  price: Decimal
  currency?: String
  createdAt: Date
  updatedAt: Date
  collectorId: number
}

export interface IStudio {
  id: number
  name: string
  ref: string
  description?: string
  creator: ICreator
  works: IWork[]
  favourites: IFavourite[]
  createdAt: Date
  updatedAt: Date
  creatorId: number
  reaction?: IReaction
  reactionId?: number
}

export interface IExhibition {
  id: number
  description?: string
  creator: ICreator
  work: IWork
  createdAt: Date
  updatedAt: Date
  price?: Decimal
  currency: string
  sellAs: string
  creatorId: number
  workId: number
}

export interface IJob {
  id: number
  title: string
  category: ICategory
  categoryId: number
  description?: number
  createdAt: Date
  updatedAt: Date
  owner: IUser
  applicants: ICreator[]
  ownerId: number
}

export interface IContact {
  id: number
  type: string
  phone: string
  email: string
  address: string
  position?: string
  createdAt: Date
  updatedAt: Date
  user: IUser
  userId: number
}

export interface IBadge {
  id: number
  type: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
  users: IUser[]
}

export interface ISession {
  id: number
  createdAt: Date
  expiredAt: Date
  user: IUser
  userId: number
  details: JSON
  token: IToken[]
}

export interface IToken {
  id: number
  token: string
  session: ISession
  createdAt: Date
  sessionId: number
}

export interface ISignin {
  email: string
  password: string
}

export interface ISignup {
  display_name: string
  email: string
  password: string
  confirm: string
}