const events = require('express').Router();
const db = require('../models');
const { Event } = db; 
const { Op } = require('sequelize')

//index all events
events.get('/', async (req, res)=> {
    try{
        const foundEvents = await Event.findAll({
            order: [['date', 'ASC']],
            where: {
                name: {
                    [Op.like]: `%${req.query.name ? req.query.name: ''}%`,
                },
            },
        })
        res.status(200).json(foundEvents)
    } catch(e) {
        res.status(500).json(e);
    }
})
//show one event
events.get('./:id', async (req, res) => {
    try { 
        const foundEvents = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvents) 
    } catch(e) {
        res.status(500).json(e)
    }
})

//create
events.post('/', async (req, res)=>{
    try{
        const newEvent = await Event.create(req.body)
        res.status(200).json(newEvent)
    }catch(e) {
        res.status(500).json(e)
    }
} )
//update
events.put('/:id', async (req, res)=>{
    try{
        const updateEvents = await Event.update(req.body, {
            where: { event_id: req.params.id }
        })
        res.status(200).json({
            message: `Updated ${updatedEvents} events`
        })
    }catch(e){
        res.status(500).json(e)
    }
})
//delete
events.delete('/:id', async (req,res)=>{
    try{
        const deletedEvents = await Event.destroy({
            where: { event_id: req.params.id },
        });
		res.status(200).json({
			message: `Deleted ${deletedEvents} events`,
		});
	} catch(e) {
		res.status(500).json(e);
    }
})

//export
module.exports = events