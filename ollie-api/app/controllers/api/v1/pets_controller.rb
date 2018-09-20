class Api::V1::PetsController < ApplicationController

  def index
    pets = Pet.all
    render json: pets
  end

  def create
    pet = Pet.create(pet_params)
    user = User.find_by(user_params)
    pet.user_id = user.id
    render json: pet
  end

  def show
    pet = Pet.find(params[:id])
    render json: pet
  end

  private

  def pet_params
    params.require(:pet).permit(:pet_name, :breed_type, :breed_1, :breed_2, :sex, :sterile, :birth_date, :temperament, :weight, :size, :protein, :allergies)
  end

  def user_params
    params.require(:user).permit(:user_name, :zip, :email)
  end
end
