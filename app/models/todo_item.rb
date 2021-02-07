class TodoItem < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, length: { maximum: 255 }
  validates :body, length: { maximum: 255 }
end
