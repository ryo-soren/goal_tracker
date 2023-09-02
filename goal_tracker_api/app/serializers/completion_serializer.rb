class CompletionSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :goal

  attributes :id, :user_id, :goal_id
end
