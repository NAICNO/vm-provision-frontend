import io, { Socket } from 'socket.io-client'
import { SOCKET_ENDPOINT } from '../constants/Constants.js'

export let socket: Socket

export const initializeSocket = (userId: string) => {
  if (userId) {
    socket = io(SOCKET_ENDPOINT + '/vm', {
      auth: {
        userId: userId
      }
    })
  }
}

export const getSocket = (): Socket => {
  return socket
}

export const closeSocket = () => {
  socket?.disconnect()
}
