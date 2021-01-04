class String 
    def upcase?
        self == self.upcase
    end
end

p "HELLO".upcase?

class Integer
    def prime?
        return false if self < 2
        (2...self).each do |f|
            return false if self%f ==0
        end
        true
    end
end

p 4.prime?