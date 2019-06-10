import React from 'react'
import withHttp from './withHTTP'

const MyIp = props => {
    if (props.isLoading && props.data) {
        return <p>Carregando ...</p>
    }
    return <p>Meu IP é: {props.data.origin}</p>
}

export default withHttp('http://httpbin.org/ip')(MyIp)