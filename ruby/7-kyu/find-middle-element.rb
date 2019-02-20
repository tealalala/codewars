# 2018-10-21

# Codewars > Ruby > 7 kyu
# Find the middle element
# https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/ruby

# i = array
# o = return index of element in the middle of array
# method
    # sort array and push to new array
    # output the middle element from new array
    # loop thru given array and match with middle element from new array

# Initial Solution
def gimme(input_array)
  sorted_arr = input_array.sort
  median = (sorted_arr.length / 2)
  middle_element_index = 0
  i = 0

  input_array.length.times do
    if sorted_arr[median] == input_array[i]
      middle_element_index = i
    end
    i += 1
  end

  return middle_element_index
end

# Refactor Solution
def gimme(input)
  p input.index(input.sort[1])
end

# Tests
gimme([2, 3, 1]) # 0
gimme([5, 10, 14]) # 1
gimme([1, 3, 4]) # 1
gimme([15, 10, 14]) # 2
gimme([-0.410, -23, 4]) # 0, 'Finds the index of middle element(Negative numbers)')
gimme([-15, -10, 14]) # 1, 'Finds the index of middle element (Negative numbers)')
