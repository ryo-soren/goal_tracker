class User < ApplicationRecord
    has_secure_password

    has_many :goals, dependent: :destroy

    before_validation :set_username

    validates :first_name, :last_name, presence: true 
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

    private

    def set_username
        self.username ||= self.email
    end

end
