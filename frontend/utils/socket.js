import { io } from 'socket.io-client';

const socket = io.connect('https://localhost:4000');

export default socket;
