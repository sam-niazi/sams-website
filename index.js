const express  = require( 'express' )
const http     = require( 'http' )
const socketio = require( 'socket.io' )

const Server = new http.Server( express() )
const Socket = new socketio.Server( Server )

