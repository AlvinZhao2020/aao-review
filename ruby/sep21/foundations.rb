arr = [1,2,3,4,5]

result = arr.inject{|acc,el| acc + el}
res =arr.inject(200){|acc,el| acc-el}

p result 
p 'result = '
p res