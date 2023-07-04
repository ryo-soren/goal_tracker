class Goal < ApplicationRecord
    
    belongs_to :user
    
    before_validation :is_one_time

    validates :title, :description, :kind, :deadline, presence: true
    validates :times, numericality: {greater_than: 0, only_integer: true}

    private

    def is_one_time
        if kind&.include?("one_time")
            self.times = 1
        end
    end

end
