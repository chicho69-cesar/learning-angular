import express from 'express'
import { createService, deleteService, getServices, getServicesById, updateService } from '../controllers/servicesController.js'

const router = express.Router()

router.post('/', createService)
router.get('/', getServices)
/* router.route('/')
  .post(createService)
  .get(getServices) */

router.get('/:id', getServicesById)
router.put('/:id', updateService)
router.delete('/:id', deleteService)
/* router.route('/:id')
  .get(getServicesById)
  .put(updateService)
  .delete(deleteService) */

export default router
