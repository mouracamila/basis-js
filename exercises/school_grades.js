/* 
  Transform school grades 

  Create an algorithm that transforms grades from the numerical 
  system to grade system in A B C type character. 

  * from 90 - A
  * between 80 - 89 - B
  * between 70 - 79 - C
  * between 60 - 69 - D
  * less 60 - F

*/

function getScoreGrade(score) {
  if (score < 0 || score > 100)   {
    return "invalid value"
  }

  if (score >= 90) {
    return "score A"
  }

  if (score >= 80) {
    return "score B"
  }

  if (score >= 70) {
    return "score C"
  }

  if (score >= 60) {
    return "score D"
  }

  return "score F"
}

console.log(getScoreGrade(100));
console.log(getScoreGrade(80));
console.log(getScoreGrade(60));
console.log(getScoreGrade(50));
console.log(getScoreGrade(30));
console.log(getScoreGrade(10));
console.log(getScoreGrade(-1));
