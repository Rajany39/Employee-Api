const express = require('express')
const {getallrecord,createrecord, getonerecord, deleterecords, updaterecords} = require('../controller/employcont')

const router = express.Router()


router.route('/').get(getallrecord)
router.route('/').post(createrecord)
router.route('/:id').get(getonerecord)
router.route('/:id').delete(deleterecords)
router.route('/:id').patch(updaterecords)

module.exports = router