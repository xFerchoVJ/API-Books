require 'rails_helper'

RSpec.describe Book, type: :model do
  before(:all) do
    @book = Book.create(title: "Test", description: "Testing book for API")
  end

  it "Should create the book correctly" do
    expect(@book).to be_valid 
  end

  it "The book can be read" do
    expect(Book.find_by_title("Test")).to eq(@book)  
  end
  
end