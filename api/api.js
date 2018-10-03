
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'

import { initializeSubscribers, subscribe, subscribeTexts, unsubscribe } from './subscribers';


const port = 8080;
const app = new express();

app.use(express.static(path.join(__dirname, '..', 'build')));

(async () => {

  /* SUBSCRIBERS */
  await initializeSubscribers();

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin');

    next();
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.post('/subscribe', async (req, res) => {
    const { name, email } = req.body;

    const message = await subscribe(name, email);

    if(message === subscribeTexts.subscribed(email)) {
      res.status(200).send({ status: 'OK', message });
    } else if (message === subscribeTexts.already_subscribed(email)) {
      res.status(200).send({ status: 'OK', message });
    } else {
      res.status(500).send({ status: 'NOTOK', message });
    }
  })

  app.get('/unsubscribe', async (req, res) => {
    const email = req.query.email;

    const message = await unsubscribe(email);
    
    res.status(200).send({ message });
  })


  /* MAIN ENTRY */
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });


  /* watch express API server */
  app.listen(port, () => {
    console.log('Listening on port ' + port)
  })

})()