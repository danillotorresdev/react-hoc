import React from 'react'
import withHttp from './withHTTP'

const MyUserAgent = props => {
    if (props.isLoading && props.data) {
        return <p>Carregando ...</p>
    }
    return <p>Meu UA é: {props.data['user-agent']}</p>
}

export default withHttp('http://httpbin.org/user-agent')(MyUserAgent)