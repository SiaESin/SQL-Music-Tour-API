const stages = require('express').Router()
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')

//index all
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            where: {
                name: { 
                    [Op.like]: `%${req.query.name ? req.query.name : ''}%` 
                },
            },
        })
        res.status(200).json(foundStages)
    } catch (e) {
        res.status(500).json(e)
    }
})

//find one
stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { name: req.params.name },
			include: {
				model: Event,
				as: 'events',
				attributes: ['name', 'date'],
				through: { attributes: [] },
			},
			attributes: { exclude: ['stage_id'] },
			order: [[{ model: Event, as: 'events' }, 'date', 'ASC']]
        })
        res.status(200).json(foundStage)
    } catch(e) {
        res.status(500).json(e)
    }
})

//create
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
			message: 'Created a new stage',
			data: newStage,
		})
    } catch(e) {
        res.status(500).json(e)
    }
})

//update
stages.put('/:name', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: { name: req.params.name }
        })
        res.status(200).json({
            message: `Updated ${updatedStages} stages`
        })
    } catch(e) {
        res.status(500).json(e)
    }
})

//delete
stages.delete('/:name', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: { name: req.params.name },
        })
        res.status(200).json({
            message: `Deleted ${deletedStages} stages`
        })
    } catch(e) {
        res.status(500).json(e)
    }
})

//export
module.exports = stages