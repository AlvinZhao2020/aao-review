class Car
    @@num_wheels = 4 
    # class variable
    # if all upcase its a class constanse

    def initialize(color)
        @color = color
    end

    def num_wheels
        @@num_wheels
    end
end

c1 = Car.new('white')
c2 = Car.new('black')

p c1.num_wheels