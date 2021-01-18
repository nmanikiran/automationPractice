document.addEventListener('DOMContentLoaded', () => {
  const $show = document.querySelector('#show');
  const $hide = document.querySelector('#hide');
  const $confirm = document.querySelector('#confirm');
  const $prompt = document.querySelector('#prompt');
  const $showhide = document.querySelector('#showHide');
  const $previewFrame = document.querySelectorAll('.previewFrame');
  const $drag1 = document.querySelector('#drag1');
  const $dropArea = document.querySelector('#dropArea');

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

  $dropArea.addEventListener(
    'dragover',
    (event) => {
      event.preventDefault();
    },
    false
  );

  $dropArea.addEventListener('drop', (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  });

  $drag1.addEventListener('dragstart', (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
  });
});
