def make_questions
  Rake::Task["questions:generate"].invoke
end

def make_applicants
  1.upto(5) do |n|
    Applicant.create(
      email: "app#{n}@tbg.com",
      password: "password",
      password_confirmation: "password",
      first_name: FFaker::Name.first_name,
      last_name: FFaker::Name.last_name,
      year: "Sophomore",
      major: "EECS",
      gpa: 4.0,
      units: 15,
      phone: "4085556582"
    )
  end
end

def make_admins
  %w(pres ivp vpd pvp evp).each do |name|
    Admin.create(
      email: "#{name}@tbg.com",
      password: "password",
      password_confirmation: "password"
    )
  end
end

make_questions
make_applicants
make_admins
