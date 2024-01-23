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

/**
 * 자바스크립트 출력
자바스크립트는 여러 방법을 통해 결과물을 HTML 페이지에 출력할 수 있습니다.

자바스크립트에서 사용할 수 있는 출력 방법은 다음과 같습니다.

 

1. window.alert() 메소드

2. HTML DOM 요소를 이용한 innerHTML 프로퍼티

3. document.write() 메소드

4. console.log() 메소드
 */

/**
 * window.alert() 메소드
자바스크립트에서 가장 간단하게 데이터를 출력할 수 있는 방법은 window.alert() 메소드를 이용하는 것입니다.

window.alert() 메소드는 브라우저와는 별도의 대화 상자를 띄워 사용자에게 데이터를 전달해 줍니다.
 */

/**
 * HTML DOM 요소를 이용한 innerHTML 프로퍼티
실제 자바스크립트 코드에서 출력을 위해 가장 많이 사용되는 방법은 HTML DOM 요소를 이용한 
innerHTML 프로퍼티를 이용하는 방법입니다.

우선 document 객체의 getElementByID()나 getElementsByTagName() 
등의 메소드를 사용하여 HTML 요소를 선택합니다.
그리고서 innerHTML 프로퍼티를 이용하면 선택된 HTML 요소의 내용(content)이나 
속성(attribute)값 등을 손쉽게 변경할 수 있습니다.
 */

/**
 * document.write() 메소드
document.write() 메소드는 웹 페이지가 로딩될 때 실행되면, 
웹 페이지에 가장 먼저 데이터를 출력합니다.

따라서 document.write() 메소드는 대부분 테스트나 디버깅을 위해 사용됩니다.
하지만 웹 페이지의 모든 내용이 로딩된 후에 document.write() 메소드가 실행되면, 
웹 페이지 내에 먼저 로딩된 모든 데이터를 지우고 자신의 데이터를 출력하게 됩니다.

따라서 document.write() 메소드를 테스트 이외의 용도로 사용할 때에는 
충분히 주의해서 사용해야 합니다.
 */

/**
 * console.log() 메소드
console.log() 메소드는 웹 브라우저의 콘솔을 통해 데이터를 출력해 줍니다.

 

대부분의 주요 웹 브라우저에서는 F12를 누른 후, 메뉴에서 콘솔을 클릭하면 
콘솔 화면을 사용할 수 있습니다.

이러한 콘솔 화면을 통한 데이터의 출력은 좀 더 자세한 사항까지 출력되므로, 
디버깅하는데 많은 도움을 줍니다.
 */
<script>
  function alertDialogBox(){" "}
  {alert("확인을 누를 때까지 다른 작업을 할 수 없어요!")}; var str =
  document.getElementById("text"); str.innerHTML = "이 문장으로 바뀌었습니다!";
  document.write(4 * 5);
  <button onclick="document.write(4 * 5)">버튼을 눌러보세요!</button>
  <p>F12를 눌러서 콘솔 화면을 열면 결과를 확인할 수 있습니다.</p>
  console.log(4 * 5);
</script>;
