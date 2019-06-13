import React, { Component } from 'react'
import api from '../services/api'

import './New.css'

import add from '../assets/add-photo.svg'

class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData()

        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hashtags', this.state.hashtags)

        await api.post('/posts', data)

        this.props.history.push('/')
    }

    render() {
        return (
            <form id="new-post" action="" onSubmit={this.handleSubmit}>
                <label for="file">
                    Adicionar Imagem
                    <img src={add} alt="Adicionar imagem" />
                </label>
                <input 
                    id="file"
                    type="file"
                    onChange={this.handleImageChange} 
                />
                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.state.author}
                />
                <input 
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.state.place}
                />
                <input 
                    type="text"
                    name="description"
                    placeholder="Descriçāo do post"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />
                
                <button type="submit">Postar</button>
            </form>
        )
    }
}

export default New