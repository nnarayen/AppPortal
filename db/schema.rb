# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160122200406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "decision"
    t.string   "name"
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree

  create_table "applicants", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "year"
    t.string   "major"
    t.float    "gpa"
    t.integer  "units"
    t.string   "phone"
    t.string   "resume"
    t.string   "picture"
    t.boolean  "submit"
    t.integer  "decisions",              default: [],              array: true
    t.integer  "stage",                  default: 0
    t.integer  "interview_id"
    t.string   "token"
  end

  add_index "applicants", ["email"], name: "index_applicants_on_email", unique: true, using: :btree
  add_index "applicants", ["interview_id"], name: "index_applicants_on_interview_id", using: :btree
  add_index "applicants", ["reset_password_token"], name: "index_applicants_on_reset_password_token", unique: true, using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "applicant_id"
    t.integer  "admin_id"
    t.string   "text"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "comments", ["admin_id"], name: "index_comments_on_admin_id", using: :btree
  add_index "comments", ["applicant_id"], name: "index_comments_on_applicant_id", using: :btree

  create_table "emails", force: :cascade do |t|
    t.integer  "stage"
    t.text     "accepted",   default: ""
    t.text     "rejected",   default: ""
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "interviews", force: :cascade do |t|
    t.datetime "timeslot"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string   "title"
    t.integer  "qtype"
    t.integer  "category"
    t.integer  "limit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.integer  "question_id"
    t.integer  "applicant_id"
    t.string   "answer",       default: ""
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "responses", ["applicant_id"], name: "index_responses_on_applicant_id", using: :btree
  add_index "responses", ["question_id"], name: "index_responses_on_question_id", using: :btree

  create_table "settings", force: :cascade do |t|
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "stage",      default: 0
    t.datetime "deadline"
  end

end
