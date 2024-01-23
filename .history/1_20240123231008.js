var javascript = 10; // 변수 javascript와 JavaScript는 서로 다른 두 개의 변수로 인식됨.

var JavaScript = 20;

//Var Script = 30;   변수의 선언은 var 키워드로만 할 수 있으면 Var는 동작하지 않음.

/**
 * 식별자 작성 방식
자바스크립트에서는 식별자를 작성할 때 다음과 같은 작성 방식을 사용할 수 있습니다.

1. Camel Case 방식

2. Underscore Case 방식

Camel Case 방식이란 식별자가 여러 단어로 이루어질 경우에 첫 번째 단어는 모두 소문자로 작성하고, 
그다음 단어부터는 첫 문자만 대문자로 작성하는 방식입니다.

Underscore Case 방식은 식별자를 이루는 단어들을 소문자로만 작성하고, 
그 단어들은 언더스코어(_)로 연결하는 방식입니다.
 * 
 */

var firstVar = 10; // Camel Case 방식

function my_first_func() {
  // Underscore Case 방식

  var firstLocalVar = 20; // Camel Case 방식
}
