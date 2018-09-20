import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import Adapter from '../adapters/Adapter'

export default class Container extends Component {
  constructor(){
    super()
    this.state = {
      userName: "",
      petName: "",
      zip: "",
      email: "",
      breedType: "",
      breed1: "",
      breed2: "",
      sex: "",
      sterile: false,
      birthDate: "",
      temperament: "",
      weight: "",
      size: "",
      food: "",
      protein: "",
      allergies: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDropdownChange(event, result) {
    this.setState({
      [result.name]: result.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let state = this.state
    Adapter.createUser(state)
    .then(data => {
      Adapter.createPet(state)
    })
    .then(data => {
      this.setState({
        userName: "",
        petName: "",
        zip: "",
        email: "",
        breedType: "",
        breed1: "",
        breed2: "",
        sex: "",
        sterile: false,
        birthDate: "",
        temperament: "",
        weight: "",
        size: "",
        protein: "",
        allergies: ""
      })
    })
  }

  render(){
    const isEnabled1 = this.state.breedType === 'single' || this.state.breedType === 'combo';
    const isEnabled2 = this.state.breedType === 'combo';

    const breedOptions = [
      { key: 's', text: 'single breed', value: 'single'},
      { key: 'c', text: 'combo of two breeds', value: 'combo' },
      { key: 'p', text: 'perfect (unknown) mix', value: 'perfect' }
    ]

    const sexOptions = [
      { key: 'm', text: 'he', value: 'male'},
      { key: 'f', text: 'she', value: 'female' }
    ]

    const sterileOptions = [
      { key: 'f', text: 'fixed', value: true },
      { key: 'n', text: 'not fixed', value: false }
    ]

    const tempOptions = [
      { key: 'l', text: 'a bit lazy', value: 'lazy' },
      { key: 'a', text: 'pretty active', value: 'active' },
      { key: 'c', text: 'hyper', value: 'hyper' }
    ]

    const sizeOptions = [
      { key: 's', text: 'skinny', value: 'skinny' },
      { key: 'i', text: 'ideal', value: 'ideal' },
      { key: 'c', text: 'chubby', value: 'chubby' }
    ]

    return (
      <div>
        <h1>Ollie</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field inline label={`My name is `} control='input' name='userName' onChange={this.handleChange} />
          <Form.Field inline label={`and my pup's name is`} control='input' name='petName' onChange={this.handleChange} />
          <Form.Field inline label={`My zip code is`} control='input' name='zip' onChange={this.handleChange} />
          <Form.Field inline label={`My email is`} control='input' name='email' onChange={this.handleChange} />
          <Form.Dropdown inline label={`${this.state.petName} is a `} name='breedType' options={breedOptions} value={this.state.breedType} onChange={this.handleDropdownChange} />
          <Form.Field inline label={`of a `} control='input' name='breed1' disabled={!isEnabled1} onChange={this.handleChange} />
          <Form.Field inline label={`and a `} control='input' name='breed2' disabled={!isEnabled2} onChange={this.handleChange} />
          <Form.Dropdown inline label={`${this.state.petName} is a `} name='sex' options={sexOptions} value={this.state.sex} onChange={this.handleDropdownChange} />
          <Form.Dropdown inline label={`and ${this.state.petName} is `} name='sterile' options={sterileOptions} value={this.state.sterile} onChange={this.handleDropdownChange} />
          <Form.Input inline label={`${this.state.petName} was born on `} type="date" name="birthDate" onChange={this.handleChange} />
          <Form.Dropdown inline label={`I would describe ${this.state.petName} as `} name='temperament' options={tempOptions} value={this.state.temp} onChange={this.handleDropdownChange} />
          <Form.Field inline label={`and weighs about`} control='input' name='weight' onChange={this.handleChange} />
          <Form.Dropdown inline label={`I would describe ${this.state.petName} as `} name='size' options={sizeOptions} value={this.state.size} onChange={this.handleDropdownChange} />
          <Form.Field inline label={`${this.state.petName}'s primary protein is `} control='input' name='protein' onChange={this.handleChange} />
          <Form.Field inline label={`${this.state.petName} is allergic to `} control='input' name='allergies' onChange={this.handleChange} />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
