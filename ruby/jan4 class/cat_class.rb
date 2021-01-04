class Cat 
    def initialize(name, color, age)
        @name = name
        @color = color
        @age = age
    end

    def get_name
        @name
    end

    def greeting
        p "#{@name}" + ' hi'
    end

    def set_name(str)
        @name = str
    end
end

cat1 = Cat.new('Oo','white',1)
cat2 = Cat.new('11','black',2)
cat1.greeting
cat2.greeting
p cat1.get_name
cat1.set_name('kitty')
p cat1.get_name
p cat1