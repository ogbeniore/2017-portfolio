//make the needs availables
var main = document.querySelector('.me');
var div = document.createElement('div');
div.className = 'typed';
main.appendChild(div);



//Start typing...
typer('.typed')
    .cursor({ block: true }) //try to stop blinking after the story is done
    .line('Hi, there!')
    .pause(2000)
    .line('I am Oreoluwa Ojo,')
    .line('Some people call me Vencedor,')
    .pause(2000)
    .line('I am a  20') //insert 19-20... insert naija flag
    .pause(1000)
    .back(2)
    .pause(1000)
    .continue('19 year old fullstack [sort of] ')
    .continue('web developer, based in Nigeria.')
    .pause(1000)
    .line('I am a student of the Federal University of Agriculture, Abeokuta.')
    .pause('1000')
    .line("PS: I'm studying Computer Science.")
    .pause(1000)
    .line('I am always fascinated by new technologies, and always want to learn new things.')
    .pause(1000)
    .line('I started as a graphics designer, using Gimp, then i moved on to Adobe Photoshop, then Adobe Illustrator, After which i fell in love with programming.')
    .pause(1000)
    .line('I was forced to learn C, C++, and Python in school,[i can still write them a little bit] but my first love is Javascript.')
    .pause(1000)
    .line('I love the way you can do virtually everything in Javascript, basically making you a god.')
    .pause(1000)
    .line('I have quite a good understanding of EmberJS, VueJS, AngularJS and NodeJS.. [why do i love JS so much??]')
    .pause(1000)
    .line('I am available for freelance work in, Graphics design, Development of websites and webapps')
    .pause(1000)
    .line('You can tell me about your offer <a href="../contact.html">here</a>.')
    .pause(500)
    .line('You can see some of my work <a href="../gallery.html">here</a>')