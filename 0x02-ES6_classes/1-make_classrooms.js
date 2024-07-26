import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const ClassRoom19 = new ClassRoom(19);
  const ClassRoom20 = new ClassRoom(20);
  const ClassRoom34 = new ClassRoom(34);

  return [ClassRoom19, ClassRoom20, ClassRoom34];
}
