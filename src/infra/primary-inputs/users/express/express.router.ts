const userController = require('./express.controller')
import { Router } from 'express'

const router = Router()

router.get('/', userController.findAllUsers)
router.post('/', userController.createUser)

export default router