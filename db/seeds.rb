def make_applicants
  1.upto(5) do |n|
    Applicant.create(
      email: "app#{n}@tbg.com",
      password: "password",
      password_confirmation: "password"
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

make_applicants
make_admins
