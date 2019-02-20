# 2018-10-20

# Codewars > Ruby > 7 kyu
# Between Extremes
# https://www.codewars.com/kata/between-extremes

def between_extremes(numbers)
  numbers.max - numbers.min
end

# Tests
p between_extremes([1, 1]) # 0, 'Expecting zero when all numbers are equal'
p between_extremes([-1, -1]) # 0, 'Expecting zero when all numbers are equal'
p between_extremes([1, -1]) # 2
p between_extremes([23, 3, 19, 21, 16]) # 23 - 3
p between_extremes([1, 434, 555, 34, 112]) # 555 - 1
p between_extremes([21, 34, 54, 43, 26, 12]) # 42
p between_extremes([-1, -41, -77, -100]) # 99
