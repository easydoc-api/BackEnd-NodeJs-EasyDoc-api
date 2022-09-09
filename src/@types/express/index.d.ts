import * as express from "express"

declare global {
  namespace Express {
    interface Request {
      user: {
        adm: boolean
        id: string
        estaAtivo: boolean
      }
    }
  }
}
