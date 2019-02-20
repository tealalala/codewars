# 2018-10-17

# Codewars > Ruby > 7 kyu
# The highest profit wins!
# https://www.codewars.com/kata/the-highest-profit-wins/ruby

# In: array of numbers
# Out: 1 array [ min, max number]
# Caveats: All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

def min_max(arr)
  min_max_arr = []
  min_num = arr[0]
  max_num = arr[0]
  i = 0

  arr.length.times do
    if arr[i] < min_num
      min_max_arr = arr[i]
    elsif arr[i] > max_num
      max_num = arr[i]
    end
    i += 1
  end

  min_max_arr[0] = min_num
  min_max_arr[1] = max_num

  return min_max_arr
end

# Tests
p min_max([1,2,3,4,5])      # [1,5]
p min_max([2334454,5])      # [5, 2334454]
p min_max([1])              # [1, 1]
p min_max([-28965, -16469]) # [-28965, -16469]
