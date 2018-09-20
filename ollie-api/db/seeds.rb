# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding users"
# user1 = User.new
# user1.name = "Chris"
# user1.zip = 11222
# user1.email = "cjab86@gmail.com"
# user1.save
user1 = User.create(name: "Chris", zip: 11222, email: "cjab86@gmail.com")

puts "seeding pets"

pet1 = Pet.new
pet1.name = "Momers"
pet1.breed_type = "perfect"
pet1.sex = "Male"
pet1.sterile = true
pet1.birth_date = "08/01/1994"
pet1.temperament = "lazy"
pet1.weight = 100
pet1.size = "ideal"
pet1.food = "dry"
pet1.protein = "chicken"
pet1.user_id = user1.id
pet1.save
