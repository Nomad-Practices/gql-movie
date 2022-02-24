export const nicolas = {
  id: 1,
  name: 'Nicolas',
  age: 18,
  gender: 'female',
}

export const people = [
  {
    id: 2,
    name: 'Nicolas',
    age: 32,
    gender: 'male',
  },
  {
    id: 3,
    name: 'Jason',
    age: 18,
    gender: 'male',
  },
  {
    id: 4,
    name: 'Goose',
    age: 18,
    gender: 'female',
  },
  {
    id: 5,
    name: 'Peter',
    age: 18,
    gender: 'female',
  },
  {
    id: 6,
    name: 'Parker',
    age: 18,
    gender: 'female',
  },
]

export const getPersonById = (id: number) => people.find((val) => val.id === id)
