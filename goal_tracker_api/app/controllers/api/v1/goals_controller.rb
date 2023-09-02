class Api::V1::GoalsController < Api::ApplicationController
    before_action :authenticate_user!

    def index
        # @goals = Goal.where(user_id: current_user)
        # Goal.check_and_update_unsuccessful
        # @goals.order("created_at")
        # puts @goals
        # authorize! :read, @goals
        @goals = Goal.accessible_by(current_ability)
        render(
            json: @goals,
            each_serializer: GoalSerializer
        )
    end
 
    def show
        @goal = Goal.find(params[:id])
        authorize! :read, @goal
        render(json: @goal)
    end
    
    def create
        goal = Goal.new(goal_params)
        goal.user = User.find(current_user)
        goal.save!
        render(json: goal)
    end

    def update
        goal = Goal.find(params[:id])

        if params[:completion]
            completion = Completion.create(goal: goal, user: current_user)
            if goal.times == params[:done]
                goal.successful = goal.successful + 1
                goal.save!
            end
        end
        
        goal.update(goal_params)
        goal.save!
        render(json: goal)
    end

    def destroy
        goal = Goal.find(params[:id])
        goal.destroy
        render(
            json:{
                status: 200,
                message: "Goal #{goal.id} deleted successfully"
            }
        )
    end

    private

    def goal_params
        params.require(:goal).permit(
            :title,
            :description,
            :frequency,
            :times,
            :done,
            :successful,
            :unsuccessful,
            :deadline
        )
    end
end