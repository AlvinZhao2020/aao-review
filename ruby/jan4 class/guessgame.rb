class GuessingGame
    attr_reader :secret_num
    def initialize 
        @count = 0
    end
    def new_game
        p 'Please give me a min number'
        @min = gets.chomp.to_i
        p 'Please give me a max number'
        @max = gets.chomp.to_i
        @secret_num = rand(@min..@max)
    end

    def check_num
        p "Please give me a number from #{@min} to #{@max}"
        while true
        
            @num = gets.chomp.to_i
            @count += 1 
            if @num == @secret_num 
                p "you win you tried #{@count} times"
                break 
            else 
                if @num > @secret_num 
                    p 'your number is too big,try again'
                else
                    p 'your number is too small,try again'
                end
            end
        end
    
    end

 
end

g1 = GuessingGame.new

g1.new_game
g1.check_num

