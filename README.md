competition
score 1- 10
standard score 
lowest treshold round up lower values
high treshold round down higher values
List of scores


Domain Model:
object | input | Message | output
scorecard | (@array[@num], min(@num), max(@num)) | constructor | scorecard object
scorecard | @array[@num] | standardise | @array[@num]
scorecard | @array[@num] | score | @array[@num]

REFACTOR TIME!!!

STANDARD RESULT
([1, 4, 5, 6, 10], 2, 8) -> [2, 4, 5, 6, 8]

 SORTED RESULT
([4, 1, 5, 10, 6], 1, 10) -> [1, 4, 5, 6, 10]

  THRESHOLDS THE SAME
([1, 4, 5, 6, 10], 5, 5) -> [5, 5, 5, 5, 5]

 THRESHOLDS inverted
([1, 4, 5, 6, 10], 8, 2) -> Error(“invalid thresholds”)

