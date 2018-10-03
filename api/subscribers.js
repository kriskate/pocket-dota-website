const Firestore = require('@google-cloud/firestore');

let subscribers;
export const initializeSubscribers = async () => {
  const firestore = new Firestore({
    projectId: 'pocket-dota',
    keyFilename: './secrets/keyfile.json',
    timestampsInSnapshots: true,
  });
  
  subscribers = firestore.collection('subscribers');
}

export const subscribeTexts = {
  subscribed: (email) => `Succesfully subscribed ${email}.`,
  already_subscribed: (email) => `${email} already subscribed.`,
  unsubscribed: (email) => `Succesfully unsubscribed ${email}.`,
  not_subscribed: (email) => `${email} not subscribed.`,

  could_not_subscribe: (e) => `Could not subscribe at this time. please try again later \r\n ${e}`,
  could_not_unsubscribe: (e) => `Could not unsubscribe at this time. please try again later \r\n ${e}`,
}


export const subscribe = async (name, email) => {
  try {
    const { exists } = await subscribers.doc(email).get();

    if(exists) {
      return subscribeTexts.already_subscribed(email);
    } else {
      const newSubscriber = subscribers.doc(email);
      await newSubscriber.set({ name });
      return subscribeTexts.subscribed(email);
    }
  } catch(e) {
    return subscribeTexts.could_not_subscribe(e);
  }
}


export const unsubscribe = async (email) => {
  try {
    const subscriber = subscribers.doc(email);
    const { exists, data } = await subscriber.get();
    
    if(exists) {
      await subscriber.delete();
      return subscribeTexts.unsubscribed(email);
    } else {
      return subscribeTexts.not_subscribed(email);
    }
  } catch (e) {
    return subscribeTexts.could_not_unsubscribe(e);
  }
}