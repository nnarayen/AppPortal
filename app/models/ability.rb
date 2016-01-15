class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= Applicant.new # Guest User (not logged in)
    if user.is_a?(Admin)
      can :manage, :all
    else
      can :apply, Applicant, id: user.id
      can :interview, Applicant, id: user.id
      can :status, Applicant, id: user.id
    end
  end
end
