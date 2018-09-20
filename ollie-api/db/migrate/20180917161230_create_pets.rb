class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :pet_name
      t.string :breed_type
      t.string :breed_1
      t.string :breed_2
      t.string :sex
      t.boolean :sterile
      t.string :birth_date
      t.string :temperament
      t.integer :weight
      t.string :size
      t.string :food
      t.string :protein
      t.string :allergies
      t.integer :user_id

      t.timestamps
    end
  end
end
