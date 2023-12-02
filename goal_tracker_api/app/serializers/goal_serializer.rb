class GoalSerializer < ActiveModel::Serializer
  # belongs_to :user
  has_many :completions

  attributes :id, :title, :description, :frequency, :times, :done, :successful, :unsuccessful, :deadline, :created_by

  def created_by
    object.user&.username
  end
  
end
