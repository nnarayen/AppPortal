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
  ["pres", "ivp", "vpd", "pvp", "evp"].each do |name|
    Admin.create(
      email: "#{name}@tbg.com",
      password: "password",
      password_confirmation: "password"
    )
  end
end

def make_questions
  Rake::Task["questions:generate"].invoke
end

make_applicants
make_admins
make_questions
