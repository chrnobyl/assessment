# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_17_161230) do

  create_table "pets", force: :cascade do |t|
    t.string "pet_name"
    t.string "breed_type"
    t.string "breed_1"
    t.string "breed_2"
    t.string "sex"
    t.boolean "sterile"
    t.string "birth_date"
    t.string "temperament"
    t.integer "weight"
    t.string "size"
    t.string "food"
    t.string "protein"
    t.string "allergies"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.integer "zip"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
