type Card = {
  id: string
  name: string
  message: string[]
  link?: string
  outro: string
}

const data: Card[] =
[
  {
    id: 'yobrohowsthemojo',
    name: 'Dearest Lyov and Clarissa',
    message: [
      'Merry Christmas! I hope you are both having the most idyllic holiday. Have been enjoying seeing a few of Clarissa\'s pictures on Instagram) Are you back in England for Christmas day?',
      'Really happy to have finally seen more of both of you this year and hopefully continuing next year! You\'re very welcome always in Munich',
    ],
    outro: 'Much much love to both of you and the whole family!'
  },
  {
    id: 'pandsanda',
    name: 'Dear Papa, Sylwia and Alicja',
    message: [
      'Heyo! Merry Christmas!!',
      'Hope you\'re having an absolutely lovely holiday filled with very ridiculous dogs and too much chocolate.',
      'Looking forward to catching up on Skype, lemme know when you\'re around!',
      'Liebe Grüße aus München.'
    ],
    outro: 'Much love!'
  },
  {
    id: 'sunnyaus',
    name: 'Dearest Mamochka, Andrew, Saschka, Jane, Marg and Rod',
    message: [
      'I hope you\'re all having the most wonderful sunny summer Christmas! I hope soon I might be able to have it also again together with you all - I have so much missed visiting and spending time with you in Chatswood and the beautiful Glenorie (though not sad to miss the snake!)',
      'Thinking of you all from significantly chillier and even snowy Berlin. I also hope that at some point it might even be possible for me to show you around some nice parts of Germany if you visit :))',
      'Have a lovely holiday! I\'m looking forward to seeing pictures of Saschka in the pool :)'
    ],
    outro: 'Much love!'
  },
  {
    id: 'edandannika',
    name: 'Dear Ed and Annika',
    message: [
      'Merry Christmas!',
      'Hope you\'re both having a lovely Christmas and helloes and much love to all the family! Are you up in Hope Valley for this one?',
      'Really happy to have seen you both so comparatively often this last year especially considering all that\'s happened. Long may it continue! I can\'t tell you enough how lucky I count myself to have you both as friends. Come and visit again and often in Munich, hopefully next time too I might be somewhat less zonked and can take you out and about and even see some exhibits and other stuff together :) I\'m planning to visit the UK as soon as possible next year, probably it\'s looking like February so if you\'ll have me I\'d love to drop in on you chaps then.'
    ],
    outro: 'Much love, from down under! Viele Liebe Grüße und bis bald!'
  },
  {
    id: 'deviltakethehindmost',
    name: 'Dearest Roberta',
    message: [
      'Yo! I\'m managing to write these in the last few hours before everyone in Europe gets up so nothing too profound this year. Thank the gods of the Aussie time difference! Are you in Lisbon for Christmas? Helloes to Jamie! It\'s uncomfortably hot here but somehow still overeating (slightly). Come visit me sometime in April/May (should be reasonable weather again by that point).',
      '(P.S. Reading Ai Weiwei\'s 1000 Years of Joys and Sorrows and it is GREAT)'
    ],
    outro: 'Viele Liebe Grüße)))'
  },
  {
    id: 'ewgross',
    name: 'Dear Ewan',
    message: [
      'Hey hey Dj! Merry Christmas! Helloes to your mum and dad and Ollie and anyone else who\'s joining you in Dubai ))) Hey let me know if there\'s any point you\'re NOT likely to be home in NY, I\'m planning to drop in as soon as possible and it would suck to miss you. Btw. I\'ve found an awesome music scene in Munich so you have to come by.'
    ],
    outro: 'Much much love to all!'
  },
  {
    id: 'markushka',
    name: 'Dear Markushka',
    message: [
      'Merry Christmas! I hope you\'re having a lovely, relaxing, totally offline Christmas with your family and until this moment weren\'t thinking about programming at all :\')',
      'Thank you so much for all the being an awesome colleague and help you\'ve given me. I can\'t really express how much I appreciate it, but it\'s a lot. Lookin\' forward to hanging out with the gang in Berlin again soon in the new year *parrot*',
    ],
    link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    outro: 'Liebe Grüße!'
  },
  {
    id: 'moritzandingrid',
    name: 'Dear Moritz and Ingrid',
    message: [
      'Merry Christmas! I hope you chaps are having a really lovely Christmas! I\'m really happy to have ',
      'Thank you so much for all the being an awesome colleague and help you\'ve given me. I can\'t really express how much I appreciate it, but it\'s a lot. Lookin\' forward to hanging out with the gang in Berlin again soon in the new year *parrot*',
    ],
    link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    outro: 'Liebe Grüße!'
  },
  {
    id: 'fabfam',
    name: 'Dear Sarah, Michael, Belinda and Honor',
    message: [
      'Merry Christmas!! Thank you all so much for the absolutely beautiful Advent calendar which I recieved from you - I\'ve been opening it every day in turns with my flatmate and it was his first one, since he is from Japan and from a (theoretically) Buddhist family.',
      'I hope you are having a wonderful holiday together in Oxford! Hopefully I will finally be able to visit again in the not too distant, once I have some passport stuff sorted out, and when quarantine regulations are easing up a bit again, if you\'ll have me! I can\'t believe that it\'s been so long since the last time we saw each other.'
    ],
    outro: 'Much much love!'
  },
  {
    id: 'famanddoggies',
    name: 'Dear Venessa, Simon and all the doggies',
    message: [
      'Merry Christmas!! I hope that you are all having a wonderful and cosy winter together and that you\'re all feeling fantastic and having tonnes of all the most tasty Christmas food. I\'m really looking forward to visiting the UK again as soon as it is possible and I really hope that it will be possible to see you all then again!',
      'Until then I\'m thinking of you all and wishing you all the very very best.'
    ],
    outro: 'Much love,'
  },
  {
    id: 'grandparents',
    name: 'Dear Gary and Melissa',
    message: [
      'Merry Christmas! I hope that you are having a wonderful, idyllic Christmas in Marble Falls. It makes me happy to think of you both there, and it really doesn\'t seem any time at all since I last saw you (but I\'m sad that it has in fact had to be such a long time). I\'m happy every time I get an email or message from you, and to have such wonderful family everywhere.',
      'I\'m settling in well in Munich and you are always invited. The nature here is beautiful - the land is flat then rises sharply as you hit the Alps, which you can sometimes see from high points in the city. More importantly I\'ve found really wonderful people here and have a lot of friends.',
    ],
    outro: 'Hoping finally to be able to see you again soon and sending much, much love! Liska,'
  },
  {
    id: 'pleasegetmeaticketwhenyouplayatthenextworldcup',
    name: 'Dearest Kostya',
    message: [
      'Merry Christmas) I don\'t know if you celebrate, I guess New Year is more important, right? Usually I like to write cards, put up beautiful decorations and send people presents. This year it\'s OK because I\'m not really celebrating, but I\'m enjoying other people celebrating here because my little brother gets excited for it. He asked Santa for apple juice ahaha.',
      'I\'ve been happy each time I get a message from you this year, it\'s been one of the few good things. I hope you are busy and happy, I don\'t know exactly how it is for you this year but I really hope that in some ways every day things are normal again. I\'m happy to see Katja posting beautiful pictures and I guess your brother must be almost a teenager? Weird.',
      'I\'m impatient to come to Ukraine again as soon as possible, but like last year I can\'t come without going to Kherson. It would be really stupid now but maybe it\'s now only a few more months to wait ) I want to hang out again and cycle around some places in the countryside and go climb somewhere maybe. You\'re amazing to me :) '
    ],
    outro: 'Love, Liska'
  },
  {
    id: 'theladyofthemaps',
    name: 'Dear Nicole',
    message: [
      'Merry Christmas! I hope you\'re having a lovely holiday in Munich ))) Really, really happy to have met you these last few weeks (just in time!) - it really feels though like you\'re already an old friend :D',
      'On that note, I\'m psyched to try some dancing if you\'re still up for teaching me a bit - maybe we can just set up somewhere outside once I\'m back and have a go?? Also I\'ll investigate which museums are free on a Sunday and maybe pencil in a couple of places to go if you\'re game? Might end up with a lot of postcards though haha.'
    ],
    outro: 'Much love from down under, Liska'
  },
  {
    id: 'jojo',
    name: 'Dear Jojo',
    message: [
      'Merry Christmas! It was really awesome meeting you this year, thank you for all the wonderful things which you have done for me, from taking me climbing to hosting me and showing me around Munich and feeding me (always brings instant popularity).',
      'I hope you and all your family have a lovely Christmas - and I look forward to seeing you (and finally properly meeting your sisters :) ) in February!'
    ],
    outro: 'Viele Grüße :))'
  },
  {
    id: 'wilderreiter',
    name: 'Dear Robert',
    message: [
      'Frohes Weihnachten! Ich hoffe, dass du hast ein tolles Urlaub für diese Tagen und der Neue Jahre (das ist immer verrückt in Berlin, ich weiß nicht ob es geht so auch in München??). Es war so nett dich zu treffen und zusammen Bouldern - ich hoffe wieder als ich nach München komme)',
    ],
    outro: 'Viele Grüße'
  },
  {
    id: 'tetiana',
    name: 'Dear Tetiana',
    message: [
      'Frohes Weihnachten! Ich hoffe, dass du hast ein tolles Urlaub für diese Tagen und der Neue Jahre (das ist immer verrückt in Berlin, ich weiß nicht ob es geht so auch in München??). Es war so nett dich zu treffen und zusammen Bouldern - ich hoffe wieder als ich nach München komme)',
    ],
    outro: 'Viele Grüße'
  },
  {
    id: 'ravn',
    name: 'Dear Tetiana',
    message: [
      'Frohes Weihnachten! Ich hoffe, dass du hast ein tolles Urlaub für diese Tagen und der Neue Jahre (das ist immer verrückt in Berlin, ich weiß nicht ob es geht so auch in München??). Es war so nett dich zu treffen und zusammen Bouldern - ich hoffe wieder als ich nach München komme)',
    ],
    outro: 'Viele Grüße'
  },
]

export default data