document.addEventListener('DOMContentLoaded', () => {
  var $show = document.querySelector('#show');
  var $hide = document.querySelector('#hide');
  var $confirm = document.querySelector('#confirm');
  var $prompt = document.querySelector('#prompt');
  var $showhide = document.querySelector('#showHide');
  var $previewFrame = document.querySelectorAll('.previewFrame');
  const iframes = [
    {
      url: 'http://www.htmlcodes.ws',
      target: '_top'
    },
    {
      url: 'http://www.htmlcodes.ws',
      target: '_self'
    },
    {
      url: 'http://www.htmlcodes.ws',
      target: '_parent'
    }
  ];
  function onConfirm() {
    var txt;
    if (confirm('Hello , Are you sure you want to confirm?')) {
      txt = 'You pressed OK!';
    } else {
      txt = 'You pressed Cancel!';
    }
    document.getElementById('demo').innerHTML = txt;
  }
  function onPrompt() {
    var txt;
    var person = prompt('Please enter your name:', 'Harry Potter');
    if (person == null || person == '') {
      txt = 'User cancelled the prompt.';
    } else {
      txt = 'Hello ' + person + '! How are you today?';
    }
    document.getElementById('demo').innerHTML = txt;
  }

  $prompt.addEventListener('click', onPrompt, false);
  $confirm.addEventListener('click', onConfirm, false);

  $show.addEventListener('click', () => {
    $showhide.style.display = 'inline-block';
  });
  $hide.addEventListener('click', () => {
    $showhide.style.display = 'none';
  });
  Array.from($previewFrame).forEach((ele, index) => {
    var frame = iframes[index];
    var html_string = `<html><body><a href="${frame.url}" target=${frame.target}">HTML Codes ${frame.target}</a></body></html>`;
    ele.srcdoc = html_string;
  });
});
