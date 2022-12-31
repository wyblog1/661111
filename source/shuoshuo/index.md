---
sidebar: []
---
<script src="https://unpkg.com/@waline/client@v2/dist/waline.js"></script>
<link href='//unpkg.com/@waline/client@v2/dist/waline.css' rel='stylesheet' />
  <div id="waline"></div>
  <script>
        Waline.init({
      el: '#waline',
      serverURL: 'waline.wyblog1.tk',
      locale: {
      level0: '炼体',
      level1: '炼气',
      level2: '筑基',
      level3: '金丹',
      level4: '元婴',
      level5: '化神',
  },
  comment: true,
  reaction: true,
    reaction: [
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png',
  ],
 });
  </script>
