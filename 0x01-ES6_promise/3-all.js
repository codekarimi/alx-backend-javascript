import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadResponse = uploadPhoto();
  const createResponse = createUser();

  Promise.all([uploadResponse, createResponse])
    .then((responses) => {
      console.log(`${responses[0].body}, ${responses[1].firstName}, ${responses[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
