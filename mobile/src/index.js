import React from 'react';
import { YellowBox } from 'react-native'

import Routes from './routes'

// Removing socket.io error
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

export default function App() {
    return <Routes />
}
