const apiUrl = 'http://localhost:3000/api/v1'

export default class Adapter {

  static createUser(user) {
    return fetch(`${apiUrl}/users/`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user: {
          user_name: user.userName,
          zip: user.zip,
          email: user.email
        }
      })
    }).then(res => res.json())
  }

  static createPet(pet) {
    return fetch(`${apiUrl}/pets/`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        pet: {
          pet_name: pet.petName,
          breed_type: pet.breedType,
          breed_1: pet.breed1,
          breed_2: pet.breed2,
          sex: pet.sex,
          sterile: pet.sterile,
          birth_date: pet.birthDate,
          temperament: pet.temperament,
          weight: parseInt(pet.weight, 10),
          size: pet.size,
          allergies: pet.allergies
        },
        user: {
          user_name: pet.userName,
          zip: pet.zip,
          email: pet.email
        }
      })
    }).then(res => res.json())
  }

  static headers() {
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }
}
