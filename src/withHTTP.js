import React, { Component } from 'react'
import axios from 'axios'

const withHttp = url => WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoading: false,
                data: {}
            }
        }
        componentDidMount() {
            this.setState({
                isLoading: true
            })

            axios.get(url).then(data => {
                this.setState({
                    isLoading: false,
                    data: data.data
                })
            })
        }
        render() {
            return (
                <WrappedComponent
                    data={this.state.data}
                    isLoading={this.state.isLoading}
                    {...this.props}
                />
            )
        }
    }
}

export default withHttp