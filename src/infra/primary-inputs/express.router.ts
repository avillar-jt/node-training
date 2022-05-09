import express, { Router } from 'express'
import userRouter from './users/express/express.router'
export const USER_ROUTER_URL = '/users'

const router = (): Router => {
  const router = Router()
  router.use(express.json())
  router.use(USER_ROUTER_URL, userRouter)
  return router
}

export default router