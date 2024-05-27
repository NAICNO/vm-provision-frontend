import { initializeSocket, getSocket, closeSocket } from '../../src/util/WebSoketUtil.ts'
import { Server } from 'mock-socket'
import { Socket } from 'socket.io-client'

describe('WebSocketUtil', () => {
  let mockServer: Server

  beforeAll(() => {
    mockServer = new Server('http://localhost:8080/vm')
  })

  afterAll(() => {
    mockServer.stop()
  })

  it('initializes the socket with a valid user ID', () => {
    initializeSocket('validUserId')
    const socket: Socket = getSocket()
    expect(socket).toBeDefined()
  })

  it('gets the socket after initializing', () => {
    initializeSocket('validUserId')
    const socket: Socket = getSocket()
    expect(socket).toBeDefined()
  })

  it('closes the socket after initializing', () => {
    initializeSocket('validUserId')
    closeSocket()
    const socket: Socket = getSocket()
    expect(socket.connected).toBe(false)
  })
})
