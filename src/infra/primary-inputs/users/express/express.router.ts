const userController = require('./express.controller')
import { Router } from 'express'

const router = Router()

router.get('/', userController.getAll)

export default router