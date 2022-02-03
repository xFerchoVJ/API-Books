class Book < ApplicationRecord
  validates :title, presence: true, length: {minimun: 3, maximum: 50}, uniqueness: true
  validates :description, presence: true, length: { minimum: 5, maximum: 100 }
end
