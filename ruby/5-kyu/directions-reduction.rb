# 2018-11-29 R

# Codewars > Ruby > 5 kyu
# Directions Reduction
# https://www.codewars.com/kata/550f22f4d758534c1100025a/train/ruby

# pseudocode
# if NORTH + SOUTH => do nothing
# if EAST + WEST => [] clojure, annihilate each other

def dirReduc(arr)
  new_arr = []
  # p arr
  i = 0

  arr.length.times do
    p arr[i]
    arr.length.times do
      p arr[i]
    end
    i += 1
  end

  return "this is the new array: #{new_arr}"
end

a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
p dirReduc(a)
# ["WEST"]

# u = ["NORTH", "WEST", "SOUTH", "EAST"]
# dirReduc(u)
#["NORTH", "WEST", "SOUTH", "EAST"]
