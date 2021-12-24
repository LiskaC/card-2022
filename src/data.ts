type Card = {
  id: string
  name: string
  message: string[]
  outro: string
}

const data: Card[] =
[
  {
    id: 'yobrohowsthemojo',
    name: 'Dearest Lyov and Clarissa',
    message: [
      'Merry Christmas! I hope you are both having the most idyllic holiday. I\'m still so happy that you were preparing to visit me here in Berlin over the New Year, even if it didn\'t work out it means so much that you even thought of it and wanted to come :) I hope that in the not too distant we can have a lot of really lovely family holidays together.',
      'Lyov I would love to read a bit more of what you\'re writing, if you\'re still busy with this. I don\'t know where I should be looking for this, so if you have some place where you\'re putting it out, send me a link? :) I have been - well, not actually lazy lately, but certainly distracted, so - in terms of writing not productive at all. If that changes, I\'d love your input on the crap I write.',
    ],
    outro: 'Much much love to both of you and hopefully we\'ll see each other soon!'
  },
  {
    id: 'pands',
    name: 'Dear Papa and Sylwia',
    message: [
      'Heyo! Merry Christmas!!',
      'Hope you\'re having an absolutely lovely holiday filled with slighly ridiculous dogs and chocolate.',
      'Do give a shout if on skype over holiday-y period!',
      'Liebe Grüße aus Berlin.'
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
      'Hello hello and Merry Christmas!',
      'I hope you\'re both having the most wonderful start to the holiday. I\'ve been so happy to see more of both of you again at last this year. Between Nürnberg, Lüneberg, Warsaw and WhatsApp, I think we\'ve made quite a good job of it this year?! I never stop being amazed and feeling so lucky that I can call the two of you my friends. It\'s incredible. Vive l\'amitié!',
      'Really really looking forward to another 10/10, top notch New Year together in the battlefield that is Dec 31st Berlin. And then, to all the other awesome times we\'re still to have in so many different places and at all different times of life!'
    ],
    outro: 'Until next week, much love, Viele Liebe Grüße und bis bald!'
  },
  {
    id: 'deviltakethehindmost',
    name: 'Dearest Roberta',
    message: [
      'Hey Ya! Got your Christmas card:)) Thank you, aside from just being fun to read as always it actually spurred me also not to give up on writing cards this year - so my relatives are suffering through various rambling messages again this year thanks to you (don\'t worry I haven\'t named the inspiration/culprit, you\'re still welcome in the UK).',
      'Incidentally Merry Christmas to you too! Barely remembered that that\'s what this is supposed to be about. I must say I find writing much less fluid when typing. Anyhow - hope it\'s a nice one with Jamie and also parents. I should be seeing you pretty soon after you\'re back in Lisbon, all going well. Still got to book flights mind but I\'ll worry about that when it comes to it...',
      'On that note, do let me know what your schedule\'s like (forgotten where the apostrophe goes on that one). I\'ll be doing 9 - 5 probably and finding ways to occupy self before/after, would love to spend time walking or maybe even running around with you (if you\'re up for it!).'
    ],
    outro: 'Viele Liebe Grüße und bis bald!'
  },
  {
    id: 'ewgross',
    name: 'Dear Ewan',
    message: [
      'Hey hey Dj! Merry Christmas! Are you in Edinburgh for this one? Helloes to Ollie and mum and dad and gran everyone/anyone else you\'re celebrating with.',
      'Lev had planned to come for NY but won\'t make it this time for travel regulation reasons - but Ed and Annika should be visiting! And Theo from Singapore - he was at Merton, can\'t remember if you ever met him. Am planning to do some long runs (incl. today :D ) since am on a half-marathon binge and also just spending lots of time outside. It\'s snowing on and off here at the mo :)',
      'Lmk also please when you\'re in the UK until - I have to do some sorting out of passports but will make an effort to get there before you leave. Incidentally am also getting a new flat in Berlin for a couple of months inshallah so come visit if you can (there until August). In Munich for Feb.'
    ],
    outro: 'Much love to all!'
  },
  {
    id: 'diplomat',
    name: 'Dear Matt',
    message: [
      'Merry Christmas my dear fellow! ☕',
      'I hope you\'re having a very well-earned very relaxing festive few days. I can hardly believe that it\'s been less than a year since starting work together, for me it feels much longer. You\'ve made me feel so welcome and it has been such a pleasure working together, getting to know you, and I consider, making an absolutely wonderful new friend of the absolutely top-est quality.',
      'Thank you so much for all the support and all the effort which you\'ve given to me. I appreciate it greatly, I hope I can start more and more giving back, and here\'s to more awesome years working together! *party parrot*'
    ],
    outro: 'A presto!'
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
      'Merry Christmas!! I hope that you are all having a wonderful and cosy holiday period together and that you\'re all feeling fantastic and having tonnes of all the most tasty Christmas food. I\'m really looking forward to visiting the UK again as soon as it is possible and I really hope that it will be possible to see you all then again!',
      'Until then I\'m thinking of you all and wishing you all the very very best.'
    ],
    outro: 'Much love,'
  },
  {
    id: 'grandparents',
    name: 'Dear Gary and Melissa',
    message: [
      'Merry Christmas! I hope that you are having a really lovely, cosy and tasty Christmas together in Marble Falls. I wish I was there with you. I really often think about the two of you and I really struggle to believe that it\'s been so long since I last came to visit - it doesn\'t feel that way at all. I was telling a friend just a few days ago about the College of the Ozarks and picturing how it would be to spend Christmas there, and also about Preservation Hall which we went to together in New Orleans (thank you again!). I was also remembering the hummingbirds at the birdfeeder outside the window and the deer walking up the hill past the house. If at some time as well you come visit me in Germany I will look forward to showing you many beautiful things here too!',
    ],
    outro: 'Thinking of you both and sending you much much love,'
  },
  {
    id: 'incrediblyawesomefamily',
    name: 'Dear Kristian, Maria and Maisie',
    message: [
      ''
    ],
    outro: ''
  },
  {
    id: 'grabenstattfriends',
    name: 'Dear Klotz Family',
    message: [
      'Merry Christmas! I hope you all have the most wonderful holiday together and a great start to the New Year. I\'m really happy to have met you all and have the best memories of the lovely weekend which I spent with you in August - thank you for making me so welcome. I hope to see you all again, and would love to welcome you too if you are ever in Berlin!'
    ],
    outro: 'Wishing you all the very very best,'
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
    id: 'sisterfromanothermister',
    name: 'Dear Marina',
    message: [
      'Merry Christmas! I hope you and your mother are having a wonderful holiday period together. It has been so lovely to meet you this year, in fact I am really sad to have been away for so much of it because of this, I\'m afraid I\'ve felt rather an unreliable friend, but I really hope that I\'ll get to see more of you in the new year, and I really look forward and hope that we can become and stay good friends!',
      'I wish you all the absolute and very best.'
    ],
    outro: 'Viele Liebe Grüße,'
  },
]

export default data