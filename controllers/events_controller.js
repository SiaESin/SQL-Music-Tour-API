const events = require('express').Router();
const db = require('../models');
const { Event, Stage, Band, Stage_Event, Set_Time, Meet_Greet } = db;
const { Op } = require('sequelize');

//index all events
events.get('/', async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      order: [['date', 'ASC']],
      where: {
        name: {
          [Op.like]: `%${req.query.name ? req.query.name : ''}%`,
        },
      },
    });
    res.status(200).json(foundEvents);
  } catch (e) {
    res.status(500).json(e);
  }
});
//show one event
events.get('./:name', async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { name: req.params.name },
      include: [
        {
          model: Meet_Greet,
          as: 'meet_greets',
          attributes: ['meet_start_time', 'meet_end_time'],
          include: {
            model: Band,
            as: 'band',
            attributes: ['name'],
          },
        },
        {
          model: Set_Time,
          as: 'set_times',
          attributes: ['set_start_time', 'set_end_time'],
          include: [
            {
              model: Band,
              as: 'band',
              attributes: ['name'],
            },
            {
              model: Stage,
              as: 'stage',
              attributes: ['name'],
            },
          ],
        },
        {
          model: Stage,
          as: 'stages',
          attributes: { exclude: ['stage_id'] },
          through: Stage_Event,
        },
      ],
      order: [
        [{ model: Meet_Greet, as: 'meet_greets' }, 'meet_start_time', 'ASC'],
        [{ model: Set_Time, as: 'set_times' }, 'set_start_time', 'ASC'],
        [{ model: Stage, as: 'stages' }, 'name', 'ASC'],
      ],
    });
    res.status(200).json(foundEvent);
  } catch (e) {
    res.status(500).json(e);
  }
});

//create
events.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json({
        message: 'Created a new event',
        data: newEvent,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});
//update
events.put('/:name', async (req, res) => {
  try {
    const updateEvents = await Event.update(req.body, {
      where: { name: req.params.name },
    });
    res.status(200).json({
      message: `Updated ${updatedEvents} events`,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});
//delete
events.delete('/:name', async (req, res) => {
  try {
    const deletedEvents = await Event.destroy({
      where: { name: req.params.name },
    });
    res.status(200).json({
      message: `Deleted ${deletedEvents} events`,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

//export
module.exports = events;
