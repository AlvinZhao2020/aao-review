class Dog 
    def initialize(name, breed,age,bark,favorite_foods)
        @name = name
        @breed = breed
        @age = age
        @bark = bark
        @favorite_foods = favorite_foods
    end

    def bark
        p "#{@name} #{@bark}"
    end

    def favorite_food?(str)
        @favorite_foods.include?(str)
    end
end

dog1 = Dog.new('eric','puddle','5','woo',['banana','apple'])

p dog1
dog1.bark
p dog1.favorite_food?('apple')
p dog1.favorite_food?('pie')