import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  Promise.all([photo, user])
    .then(([photo, user]) => console.log(`${photo.body} ${user.firstName} ${user.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
