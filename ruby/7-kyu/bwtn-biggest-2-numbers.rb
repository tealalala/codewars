# 2018-10-20

# Codewars > Ruby > 7 kyu
# Difference between biggest 2 numbers
# https://www.codewars.com/kata/difference-between-biggest-2-numbers/train/ruby

def diff_big_2(arr)
  arr.max(2).reduce(:-)
end

# Tests
p diff_big_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) # 1
p diff_big_2([9, 99, 999]) # 900
p diff_big_2([999, 99, 9]) # 900
p diff_big_2([100, 100]) # 0
p diff_big_2([1, 2, 10, 3, 4, 5, 6, 7, 8, 9]) # 1
