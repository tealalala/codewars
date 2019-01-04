# 2018-10-17

# Codewars > Ruby > 6 kyu
# Find the missing term in an Arithmetic Progression
# https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/ruby

def find_missing(sequence)
  difference = sequence[-1] - sequence[-2]
  i = 0

  sequence.length.times do
    compare_difference = sequence[i+1] - sequence[i]
    add_this = sequence[i] + difference
    if compare_difference != difference
      sequence.insert(sequence[i+0.5], add_this)
    end
    i += 1
  end

  return p sequence
end

# Tests
find_missing([1, 2, 3, 4, 6, 7, 8, 9]) # 5
find_missing([1, 3, 4, 5, 6, 7, 8, 9]) #  2
find_missing([1, 3, 5, 9, 11]) # 7
