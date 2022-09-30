let row1= 350;
let row2= 650;
let row3= 1076;
let column1= 50;
let column2= 400;
let column3= 750; 
let osprey;
let marmot;
let finch;
let iguana;
let kingbird;
let egret;
let sparrow;
let sandpiper; 
let goose;
let ospreycall;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6; 
let button7;
let button8;
let button9;
let button10;
//let button11;
let button12;
let button13;
let button14;
let button15;
let button16;
let button17;
let button18;
let button19;
let button20;
let button21;
let button22;
let myFont;
let points;
let bounds;
let film1;
let film6;
let film15;
let film16;
let film14;
let film3;
let film8;
let carl;
let img = []; 
let numImgs = 3;
let currentImg = 0; 
let slider;
let song;
let n;

function preload() {
  myFont = loadFont('RobotoSlab.ttf');
  osprey = loadImage('osprey.jpg');
  marmot = loadImage('marmot.jpg');
  finch = loadImage('finch.jpg');
  iguana = loadImage('iguana.jpg');
  kingbird = loadImage('kingbird.jpg');
  egret = loadImage('egret.jpg');
  sparrow = loadImage('sparrow.jpg');
  sandpiper = loadImage('sandpiper.jpg');
  goose = loadImage('goose.jpg');
  soundFormats('mp3');
  ospreycall = loadSound('ospreycall.mp3');
  marmotcall = loadSound('marmotcall.mp3');
  finchcall = loadSound('finchcall.mp3');
  sparrowcall = loadSound('sparrowcall.mp3');
  kingbirdcall = loadSound('kingbirdcall.mp3');
  egretcall = loadSound('egretcall.mp3');
  sandpipercall = loadSound('sandpipercall.mp3');
  goosecall = loadSound('goosecall.mp3');
  iguanacall = loadSound('iguanacall.mp3');
  ospreydescription = loadSound('ospreyd.mp3');
  marmotdescription = loadSound('marmotd.mp3');
  finchdescription = loadSound('finchd.mp3');
  iguanadescription = loadSound('iguanad.mp3');
  sparrowdescription = loadSound('sparrowd.mp3');
  egretdescription = loadSound('egretd.mp3');
  sandpiperdescription = loadSound('sandpiperd.mp3');
  goosedescription = loadSound('goosed.mp3');
  kingbirddescription = loadSound('kingbirdd.mp3');
  song = loadSound('light.mp3');
  welcomemessage = loadSound('Welcomeaudio.mp3');
  whymessage = loadSound('Whycreate.mp3');
  aboutmessage = loadSound('Aboutme.mp3');
  film1 = loadImage('film1.jpg');
  film6 = loadImage('film6.jpeg');
  film15 = loadImage('film15.jpg');
  film16 = loadImage('film16.jpg'); 
  film14 = loadImage('film14.jpeg');
  film3 = loadImage('film3.jpeg'); 
  carl = loadImage('carl.jpg');
  film8 = loadImage('film8.jpeg');
  let x, y, z, a, b, c, d, e;
  for (let i = 0; i < numImgs; i++) {
    img[i] = loadImage('lily2.jpg')
  }
  img[0] = loadImage('lily.jpg'); 
  img[1] = loadImage('lily3.jpg');
  img[2] = loadImage('lily4.jpg');
  img[3] = loadImage('lily5.jpg');
  img[4] = loadImage('lily6.jpg');
  img[5] = loadImage('lily7.jpg');
  img[6] = loadImage('lily8.jpg');
  img[7] = loadImage('lily9.jpg');
  
  
  
}

function setup() {
  createCanvas(1100,1800);
  background(217, 232, 250, 98);
  noStroke();
  fill(84, 69, 102);
  rect(110,108,400,100, 20);
  fill(249, 246, 235);
  rect(115,103,400,100, 20);
  fill(126, 104, 153);
  fill(84, 69, 102);
  rect(570,108,400,100, 20);
  fill(249, 246, 235);
  rect(575,103,400,100, 20);
  fill(84, 69, 102);
  rect(column3-105,1542,225,90, 20);
  fill(249, 246, 235);
  rect(column3-100,1537,225,90, 20);
  fill(126, 104, 153);
  textFont(myFont);
  textSize(60);
  textStyle(BOLD);
  text('A Virtual Gallery', 295, 70);
  //fill(25, 20, 170, 30);
  //text('Welcome',10, 48);
  textSize(10); 
  text('by Lillian Eagan', 660, 85);
  fill(84, 69, 102);
  textSize (20);
  text('Use the buttons to listen and learn', 150, 135);
  text('Press and hold for Animal Sounds', 150, 160);
  text('Press once for all other buttons', 163, 185);
  let n = createA('https://www.instagram.com/brewsandbirds/', '@brewsandbirds');
  n.position(670, 1555);
  n.style('myFont');
  textSize (16);
  text('eaganlillian@gmail.com', 670, 1600);
  textSize (20); 
  text('Want some background music?', 625, 145);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(750, 160);
  fill(84, 69, 102);
  noStroke();
  rect(44,344,312,212);
  rect(394,344,312,212);
  rect(744,344,312,212);
  rect(44,1070,312,212);
  rect(394,1070,312,212);
  rect(744,1070,312,212);
  rect(94,644,212,332);
  rect(444,644,212,332);
  rect(794,644,212,332);
  rect(column2-105, 1495, 210, 210)
  x = 0;
  y = 220;
  z = x- 150;
  a = x- 300;
  b = x- 450;
  c = x-600;
  d = x-750;
  e = x-900;
  f = x-1100;
  image(osprey,column1, row1, 300,200);
  image(marmot,column2, row1, 300,200);
  image(finch,column3, row1, 300,200);
  image(kingbird,100, row2, 200,320);
  image(egret,450, row2, 200,320);
  image(sparrow,800, row2, 200,320);
  image(sandpiper,column3, row3, 300,200);
  image(iguana,column1, row3, 300,200);
  image(goose,column2, row3, 300,200);
  button1 = createButton('Osprey Call');
  button1.position(column1+30,562);
  button1.size(100, 65);
  button1.mousePressed(ospreyaudio);
  let col = color(197,224,153);
  button1.style("font-size", "15px");
  button1.style("background-color", col);
  button1.style("font-style", "italic");
  button2 = createButton('Marmot Call');
  button2.position(column2+30,562);
  button2.size(100, 65);
  button2.mousePressed(marmotaudio);
  button2.style("font-size", "15px");
  button2.style("background-color", col);
  button2.style("font-style", "italic");
  button2.style("font-size", "15px");
  button2.style("background-color", col);
  button2.style("font-style", "italic");
  button3 = createButton('Finch Call');
  button3.position(column3+30,562);
  button3.size(100, 65);
  button3.mousePressed(finchaudio);
  button3.style("font-size", "15px");
  button3.style("background-color", col);
  button3.style("font-style", "italic");
  button4 = createButton('Sparrow Song');
  button4.position(column3+30,982);
  button4.size(100, 65);
  button4.mousePressed(sparrowaudio);
  button4.style("font-size", "15px");
  button4.style("background-color", col);
  button4.style("font-style", "italic");
  button5 = createButton('Kingbird Call');
  button5.position(column1+30,982);
  button5.size(100, 65);
  button5.mousePressed(kingbirdaudio);
  button5.style("font-size", "15px");
  button5.style("background-color", col);
  button5.style("font-style", "italic");
  button6 = createButton('Egret Call');
  button6.position(column2+30,982);
  button6.size(100, 65);
  button6.mousePressed(egretaudio);
  button6.style("font-size", "15px");
  button6.style("background-color", col);
  button6.style("font-style", "italic");
  button7 = createButton('Sandpiper Call');
  button7.position(column3+30,1288);
  button7.size(100, 65);
  button7.mousePressed(sandpiperaudio);
  button7.style("font-size", "15px");
  button7.style("background-color", col);
  button7.style("font-style", "italic");
  button8 = createButton('Goose Call');
  button8.position(column2+30,1288);
  button8.size(100, 65);
  button8.mousePressed(gooseaudio);
  button8.style("font-size", "15px");
  button8.style("background-color", col);
  button8.style("font-style", "italic");
  button9 = createButton('More Photos');
  button9.position(295,1710);
  button9.size(100, 45);
  button9.mouseClicked(NinePressed);
  button9.style("font-size", "15px");
  button9.style("background-color", col);
  button9.style("font-style", "italic");
  button11 = createButton('Welcome');
  button11.position(795,40);
  button11.mousePressed(togglePlayingW);
  button11.size(85, 25);
  button11.mouseClicked(NinePressed);
  button11.style("font-size", "15px");
  button11.style("background-color", col);
  button11.style("font-style", "italic");
  button12 = createButton('Iguana Noise');
  button12.position(column1+30,1288);
  button12.size(100, 65);
  button12.mousePressed(iguanaaudio);
  button12.style("font-size", "15px");
  button12.style("background-color", col);
  button12.style("font-style", "italic");
  button13 = createButton('Play');
  button13.position(680,158);
  button13.mousePressed(togglePlaying13);
  button13.style("font-size", "15px");
  button13.style("background-color", col);
  button13.style("font-style", "italic");
  button14 = createButton('Kingbird Description');
  button14.position(column1+170,982);
  button14.size(100, 65);
  button14.mousePressed(togglePlaying14);
  button14.style("font-size", "15px");
  button14.style("background-color", col);
  button14.style("font-style", "italic");
  button14.mouseOver(kingbirdTextFunc);
  button14.mouseOut(kingbirdTextGoAway);
  button15 = createButton('Egret Description');
  button15.position(column2+170,982);
  button15.size(100, 65);
  button15.mousePressed(togglePlaying15);
  button15.style("font-size", "15px");
  button15.style("background-color", col);
  button15.style("font-style", "italic");
  button15.mouseOver(egretTextFunc);
  button15.mouseOut(egretTextGoAway);
  button16 = createButton('Sparrow Description');
  button16.position(column3+168,982);
  button16.size(100, 65);
  button16.mousePressed(togglePlay16);
  button16.style("font-size", "15px");
  button16.style("background-color", col);
  button16.style("font-style", "italic");
  button16.mouseOver(sparrowTextFunc);
  button16.mouseOut(sparrowTextGoAway);
  button17 = createButton('Osprey Description');
  button17.position(column1+170,562);
  button17.size(100, 65);
  button17.mousePressed(togglePlaying17);
  button17.style("font-size", "15px");
  button17.style("background-color", col);
  button17.style("font-style", "italic");
  button17.mouseOver(ospreyTextFunc);
  button17.mouseOut(ospreyTextGoAway);
  button18 = createButton('Marmot Description');
  button18.position(column2+170,562);
  button18.size(100, 65);
  button18.mousePressed(togglePlaying18);
  button18.style("font-size", "15px");
  button18.style("background-color", col);
  button18.style("font-style", "italic");
  button18.mouseOver(marmotTextFunc);
  button18.mouseOut(marmotTextGoAway);
  button19 = createButton('Finch Description');
  button19.position(column3+170,562);
  button19.size(100, 65);
  button19.mousePressed(togglePlaying19);
  button19.style("font-size", "15px");
  button19.style("background-color", col);
  button19.style("font-style", "italic");
  button19.mouseOver(finchTextFunc);
  button19.mouseOut(finchTextGoAway);
  button20 = createButton('Iguana Description');
  button20.position(column1+170,1288);
  button20.size(100, 65);
  button20.mousePressed(togglePlaying20);
  button20.style("font-size", "15px");
  button20.style("background-color", col);
  button20.style("font-style", "italic");
  button20.mouseOver(iguanaTextFunc);
  button20.mouseOut(iguanaTextGoAway);
  button21 = createButton('Goose Description');
  button21.position(column2+170,1288);
  button21.style("font-size", "15px");
  button21.style("background-color", col);
  button21.style("font-style", "italic");
  button21.size(100, 65);
  button21.mousePressed(togglePlaying21);
  button21.mouseOver(gooseTextFunc);
  button21.mouseOut(gooseTextGoAway);
  button22 = createButton('Sandpiper Description');
  button22.position(column3+170,1288);
  button22.size(100, 65);
  button22.mousePressed(togglePlaying22);
  button22.style("font-size", "15px");
  button22.style("background-color", col);
  button22.style("font-style", "italic");
  button22.mouseOver(sandpiperTextFunc);
  button22.mouseOut(sandpiperTextGoAway);
  button23 = createButton('About Me');
  button23.position(405,1710);
  button23.size(100, 45);
  button23.mousePressed(togglePlayingAM);
  button23.style("font-size", "15px");
  button23.style("background-color", col);
  button23.style("font-style", "italic");
  //button23.mouseOver(finchTextFunc);
  //button23.mouseOut(finchTextGoAway);
  button23 = createButton('Why Create This Page?');
  button23.position(660,1650);
  button23.size(200, 30);
  button23.mousePressed(togglePlayingWH);
  button23.style("font-size", "15px");
  button23.style("background-color", col);
  button23.style("font-style", "italic");
  
}

function NinePressed() {
  currentImg++;

  if (currentImg > img.length - 1) {
    currentImg = 0;
  }
  
}

function togglePlaying13(){ 
  if (!song.isPlaying()) {
    song.play();
    button13.html('Pause')

  } else {
    song.pause()
    button13.html('Play')
  }
}

function ospreyaudio() {
  ospreycall.play();
  
}

function marmotaudio() {
  marmotcall.play();
  
}

function finchaudio() {
  finchcall.play();
  
}

function sparrowaudio() {
  sparrowcall.play();
  
}

function sandpiperaudio() {
  sandpipercall.play();
  
}

function kingbirdaudio() {
  kingbirdcall.play();
  
}

function egretaudio() {
  egretcall.play();
  
}

function gooseaudio() {
  goosecall.play();
  
}

function iguanaaudio() {
  iguanacall.play();
  
}

function togglePlaying14(){ 
  if (!kingbirddescription.isPlaying()) {
    kingbirddescription.play();
  } else {
    kingbirddescription.pause()
  }
}

function togglePlaying15(){ 
  if (!egretdescription.isPlaying()) {
    egretdescription.play();
  } else {
    egretdescription.pause()
  }
  
}

function togglePlay16(){ 
  if (!sparrowdescription.isPlaying()) {
    sparrowdescription.play();
  } else {
    sparrowdescription.pause()
  }
  
}

function togglePlaying17(){ 
  if (!ospreydescription.isPlaying()) {
    ospreydescription.play();
  } else {
    ospreydescription.pause()
  }
  
}

function togglePlaying18(){ 
  if (!marmotdescription.isPlaying()) {
    marmotdescription.play();
  } else {
    marmotdescription.pause()
  }
  
}

function togglePlaying19(){ 
  if (!finchdescription.isPlaying()) {
    finchdescription.play();
  } else {
    finchdescription.pause()
  }
  
}

function togglePlaying20(){ 
  if (!iguanadescription.isPlaying()) {
    iguanadescription.play();
  } else {
    iguanadescription.pause()
  }
  
}

function togglePlaying21(){ 
  if (!goosedescription.isPlaying()) {
    goosedescription.play();
  } else {
    goosedescription.pause()
  }
  
}

function togglePlaying22(){ 
  if (!sandpiperdescription.isPlaying()) {
    sandpiperdescription.play();
  } else {
    sandpiperdescription.pause()
  }
  
}


function sparrowstory() {
 sparrowdescription.play();
  
}

function finchstory() {
 finchdescription.play();
  
}

function marmotstory() {
 marmotdescription.play();
  
}

function goosestory() {
 goosedescription.play();
  
}

function sandpiperstory() {
 sandpiperdescription.play();
  
}

function ospreystory() {
 ospreydescription.play();
  
}
  
  //function lightsong() {
  //song.play();
  

function togglePlayingW(){ 
  if (!welcomemessage.isPlaying()) {
    welcomemessage.play();
  } else {
    welcomemessage.pause()
  }
}

function togglePlayingAM(){ 
  if (!aboutmessage.isPlaying()) {
    aboutmessage.play();
  } else {
    aboutmessage.pause()
  }
}

function togglePlayingWH(){ 
  if (!whymessage.isPlaying()) {
    whymessage.play();
  } else {
    whymessage.pause()
  }
}

function mouseReleased() {
  ospreycall.pause(); 
  marmotcall.pause(); 
  finchcall.pause(); 
  sparrowcall.pause(); 
  kingbirdcall.pause(); 
  egretcall.pause(); 
  sandpipercall.pause(); 
  goosecall.pause();
  iguanacall.pause();
  
}

function ospreyTextFunc() {
  greeting = createElement("h3", "Photograph taken on August 31, 2022 at Sandy Point State Reservation in Ipswich, Massachusetts, USA. The gates to Sandy Point open at sunrise and, like usual, I was the first car in line. As soon as I could slide past the entrance, I cautiously sped down the dirt road for the 18 minutes it takes to reach the end. Once I parked, I ran to the beach to capture some images of Piping Plovers before any other people could scare them away. Instead, just 50 meters onto the beach, I saw this osprey enjoying his breakfast. For about 5 minutes I quietly creeped around the bird, shooting and adjusting. He kept an eye on me, but seemed more concerned with the flock of scavenging seagulls circling him. After a few minutes, and a step too close, he flew away, breakfast in his talons.");
  greeting.position(20, this.y - 30);
}

function ospreyTextGoAway() {
  greeting.remove();
}

function marmotTextFunc() {
  greeting = createElement("h3", "Photograph taken on July 20, 2019 in Rocky Mountain National Park near Estes Park, Colorado, USA. Over the summer of 2019, I embarked on a 2-month cross-country American road trip with my best friend. Our visit to Rocky Mountain National Park in Colorado was a highly anticipated stop, and it did not disappoint. During a brief hike, I caught a family of three yellow-bellied marmots sunning close to their burrow’s entry. One of the marmots was perched on a rock, looking rather glamorous, as the strong winds blew back his thick coat. It was almost as if he was posing for a photoshoot, and I was all too happy to oblige. I moved slowly, making sure not to disturb him, as I snapped a few photos. Eventually his fellow marmot friend came to find him and I watched them scurry away.");
  greeting.position(20, this.y - 30);
}

function marmotTextGoAway() {
  greeting.remove();
}

function finchTextFunc() {
  greeting = createElement("h3", "Photograph taken on April 21, 2021 in Condesa, México City, Mexico. If you have ever been to Mexico City, or like me, lived in there, you know the sound and look of these birds. House finches thrive in large numbers throughout the city, often spotted eating bits of fallen tacos off the street. Their pretty song and appearance invites positive attention and appreciation from the people they cohabit space with. Every day, my neighbor made an extra piece of toast to leave for the birds on her balcony. I relished each time they visited, so that I could get a closer look. This finch was determined and fearless. He spent more than 20 minutes fishing out bits of toast from beneath the wire, not minding the shutter of my camera or chatting with my neighbor.");
  greeting.position(20, this.y - 30);
}

function finchTextGoAway() {
  greeting.remove();
}

function egretTextFunc() {
  greeting = createElement("h3", "Photograph taken on February 23, 2021 in Cancún, Quintana Roo, México. On the same day I photographed the Kingbird and Iguana, I shot this photo of an Egret. Egrets are among my very favorite bird species. I love their awkward appearance: long legs, heavy wings, unruly plumage, and pointy beak. I always get excited at the opportunity to observe them, and the egret in this photo was the closest I’ve ever been to one. I watched him hunt, unsuccessfully, for more than 2 hours. It was calming and mildly frustrating, as I was hoping to capture an action shot. After I realized I wouldn’t be getting the hunt I was hoping for, I started snapping some close ups of his face, beak, and plumage.");
  greeting.position(20, this.y - 30);
}

function egretTextGoAway() {
  greeting.remove();
}

function kingbirdTextFunc() {
  greeting = createElement("h3", "Photograph taken on February 23, 2021 in Cancún, Quintana Roo, México. When it comes to observing wildlife, some days are fruitful and others sparse. On this particular day, I was lucky enough to see a variety of interesting bird, reptilian, and insect species. The Kingbird was one of my favorites because he was so vibrant, both in color and song. On a brief break from working, I sat on a bench overlooking a bay teeming with crocodiles, herons, and turtles. This kingbird joined me for about 15 minutes, occasionally performing little tricks and singing from his wire. He was so unafraid, almost confrontational, that I felt compelled to take his photo.");
  greeting.position(20, this.y - 30);
}

function kingbirdTextGoAway() {
  greeting.remove();
}

function sparrowTextFunc() {
  greeting = createElement("h3", "Photograph taken on April 24, 2022 on the Wet Meadows Viewing Platform in West Newbury, Massachusetts, USA. This sparrow is either a song sparrow or Savannah sparrow, both of which are common in the area where I grew up. The Wet Meadows Viewing Platform is inconspicuously positioned next to a service highway, without an official parking lot. It’s a local birders spot that doesn’t get any foot traffic.On this particular day, I was chatting with a lovely woman who, like me, was searching for the flock of Glossy Ibises that had nested nearby. To our disappointment, the flock was no where to be seen, and so we shifted our focus to sparrows, blackbirds, and geese that were more readily available. The sparrow in this photo hung out with us for more than an hour, singing his songs and posing on branches. I got the sense he was curious and wanted some company, sort of like us. Together the three of us spent a few hours together, enjoying the sun.");
  greeting.position(20, this.y - 30);
}

function sparrowTextGoAway() {
  greeting.remove();
}

function iguanaTextFunc() {
  greeting = createElement("h3", "Photograph taken on February 23, 2021 in Cancún, Quintana Roo, México. Black spiny-tailed iguanas have the spotlight of Cancun’s wildlife. These guys are everywhere, stealing food, wreaking havoc, and tormenting squeamish tourists. They are not afraid to enter human dominated spaces and usually draw a crowd of paparazzi, photographing their every move. I took such a liking to these creatures that I was chased on a number of occasions for getting a bit too close. Iguanas are rather silent, relying on body language and behavior to communicate. This Iguana was minding his own business, soaking in some sun, when I sat down about 2 meters away to take his photo.");
  greeting.position(20, this.y - 30);
}

function iguanaTextGoAway() {
  greeting.remove();
}

function gooseTextFunc() {
  greeting = createElement("h3", "wPhotograph taken on April 23, 2022 on the Wet Meadows Viewing Platform in West Newbury, Massachusetts, in the US. Geese are a dime a dozen in my hometown. They are large, aggressive, and noisy neighbors, but also rather silly. The Wet Meadows viewing platform is a local birdwatcher's favorite, and during the spring and summer you are sure to find dozens of geese spread across the field. Geese are rather territorial, and watching them on a number of occasions I saw disputes arise. In this photograph, the goose in the foreground was encroaching on his neighbors territory. When he got just too close, the goose in the center of the frame snapped, honking aggressively and chasing him away. I quickly snapped this photo and was pleased to see how expressive the central goose was.");
  greeting.position(20, this.y - 30);
}

function gooseTextGoAway() {
  greeting.remove();
}

function sandpiperTextFunc() {
  greeting = createElement("h3", "Photograph taken on September 5, 2022 at Sandy Point State Reservation in Ipswich, Massachusetts, USA. The summer of 2022, I spent a significant number of hours in the early morning patrolling the beach in the Sandy Point State Reservation wildlife area. I was hunting for the local crown jewel species, the Piping Plover, who owe their increasing population numbers to decades of conservation efforts. I only saw Piping Plovers on two days. The rest of my time I spent watching sandpipers, most of which I believe to be Semipalmated Sandpipers. These small shorebirds spend early mornings running back and forth along the water’s edge, carefully avoiding the waves, as if they are avoiding getting their feet wet. They peck their beaks into the sand, looking for food, never keeping still for more than 2 seconds at a time.");
  greeting.position(20, this.y - 30);
}

function sandpiperTextGoAway() {
  greeting.remove();
}

 function draw() {
  image(film1, x, y, 150,100);
  x = x + 1;
  if (x > 1100) {
    x = -150;
  } 
  image(film6, z, y, 150,100);
  z = z + 1;
  if (z > 1100) {
    z = -150;
  }
 image(film15, a, y, 150,100);
  a = a + 1;
  if (a > 1100) {
    a = -150;
  }
    image(film16, b, y, 150,100);
  b = b + 1;
  if (b > 1100) {
    b = -150;
  }
   image(film14, c, y, 150,100);
  c = c + 1;
  if (c > 1100) {
    c = -150;
  }
   image(film3, d, y, 150,100);
  d = d + 1;
  if (d > 1100) {
    d = -150;
  }
   image(carl, e, y, 150,100);
  e = e + 1;
  if (e > 1100) {
    e = -150;
  }
   image(film8, f, y, 150,100);
  f = f + 1;
  if (f > 1100) {
    f = -150;
  }
    image(img[currentImg], column2-100, 1500, 200, 200);
   
    song.setVolume(slider.value());
   
 }
