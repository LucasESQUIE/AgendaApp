const express = require('express');
const monk = require('monk');
const router = express.Router();

const db = monk('localhost/agenda-db');
const events = db.get('events');

// get events
router.get('/', (req, res) => {
    events.find().then((events) => {
        res.json(events);
    });
});


// add events
router.post('/', (req, res) => {

    // TODO data validation here

    const event = {
        title: req.body.title.toString(),
        eventDate: new Date(req.body.eventDate),
        eventState: parseFloat(req.body.eventState),
        eventPriority: req.body.eventPriority,
        created: new Date()
    }

    events.insert(event).then((createdEvent) => {
        res.json(createdEvent);
    })


});

// update event
router.put('/:id/:title/:eventDate/:eventState/:eventPriority', (req, res) => {

    // TODO data validation here

    events.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            title: req.params.title,
            eventDate: req.params.eventDate,
            eventState: req.params.eventState,
            eventPriority: req.params.eventPriority
        }
    }).then((updatedEvent) => {
        res.json({
            updateMessage: "Event " + updatedEvent._id + " updated"
        });
    })
});



// delete events
router.delete('/:id', (req, res) => {
    events.findOneAndDelete({ _id: req.params.id }).then((deletedEvent) => {
        res.json({
            deleteMessage: "Event " + deletedEvent._id + " deleted"
        });
    });

});




module.exports = router;
