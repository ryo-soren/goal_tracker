# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Goal.destroy_all
User.destroy_all

PASSWORD = "123"

3.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}@#{last_name}.com",
    username: "#{first_name}_#{last_name}",
    password: PASSWORD
    )
end

users = User.all

10.times do
    kind = ["one-time", "repeating"]
    frequency = ["daily", "weekly", "monthly"]

    Goal.create(
        user: users.sample,
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraph,
        kind: kind.sample,
        frequency: frequency.sample,
        times: rand(1..4),
        deadline: Faker::Date.between(from: Date.today, to: "2023-12-31")
    )
end

goals = Goal.all

puts users.count
puts goals.count

