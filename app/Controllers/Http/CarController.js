'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Car = use('App/Models/Car')

class CarController {

  /**
   * Show a list of all cars.
   * GET cars
   */
  async index ({ request, response }) {
    const cars = await Car.all()
    return cars
  }

  /**
   * Create/save a new car.
   * POST cars
   */
  async store ({ request, response }) {
    const data = request.only(['modelo', 'marca', 'quantidade'])

    const car = await Car.create(data)

    return car
  }

  /**
   * Display a single car.
   * GET cars/:id
   */
  async show ({ params, request, response }) {
    try {
      const car = await Car.findOrFail(params.id)
      return car
    } 
    catch(e) {
      return response.status(404).send("Não encontrado.")
    }
  }

  /**
   * Update car details.
   * PUT or PATCH cars/:id
   */
  async update ({ params, request, response }) {
    try {
      const car = await Car.findOrFail(params.id)
      Object.assign(car, request.all())
      car.save()
      return car
    } 
    catch(e) {
      return response.status(404).send("Não encontrado.")
    }
  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   */
  async destroy ({ params, request, response }) {
    try {
      const car = await Car.findOrFail(params.id)
      await car.delete()
      return
    } 
    catch(e) {
      return response.status(404).send("Não encontrado.")
    }
  }
}

module.exports = CarController
