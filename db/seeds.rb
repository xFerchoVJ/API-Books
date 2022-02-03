# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
  Book.create({title: "Crepusculo", description: "Libro de vampiros, donde la morra esta bn pendeja"})
  Book.create({title: "50 sombras de soli", description: "Libro donde en soli todos kojen y tienen sida"})

  p Book.all
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
