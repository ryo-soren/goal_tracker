class Goal < ApplicationRecord
    
    belongs_to :user
    has_many :completions, dependent: :destroy
    
    # after_initialize :check_frequency

    validates :title, :description, :deadline, presence: true
    validates :times, numericality: {greater_than: 0, only_integer: true}

    def self.check_and_update_unsuccessful
        goals = Goal.all
        goals.each do |g|            
            if g.deadline.present? && g.deadline <= Date.today.to_s 
                if g.times > g.done
                    g.unsuccessful = g.unsuccessful + 1
                    frequency = g.frequency
                    puts "*******"
                    puts g.frequency
                    puts "*******"
                    case frequency
                    when "daily"
                        g.deadline = Date.today + 1
                    when "weekly"
                        g.deadline = Date.today + 7
                    when "monthly"
                        g.deadline = Date.today.beginning_of_month.next_month
                    end
                end
                g.done = 0
            end 
            g.save!
        end
    end

    private

    def check_frequency
        if frequency&.include?("daily")
            self.deadline = Date.today + 1
        elsif frequency&.include?("weekly")
            self.deadline = Date.today + 7
        elsif frequency&.include?("monthly")
            self.deadline = Date.today.beginning_of_month.next_month
        end
    end

    
end
