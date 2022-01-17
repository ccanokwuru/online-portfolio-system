import { Decimal } from "@prisma/client/runtime"

export interface IOneRef {
  ref: string
}

export interface IManyRef {
  refs: string[]
}

export interface IOneId {
  id: number
}

export interface IManyId {
  ids: number[]
}

// user related
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

export interface IUserUpdate {
  first_name?: string
  last_name?: string
  other_name?: string
  display_name?: string
  email?: string
}

export enum IRole {
  crt = "creator",
  adm = "admin",
  col = "collector"
}

export interface IRoleBody {
  role: string
}

// works related
export interface IWork {
  title: string
  categoryId: number
  description?: string
  studioId?: number
  creatorId: number
}

// studio related
export interface IStudio {
  name: string
  description?: string
  creatorId: number
}

export interface IStudioName {
  name: string
}

//  reactions related
export interface IReact {
  type: IReactions
}

export enum IReactions {
  like = "like",
  love = "love"
}

export interface IExhibition {
  id?: number
  description?: string
  price: Decimal
  currency: string
  sellAs: string
  creatorId: number
  workId?: number
  categoryId?: number
  studioId?: number
  title?: string
}

// contact related
export interface IContact {
  id: number
  type: IContactType
  phone: string
  email: string
  address: string
  position?: string
  userId: number
}

export enum IContactType {
  main = "defualt",
  others = "others"
}
export interface IContacts {
  contacts: IContact[]
}