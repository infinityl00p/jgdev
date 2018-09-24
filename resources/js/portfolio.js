$(document).ready(function() {
  data.forEach((portfolioItem, i) => {
    const tags = portfolioItem.tags.map((tag, i) => {
      return (
      $('<div>', { class: 'tag-container'}).append(
        $('<span>', { class: 'tag', text: tag })
      ));
    });

    const portfolio = $('<li>', { class: 'portfolio__item'}).append(
      $('<a>', { class: 'screen', target: '_origin', href: portfolioItem.url }).append(
        $('<div>', { class: 'bar' }).append(
          $('<h2>', { text: portfolioItem.title })
        ).append(
          $('<i>')
        )
      ).append(
        $('<div>', { class: 'main' }).append(
          $('<img>', { src: portfolioItem.img })
        )
      ).append(
        $('<a>', { class: 'screen overlay', target: '_origin', href: portfolioItem.url }).append(
          $('<h3>', { text: 'Technologies Used'})
        ).append(tags)
      )
    )

    $("#portfolio-list").append(portfolio);
 });
});

const data = [
  {
    title: 'Pomlist',
    url: 'http://pomlist.s3-website-us-west-2.amazonaws.com/',
    img: 'https://image.flaticon.com/icons/svg/135/135702.svg',
    tags: ['React', 'HTML5', 'CSS3', 'S3']
  },
  {
    title: 'Aquarius',
    url: 'https://www.aquarius467.herokuapp.com',
    img: 'https://image.flaticon.com/icons/svg/334/334911.svg',
    tags: ['React', 'Redux', 'Node', 'Cron', 'Passport.js', 'REST']
  },
  {
    title: 'Project Ada',
    url: 'https://www.projectada.ca',
    img: 'https://image.flaticon.com/icons/svg/1111/1111933.svg',
    tags: ['Wordpress', 'Gulp', 'Javascript', 'Jquery', 'HTML5', 'CSS3', 'SASS']
  },
  {
    title: 'Life Happens',
    url: 'http://goo.gl/BSrauj',
    img: 'https://image.flaticon.com/icons/svg/993/993723.svg',
    tags: ['React Native', 'EXPO', 'OAuth']
  },
  {
    title: 'Canvas Homes',
    url: 'https://www.canvashomes.burstcreativegroup.com',
    img: 'https://image.flaticon.com/icons/svg/619/619034.svg',
    tags: ['Wordpress', 'Gulp', 'Javascript', 'Jquery', 'HTML5', 'CSS3', 'SASS']
  },
  {
    title: 'Lead / Impact',
    url: 'https://www.leadimpact.ca',
    img: 'https://image.flaticon.com/icons/svg/201/201553.svg',
    tags: ['Wordpress', 'Gulp', 'Javascript', 'Jquery', 'HTML5', 'CSS3', 'SASS']
  }
];