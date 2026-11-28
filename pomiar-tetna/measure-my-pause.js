// Pause to Play · Measure my pause (Wix Custom Element, tag name: measure-my-pause)
// Camera pulse reading (rPPG), all processed on the visitor's device. Nothing is sent anywhere.
const PTP_CSS = "\n/* VOICE occasion, hushed: a quiet ritual, like a fine watch measuring you\n   IDEA a gold watch dial: the camera sits inside the dial, a gold hand fills it as it measures\n   PICTURE the dial with your face (or fingertip) inside, a live gold pulse line under it\n   COLOUR ivory ground, olive ink, compass gold; result card on deep olive\n   TYPE EB Garamond for numbers and titles, Jost Light for text\n   LAYOUT one column centred on the dial, phone first; wider screens keep the same column */\n:host{display:block;color-scheme:light;--ivory:#FBF9F4;--linen:#EFEAE1;--sage:#D9DBC9;--sage-2:#C6CAB0;--ink:#38382A;--soft:#5C5B4B;--rule:#DCD4C4;--gold:#B8964F;--gold-ink:#7E632E;--olive:#34362A;--on-olive:#F4EFE5;--on-olive-soft:#C9C4B2;--gold-ol:#D2B57A;--disp:\"EB Garamond\",Garamond,\"Times New Roman\",serif;--body:\"Jost\",\"Futura\",\"Avenir Next\",system-ui,sans-serif}\n*{box-sizing:border-box;min-width:0}\n:host{min-height:1180px;background:var(--ivory);color:var(--ink);font-family:var(--body);font-weight:300;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow:hidden;text-align:center}\n.app{max-width:560px;margin:0 auto;padding:28px 18px 40px;text-align:center}\n.top{display:flex;align-items:center;justify-content:center;gap:10px;color:var(--gold-ink);font-family:var(--disp);font-size:15px;letter-spacing:.04em}\n.top svg{width:28px;height:28px}\nh1{font-family:var(--disp);font-weight:500;font-size:clamp(34px,8vw,46px);line-height:1.05;letter-spacing:-.01em;margin:18px 0 10px}\nh1 i{font-weight:400;color:var(--gold-ink)}\n.lede{color:var(--soft);margin:0 auto;max-width:34ch}\n.steps{display:flex;justify-content:center;gap:8px;margin:22px 0 4px;font-size:13px;color:var(--soft)}\n.steps span{padding:4px 12px;border:1px solid var(--rule);border-radius:999px}\n.steps span.on{border-color:var(--gold);color:var(--gold-ink);background:#fff}\n.steps span.done{color:var(--gold-ink)}\n.dial{position:relative;width:min(78vw,340px);aspect-ratio:1;margin:22px auto 8px}\n.dial svg.ring{position:absolute;inset:0;width:100%;height:100%;overflow:visible}\n.lens{position:absolute;inset:11%;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 50% 40%,#fff,var(--linen))}\n.lens video{width:100%;height:100%;object-fit:cover;display:block}\n.lens video.mirror{transform:scaleX(-1)}\n.lens img.wc{position:absolute;inset:8%;width:84%;height:84%;object-fit:contain;opacity:.95}\n.lens .oval{position:absolute;left:24%;right:24%;top:12%;bottom:14%;border:1.5px dashed rgba(251,249,244,.85);border-radius:50%;pointer-events:none}\n.lens .breath{position:absolute;inset:0;display:grid;place-items:center}\n.lens .breath i{width:40%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(210,181,122,.55),rgba(184,150,79,.12) 70%);transform:scale(.6);transition:transform 1s ease-in-out}\n.readout{position:absolute;left:0;right:0;bottom:-6px;display:flex;justify-content:center}\n.readout b{font-family:var(--disp);font-weight:500;font-size:20px;background:var(--ivory);border:1px solid var(--rule);border-radius:999px;padding:2px 16px;color:var(--gold-ink);font-variant-numeric:tabular-nums}\n.wave{width:100%;height:64px;display:block;margin:14px 0 0}\n.msg{min-height:3.3em;margin:8px auto 0;max-width:36ch;color:var(--soft)}\n.msg.warn{color:#8a4b2a}\n.big{font-family:var(--disp);font-size:clamp(40px,11vw,60px);line-height:1;color:var(--ink);font-variant-numeric:tabular-nums;margin:6px 0}\n.big small{font-size:.38em;color:var(--soft);font-family:var(--body);letter-spacing:.02em}\n.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:14px 34px;border-radius:999px;border:1px solid var(--olive);background:var(--olive);color:var(--on-olive);font:400 16px/1.2 var(--body);letter-spacing:.06em;cursor:pointer;text-decoration:none}\n.btn:hover{background:#25271d}\n.btn.ghost{background:transparent;color:var(--ink);border-color:var(--sage-2)}\n.btn.ghost:hover{background:var(--sage)}\n.btn:focus-visible{outline:1px solid var(--gold-ink);outline-offset:4px}\n.row{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:18px}\n.mode{display:inline-flex;border:1px solid var(--rule);border-radius:999px;padding:3px;margin-top:18px;background:#fff}\n.mode button{border:0;background:none;font:300 14px var(--body);padding:8px 16px;border-radius:999px;color:var(--soft);cursor:pointer;min-height:38px}\n.mode button[aria-pressed=true]{background:var(--sage);color:var(--ink)}\n.tips{list-style:none;padding:0;margin:20px auto 0;max-width:34ch;text-align:left;font-size:15px;color:var(--soft)}\n.tips li{padding:6px 0 6px 26px;position:relative;border-top:1px solid var(--rule)}\n.tips li::before{content:\"\";position:absolute;left:4px;top:15px;width:8px;height:8px;border:1px solid var(--gold);border-radius:50%}\n.fine{font-size:13px;color:var(--soft);margin:22px auto 0;max-width:40ch;line-height:1.55}\n.pause h2{font-family:var(--disp);font-weight:500;font-size:clamp(24px,6vw,30px);line-height:1.15;margin:6px auto 0;max-width:22ch}\n.cue{font-family:var(--disp);font-style:italic;font-size:26px;color:var(--gold-ink);min-height:1.4em;margin-top:4px}\n.timer{font-variant-numeric:tabular-nums;color:var(--soft);font-size:15px}\n.card{margin:22px auto 0;width:100%;max-width:420px;border-radius:6px;box-shadow:0 1px 0 var(--rule);display:block}\n.why{font-size:15px;color:var(--soft);max-width:36ch;margin:14px auto 0}\n[hidden]{display:none!important}\n@media (prefers-reduced-motion:reduce){.lens .breath i{transition:none}}\n\np{margin:0}\n.pc{margin:16px auto 0;max-width:420px;padding:18px 20px;border:1px solid var(--rule);border-radius:14px;background:#fff;text-align:left}\n.pc .k{font-family:var(--disp);font-size:14px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-ink)}\n.pc h3{font-family:var(--disp);font-weight:500;font-size:22px;line-height:1.2;margin:4px 0 0}\n.or{display:inline-block;margin-top:14px;background:none;border:0;font:300 15px var(--body);color:var(--gold-ink);text-decoration:underline;text-decoration-color:var(--gold);text-underline-offset:5px;cursor:pointer;padding:8px}\n.psteps{list-style:none;padding:0;margin:12px auto 0;max-width:34ch}\n.psteps li{padding:6px 0;color:var(--soft);transition:color .6s}\n.psteps li.on{color:var(--ink);font-family:var(--disp);font-size:21px;line-height:1.3}\n.back{display:inline-block;margin-top:18px;font-size:15px;color:var(--gold-ink);text-decoration:underline;text-decoration-color:var(--gold);text-underline-offset:5px}\n.card{max-width:340px}\n";
const PTP_HTML = "<main class=\"app\">\n  <h1 id=\"title\">Measure <i>my</i> pause</h1>\n  <p class=\"lede\" id=\"lede\">See what two minutes of breathing do. Your camera reads your pulse for 20 seconds, before and after.</p>\n\n  <div class=\"steps\" id=\"steps\" aria-hidden=\"true\"><span id=\"s1\">Before</span><span id=\"s2\">Pause</span><span id=\"s3\">After</span></div>\n\n  <div class=\"dial\" id=\"dial\">\n    <svg class=\"ring\" viewBox=\"0 0 200 200\" aria-hidden=\"true\">\n      <defs><linearGradient id=\"gg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F6E7BC\"/><stop offset=\".42\" stop-color=\"#C9A15A\"/><stop offset=\".68\" stop-color=\"#ECD79F\"/><stop offset=\"1\" stop-color=\"#A47A38\"/></linearGradient></defs>\n      <circle cx=\"100\" cy=\"100\" r=\"96\" fill=\"none\" stroke=\"#DCD4C4\" stroke-width=\".6\"/>\n      <g id=\"ticks\" stroke=\"#B8964F\" stroke-linecap=\"round\"></g>\n      <circle id=\"prog\" cx=\"100\" cy=\"100\" r=\"92\" fill=\"none\" stroke=\"url(#gg)\" stroke-width=\"2.4\" stroke-linecap=\"round\" pathLength=\"100\" stroke-dasharray=\"0 100\" transform=\"rotate(-90 100 100)\"/>\n    </svg>\n    <div class=\"lens\" id=\"lens\">\n      <img class=\"wc\" id=\"wc\" alt=\"\" crossorigin=\"anonymous\">\n      <video id=\"vid\" playsinline muted hidden></video>\n      <div class=\"oval\" id=\"oval\" hidden></div>\n      <div class=\"breath\" id=\"breath\" hidden><i id=\"orb\"></i></div>\n    </div>\n    <div class=\"readout\" id=\"readout\" hidden><b id=\"bpmLive\">-- bpm</b></div>\n  </div>\n\n  <canvas class=\"wave\" id=\"wave\" hidden aria-hidden=\"true\"></canvas>\n  <p class=\"msg\" id=\"msg\" aria-live=\"polite\"></p>\n\n  <section id=\"vStart\">\n    <div class=\"mode\" role=\"group\" aria-label=\"How to measure\">\n      <button id=\"mFace\" aria-pressed=\"true\">Face</button>\n      <button id=\"mFinger\" aria-pressed=\"false\">Fingertip</button>\n    </div>\n    <ul class=\"tips\" id=\"tipsFace\">\n      <li>Sit by a window or under a soft, even light.</li>\n      <li>Hold the phone at eye level, face inside the oval.</li>\n      <li>Stay still and quiet for 20 seconds.</li>\n    </ul>\n    <ul class=\"tips\" id=\"tipsFinger\" hidden>\n      <li>Rest your fingertip lightly over the back camera.</li>\n      <li>Cover the lens fully. The light turns on if your phone allows.</li>\n      <li>Don't press hard. Stay still for 20 seconds.</li>\n    </ul>\n    <div class=\"row\"><button class=\"btn\" id=\"go\">Measure my pulse</button></div>\n    <p class=\"fine\">Your camera image never leaves your device. Nothing is recorded, saved or sent. A wellbeing reading, indicative only, not a medical measurement.</p>\n  </section>\n\n  <section id=\"vMid\" hidden>\n    <div class=\"big\" id=\"b1\">--<small> bpm</small></div>\n    <div class=\"pc\"><p class=\"k\" id=\"pcK\">Your pause</p><h3 id=\"pcT\"></h3></div>\n    <div class=\"row\"><button class=\"btn\" id=\"startPause\">Begin the pause</button></div>\n  </section>\n\n  <section id=\"vPause\" class=\"pause\" hidden>\n    <h2 id=\"pT\"></h2>\n    <p class=\"cue\" id=\"cue\"></p>\n    <ol class=\"psteps\" id=\"pSteps\"></ol>\n    <p class=\"timer\" id=\"ptime\">2:00</p>\n    <div class=\"row\"><button class=\"btn ghost\" id=\"skip\">I'm done, measure now</button></div>\n  </section>\n\n  <section id=\"vReady2\" hidden>\n    <p class=\"lede\">Beautiful. Stay as you are, and let's see.</p>\n    <div class=\"row\"><button class=\"btn\" id=\"go2\">Measure again</button></div>\n  </section>\n\n  <section id=\"vResult\" hidden>\n    <div class=\"big\" id=\"bRes\"></div>\n    <p class=\"why\" id=\"resWhy\"></p>\n    <img class=\"card\" id=\"cardImg\" alt=\"Your pause card\">\n    <div class=\"row\"><button class=\"btn\" id=\"share\">Share my card</button><a class=\"btn ghost\" id=\"save\" download=\"my-pause.png\" href=\"#\">Save image</a></div>\n    <div class=\"row\"><button class=\"btn ghost\" id=\"again\">Start over</button></div>\n    <p class=\"fine\">Indicative only. Camera readings vary with light and movement. Not a medical device and not for diagnosis.</p>\n  </section>\n\n  <section id=\"vNoCam\" hidden>\n    <p class=\"lede\" id=\"noCamText\">This page can't use the camera here.</p>\n    <div class=\"row\"><button class=\"btn\" id=\"demo\">See a demo</button><button class=\"btn ghost\" id=\"retry\">Try again</button></div>\n  </section>\n\n  <a class=\"back\" id=\"back\" href=\"/\">Back to today's pause</a>\n</main>\n";
const PTP_DATA = {"PZ":[["sleep","Thirty minutes before bed, dim the lights and swap the screen for a paper book.",60,["Dim the lights in the room.","Leave your phone to charge outside the bedroom.","Open a paper book."]],["movement","Take a walk with one open question. Don’t chase the answer.",60,["Choose one question you carry.","Step outside and start walking.","Let the question walk with you. Don’t chase the answer."]],["nature","Go outside for twenty minutes. No music. No podcast. No goal.",60,["Choose your twenty minutes now.","Pick a place with trees or water.","No phone, no podcast, no step count."]],["stillness","Stay in silence two minutes longer than feels comfortable.",120,["Put everything down.","Sit in the quiet you have.","When you want to stop, stay two minutes more."]],["connection","When you buy your coffee, smile, make eye contact and have a short chat.",60,["When you order, look up.","Smile and make eye contact.","Ask one small question, and listen."]],["nourishment","Add one new plant to a meal today. Aim for thirty a week.",60,["Look at your next meal.","Add one plant you haven’t eaten this week: herbs, seeds, a fruit.","Count it."]],["joy","Write down three good things from today.",90,["Take a pen, or your notes app.","Write three small good things.","For each, write why it happened."]],["sleep","Before bed, write tomorrow’s to-do list. Then say: “Noted. We’ll handle this tomorrow.”",120,["Take a pen and paper.","Write down everything tomorrow needs.","Say: “Noted. We’ll handle this tomorrow.”"]],["movement","Walk for ten minutes after your next meal.",60,["Stand up now.","Walk slowly for one minute.","Promise yourself ten after lunch."]],["nature","Count your minutes in nature this week. Aim for 120.",30,["Think back over this week.","Add up your minutes among trees, water or green.","Plan the rest of your 120."]],["stillness","Two breaths in through the nose, one long breath out. Repeat for five minutes.",300,["Breathe in through the nose.","Take a second, shorter breath on top.","Let it all go, slowly, through the mouth."]],["connection","With your morning coffee, text one person: “This made me think of you.”",60,["Think of someone who crossed your mind lately.","Write: “This made me think of you.”","Send it. No need to say more."]],["nourishment","Drink a full glass of water before your next coffee.",30,["Fill a glass.","Drink it slowly, standing still.","Notice the cold."]],["joy","Look for one beautiful thing on your way today.",60,["On your next walk, slow down.","Look up, and look closely.","Stop for the one thing that moves you."]],["sleep","Take a warm shower about ninety minutes before bed.",30,["Decide when you want to be asleep.","Count back ninety minutes.","Set a gentle reminder for your shower."]],["movement","Walk at a pace where you could still talk.",60,["Start walking.","Speed up until talking takes a little effort.","Stay there. That is your pace."]],["nature","Look at something green for forty seconds.",40,["Find a plant, a tree or a park.","Look at it, only it.","Notice how many greens there are."]],["stillness","Put your phone in another room for the next hour.",30,["Silence your phone.","Carry it to another room.","Walk back without it."]],["connection","Call someone instead of sending a message.",60,["Think of someone you miss.","Decide when you will call.","Or call now."]],["nourishment","Eat your next meal without a screen.",60,["Put the phone face down, away.","Look at your plate before you start.","Taste the first three bites."]],["joy","Eat something ripe, slowly, standing at the kitchen sink.",60,["Choose something ripe: a peach, a pear, a fig.","Stand at the sink. No plate, no phone.","Eat it slowly. Notice the first bite."]],["sleep","Have your last coffee before noon.",30,["Check the time of your last coffee today.","After noon, choose a caffeine-free tea.","Or a glass of warm water."]],["movement","Spend ten minutes moving gently after you wake up. Not to perform, only to arrive.",60,["Stand beside the bed.","Roll your shoulders, reach up, bend slowly.","Move only as far as feels kind."]],["nature","Open a window and listen for birds.",60,["Open a window.","Close your eyes.","Count the different calls you hear."]],["stillness","Do nothing for sixty seconds. Notice three breaths, one sound, one thing you see.",60,["Sit down and put your phone away.","Notice three breaths.","Then one sound, and one thing you see."]],["connection","Do one small kind thing before noon.",60,["Think of one person.","Choose something small: a note, a coffee, a thank you.","Do it before twelve."]],["joy","Do one ordinary thing slowly: pour the tea, brush your hair. Notice its rhythm.",60,["Choose one ordinary task: tea, hair, dishes.","Do it at half your usual speed.","Notice its sounds and its rhythm."]],["sleep","Take your first coffee outside, or by an open window.",60,["Walk to the window or the door.","Face the daylight.","Drink slowly. Nothing else."]],["stillness","While the kettle boils, just wait. Don’t fill the time.",60,["Switch the kettle on.","Stand still and wait.","Watch the steam. Nothing else."]],["stillness","Close your laptop, write tomorrow’s first task, and say “Done for today” out loud.",60,["Write tomorrow’s first task on paper.","Close the laptop.","Say “Done for today” out loud."]],["stillness","For the task that keeps nagging you, write one line: when and how you will do it.",60,["Name the task that keeps coming back to you.","Write one line: when and how you will do it.","Close the notebook. It has a plan now."]],["movement","Feeling flat? Walk up and down the stairs for ten minutes.",60,["Find a staircase.","Walk up and down at an easy pace.","After ten minutes, notice your energy."]],["nature","Sit where you can see a tree.",60,["Find a window or a bench with a view of a tree.","Sit down.","Watch its branches move for one minute."]],["stillness","Name what you feel, in one word.",30,["Stop and take one breath.","Ask: what am I feeling right now?","Name it in one word, quietly or on paper."]],["sleep","Wake up at the same time on Saturday, too.",60,["Look at the time you woke up today.","Set the same alarm for Saturday.","When it rings, open the curtains and let the light in."]],["joy","Keep one holiday habit at home today.",60,["Think of your last good holiday.","Pick one habit from it: a slow breakfast, a long walk, no alarm.","Do it today, at home."]],["nature","Take a morning walk in daylight, even when the sky is grey.",60,["Dress warmly and step out in the morning.","Walk wherever you like, under the open sky.","Stay out as long as you can, up to an hour."]],["connection","Hug someone for a few seconds longer than usual.",30,["Choose someone you love.","Hug them.","Stay three seconds longer than usual."]],["nourishment","Add one more fruit or vegetable to your day.",60,["Look at what you will eat today.","Add one fruit or one vegetable.","Tomorrow, notice how you feel."]],["joy","Listen to one song you love with your eyes closed.",60,["Choose one song you love.","Put on headphones and close your eyes.","Listen until the very last note."]],["movement","Before something you want to remember, walk slowly for ten minutes.",60,["Before you study or meet someone, stand up.","Walk slowly for ten minutes.","Then sit down and begin."]],["nourishment","Add a spoonful of something fermented to a meal: yoghurt, kefir or sauerkraut.",30,["Choose one: yoghurt, kefir, sauerkraut or kimchi.","Add a spoonful to your next meal.","Do it again tomorrow."]],["movement","On your next walk, switch between three fast minutes and three slow ones.",60,["Start your walk at an easy pace.","Walk fast for three minutes, then slowly for three.","Repeat as many times as feels good."]],["connection","Write a short thank-you note to someone who helped you.",60,["Think of someone who helped you.","Write three sentences: what they did and what it meant.","Send it today."]],["joy","When stress rises, recall one happy memory in detail.",60,["Close your eyes.","Recall one happy memory: where you were, who was there.","Stay with the details for one minute."]],["sleep","If you slept badly, move one difficult conversation to tomorrow.",30,["Notice: I slept badly.","Look at today’s plan.","Move one difficult conversation to tomorrow."]],["movement","Tense each part of your body for five seconds, then let go.",120,["Sit or lie down.","Tense your feet for five seconds, then let go.","Move up the body: legs, belly, hands, shoulders, face."]],["nature","Look up at tall trees, or the sky, for one minute.",60,["Find a tall tree or an open sky.","Stand still and look up.","Stay for one minute."]],["connection","Stroke a dog or a cat for ten minutes.",60,["Find a dog or a cat: yours, a friend’s, a neighbour’s.","Sit down with it.","Stroke it slowly for ten minutes."]],["sleep","Take a ten-minute nap after lunch. Set an alarm.",60,["Set an alarm for ten minutes.","Lie down or lean back somewhere quiet.","Get up when it rings, even if you only rested."]],["connection","Give one honest compliment today.",60,["Notice something you genuinely admire in someone.","Tell them, in one sentence.","Then let it land. No need to say more."]],["nourishment","At your next meal, put your fork down between bites.",60,["Take one bite.","Put the fork down and chew.","Pick it up again only when your mouth is empty."]],["stillness","Before something important, write your worries down for ten minutes.",60,["Before the big moment, take a sheet of paper.","Write down every worry for ten minutes.","Fold the paper and go."]],["sleep","Something upset you today? Sleep on it before you decide.",30,["Notice what upset you today.","Don’t decide or reply tonight.","Sleep on it, and look again in the morning."]],["joy","Take a new route home today.",60,["Look at your usual way home.","Pick one different street.","Notice one thing you have never seen before."]],["stillness","Stuck? Do something easy for ten minutes: fold laundry, water the plants.",60,["Notice that you are stuck.","Do something easy: fold laundry, water the plants.","After ten minutes, go back to the problem."]],["nature","If your thoughts are going round in circles, walk through a park, not along a road.",60,["Choose a park, a wood or a river path.","Leave the busy road behind.","Walk, and let the thoughts loosen."]],["stillness","Speak to yourself about a mistake the way you would speak to a friend.",60,["Think of one mistake that is bothering you.","Ask: what would I say to a friend?","Say it to yourself, in the same tone."]],["joy","Plan something small to look forward to.",60,["Pick something small: a walk, a dinner, a film.","Put it in your calendar.","Let yourself look forward to it."]],["stillness","When your music ends, stay in the silence for two minutes.",120,["Play one piece of music you love.","When it ends, don’t start the next one.","Sit in the silence for two minutes."]]],"S":["thirty-minutes-before-bed-dim","take-walk-open-question-dont","go-outside-twenty-minutes-no","stay-silence-two-minutes-longer","buy-coffee-smile-make-eye","add-new-plant-meal-today","write-down-three-good-things","before-bed-write-tomorrows-do","walk-ten-minutes-after-next","count-minutes-nature-week-aim","two-breaths-through-nose-long","morning-coffee-text-person-made","drink-full-glass-water-before","look-beautiful-thing-way-today","take-warm-shower-about-ninety","walk-pace-where-could-still","look-something-green-forty-seconds","put-phone-another-room-next","call-someone-instead-sending-message","eat-next-meal-without-screen","eat-something-ripe-slowly-standing","have-last-coffee-before-noon","spend-ten-minutes-moving-gently","open-window-listen-birds","do-nothing-sixty-seconds-notice","do-small-kind-thing-before","do-ordinary-thing-slowly-pour","take-first-coffee-outside-by","kettle-boils-wait-dont-fill","close-laptop-write-tomorrows-first","nagging-task-write-when-how","feeling-flat-walk-stairs-ten","sit-where-see-tree","name-what-feel-one-word","wake-same-time-saturday-too","keep-one-holiday-habit-home","morning-walk-daylight-grey","hug-someone-few-seconds-longer","add-one-more-fruit-vegetable","listen-song-love-eyes-closed","before-remember-walk-slowly-ten","add-spoonful-something-fermented-meal","walk-three-fast-three-slow","write-short-thank-you-note","stress-rises-recall-happy-memory","slept-badly-move-difficult-conversation","tense-each-part-body-five","look-up-tall-trees-sky","stroke-dog-cat-ten-minutes","take-ten-minute-nap-after","give-one-honest-compliment-today","next-meal-put-fork-down","before-important-write-worries-down","upset-sleep-on-it-before-decide","take-new-route-home-today","stuck-do-something-easy-ten","thoughts-circles-walk-park-not","speak-yourself-mistake-like-friend","plan-something-small-look-forward","music-ends-stay-silence-two"],"SEQ":[26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],"START":297,"IMG":{"sleep":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/sleep.webp","connection":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/connection.webp","joy":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/play.webp","stillness":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/stillness.webp","nature":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/nature.webp","nourishment":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/nourishment.webp","movement":"https://cdn.jsdelivr.net/gh/pausetoplaycontact-source/pause-to-play-media@d57fe09d3e2200497ca4950b872966c4e1e873ba/wix-embeds/img/movement.webp"}};
const PTP_LOGO = "<path d=\"M205,92 A325,325 0 1 0 628,188\"/><path d=\"M378,690 L378,612 C378,588 348,572 345,545 C340,500 322,445 320,400 C318,355 338,322 372,268\"/><path d=\"M345,543 C290,505 222,455 176,420 C185,450 250,500 345,543\"/><path d=\"M347,545 C365,470 420,385 483,350 C495,380 460,450 347,545\"/><path d=\"M372,268 C345,225 255,205 200,250 C165,280 172,330 230,338 C290,345 335,315 372,268\"/><path d=\"M372,265 C330,240 275,215 258,185 C238,150 260,115 272,95 C285,72 284,45 290,22 C350,40 398,92 406,152 C412,200 395,238 372,265\"/><path d=\"M403,205 C450,165 505,138 565,145 C540,205 480,262 375,272\"/>";

function ptpInit(root, host) {
const $ = id => root.getElementById(id);
const D = PTP_DATA, MEAS = 20, WARM = 2;
const BREATH_SLUG = "two-breaths-through-nose-long";
const doyOf = d => Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(2026, 0, 0)) / 864e5);
const TODAY = doyOf(new Date());
const kOf = doy => { const L = D.SEQ.length, i = doy - D.START; return D.SEQ[((i % L) + L) % L]; };
const shown = k => { for (let d = TODAY; d >= D.START && d > TODAY - D.SEQ.length; d--) if (kOf(d) === k) return true; return false; };
const pick = k => { const p = D.PZ[k]; return { k, f: p[0], t: p[1], sec: p[2], steps: p[3], slug: D.S[k], img: D.IMG[p[0]] || D.IMG.stillness }; };

/* which pause: ?pause=<slug> (only if already shown), else today's */
let qs = ""; try { qs = new URLSearchParams(location.search).get("pause") || ""; } catch (e) {}
let k0 = D.S.indexOf(qs); if (k0 < 0 || !shown(k0)) k0 = kOf(TODAY);
const BK = D.S.indexOf(BREATH_SLUG);
const P = BK >= 0 ? pick(BK) : { k: -1, t: "Two breaths in through the nose, one long breath out.", steps: [], img: D.IMG.stillness };
P.sec = 120; P.t = "Two breaths in through the nose, one long breath out.";
$("wc").src = P.img;
$("back").href = "/pause/" + D.S[k0];
$("back").textContent = k0 === kOf(TODAY) ? "Back to today's pause" : "Back to your pause";
$("back").addEventListener("click", e => { e.preventDefault(); try { window.location.href = $("back").href; } catch (x) {} });

let mode = "face", stream = null, track = null, running = false, demo = false, samples = [], res = { b1: null, b2: null };
const vid = $("vid"), work = document.createElement("canvas"), wctx = work.getContext("2d", { willReadFrequently: true });

{ let s = ""; for (let i = 0; i < 60; i++) { const a = i / 60 * 2 * Math.PI, l = i % 5 ? 3 : 7, r1 = 88, r2 = 88 - l; s += `<line x1="${100 + r1 * Math.sin(a)}" y1="${100 - r1 * Math.cos(a)}" x2="${100 + r2 * Math.sin(a)}" y2="${100 - r2 * Math.cos(a)}" stroke-width="${i % 5 ? .5 : .9}"/>`; } $("ticks").innerHTML = s; }
const setProg = p => $("prog").setAttribute("stroke-dasharray", `${Math.max(0, Math.min(100, p * 100))} 100`);
const VIEWS = ["vStart", "vMid", "vPause", "vReady2", "vResult", "vNoCam"];
const show = v => VIEWS.forEach(x => $(x).hidden = x !== v);
const step = n => ["s1", "s2", "s3"].forEach((x, i) => { $(x).className = i + 1 === n ? "on" : i + 1 < n ? "done" : ""; });
const msg = (t, warn) => { $("msg").textContent = t || ""; $("msg").className = "msg" + (warn ? " warn" : ""); };
const LEDE0 = $("lede").textContent;

function setMode(m) { mode = m; $("mFace").setAttribute("aria-pressed", m === "face"); $("mFinger").setAttribute("aria-pressed", m === "finger"); $("tipsFace").hidden = m !== "face"; $("tipsFinger").hidden = m !== "finger"; }
$("mFace").onclick = () => setMode("face"); $("mFinger").onclick = () => setMode("finger");

async function openCam() {
  if (stream) return true;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: mode === "face" ? "user" : { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 30 } } });
  } catch (e) { stream = null; noCam(e); return false; }
  track = stream.getVideoTracks()[0];
  vid.srcObject = stream; vid.classList.toggle("mirror", mode === "face");
  try { await vid.play(); } catch (e) {}
  if (mode === "finger") { try { await track.applyConstraints({ advanced: [{ torch: true }] }); } catch (e) {} }
  return true;
}
function closeCam() { if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; track = null; } vid.srcObject = null; }
function noCam(e) {
  const n = e && e.name;
  $("noCamText").textContent = n === "NotAllowedError" || n === "SecurityError" ? "Camera access was not allowed. Allow the camera for this site in your browser settings, or see how it works in a short demo." : "No camera is available on this device. See how it works in a short demo.";
  show("vNoCam"); msg("");
}

function grab() {
  const W = 64, H = 48; work.width = W; work.height = H;
  wctx.drawImage(vid, 0, 0, W, H);
  const d = wctx.getImageData(0, 0, W, H).data;
  let r = 0, g = 0, b = 0, n = 0, tot = 0, lum = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4, R = d[i], G = d[i + 1], B = d[i + 2]; lum += .299 * R + .587 * G + .114 * B;
    if (mode === "face") {
      const ex = (x / W - .5) / .26, ey = (y / H - .47) / .36; if (ex * ex + ey * ey > 1) continue; tot++;
      const Y = .299 * R + .587 * G + .114 * B, Cb = 128 - .1687 * R - .3313 * G + .5 * B, Cr = 128 + .5 * R - .4187 * G - .0813 * B;
      if (Cr < 135 || Cr > 175 || Cb < 80 || Cb > 130 || Y < 40) continue;
    } else tot++;
    r += R; g += G; b += B; n++;
  }
  return { n, frac: tot ? n / tot : 0, lum: lum / (W * H), r: n ? r / n : 0, g: n ? g / n : 0, b: n ? b / n : 0 };
}

function uniform(s, fs) {
  const t0 = s[0].t, t1 = s[s.length - 1].t, N = Math.floor((t1 - t0) * fs), out = { r: [], g: [], b: [] }; let j = 0;
  for (let k = 0; k < N; k++) { const t = t0 + k / fs; while (j < s.length - 2 && s[j + 1].t < t) j++; const a = s[j], c = s[j + 1], f = c.t > a.t ? (t - a.t) / (c.t - a.t) : 0; out.r.push(a.r + (c.r - a.r) * f); out.g.push(a.g + (c.g - a.g) * f); out.b.push(a.b + (c.b - a.b) * f); }
  return out;
}
function pos(u, fs) {
  const N = u.r.length, L = Math.round(1.6 * fs), h = new Array(N).fill(0);
  const sd = a => { const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / a.length) || 1e-9; };
  for (let n = 0; n + L <= N; n++) {
    let mr = 0, mg = 0, mb = 0; for (let k = n; k < n + L; k++) { mr += u.r[k]; mg += u.g[k]; mb += u.b[k]; } mr /= L; mg /= L; mb /= L;
    const s1 = [], s2 = []; for (let k = n; k < n + L; k++) { const R = u.r[k] / mr, G = u.g[k] / mg, B = u.b[k] / mb; s1.push(G - B); s2.push(G + B - 2 * R); }
    const al = sd(s1) / sd(s2); const hh = s1.map((v, i) => v + al * s2[i]); const m = hh.reduce((x, y) => x + y, 0) / L;
    for (let k = 0; k < L; k++) h[n + k] += hh[k] - m;
  }
  return h;
}
function detrend(x, fs) { const w = Math.round(fs), o = []; for (let i = 0; i < x.length; i++) { let s = 0, c = 0; for (let k = Math.max(0, i - w); k <= Math.min(x.length - 1, i + w); k++) { s += x[k]; c++; } o.push(x[i] - s / c); } return o; }
function smooth(x, k) { const o = []; for (let i = 0; i < x.length; i++) { let s = 0, c = 0; for (let j = Math.max(0, i - k); j <= Math.min(x.length - 1, i + k); j++) { s += x[j]; c++; } o.push(s / c); } return o; }
function spectrum(x, fs) {
  const N = x.length, out = [];
  for (let bpm = 45; bpm <= 180; bpm += .5) { const f = bpm / 60; let re = 0, im = 0; for (let n = 0; n < N; n++) { const w = .5 - .5 * Math.cos(2 * Math.PI * n / (N - 1)), a = 2 * Math.PI * f * n / fs; re += x[n] * w * Math.cos(a); im -= x[n] * w * Math.sin(a); } out.push(re * re + im * im); }
  return out;
}
function estimate(s, useAll) {
  const fs = 30; if (s.length < 30) return null;
  const u = uniform(s, fs); if (u.r.length < fs * 6) return null;
  let sig = mode === "face" && !demo ? pos(u, fs) : (mode === "face" ? pos(u, fs) : u.r.map((v, i) => -(v * .7 + u.g[i] * .3)));
  sig = smooth(detrend(sig, fs), 1);
  const seg = fs * 8, spec = new Array(271).fill(0); let cnt = 0;
  const start = useAll ? 0 : Math.max(0, sig.length - fs * 12);
  for (let a = start; a + seg <= sig.length; a += fs) { const sp = spectrum(sig.slice(a, a + seg), fs); const tot = sp.reduce((x, y) => x + y, 0) || 1; sp.forEach((v, i) => spec[i] += v / tot); cnt++; }
  if (!cnt) return null;
  let bi = 0; spec.forEach((v, i) => { if (v > spec[bi]) bi = i; });
  let band = 0, tot = 0; spec.forEach((v, i) => { tot += v; if (Math.abs(i - bi) <= 6) band += v; });
  const y0 = spec[bi - 1] || spec[bi], y1 = spec[bi], y2 = spec[bi + 1] || spec[bi], dl = (y0 - y2) / (2 * (y0 - 2 * y1 + y2) || 1);
  return { bpm: 45 + (bi + (isFinite(dl) ? Math.max(-.5, Math.min(.5, dl)) : 0)) * .5, q: band / tot, wave: sig.slice(-fs * 5) };
}

function drawWave(w) {
  const c = $("wave"), dpr = window.devicePixelRatio || 1, W = c.clientWidth, H = c.clientHeight; if (!W) return; c.width = W * dpr; c.height = H * dpr;
  const x = c.getContext("2d"); x.scale(dpr, dpr); x.clearRect(0, 0, W, H);
  x.strokeStyle = "#DCD4C4"; x.lineWidth = 1; x.beginPath(); x.moveTo(0, H / 2); x.lineTo(W, H / 2); x.stroke();
  if (!w || w.length < 2) return; let m = 0; w.forEach(v => m = Math.max(m, Math.abs(v))); m = m || 1;
  const g = x.createLinearGradient(0, 0, W, 0); g.addColorStop(0, "rgba(184,150,79,0)"); g.addColorStop(.25, "#C9A15A"); g.addColorStop(1, "#A47A38");
  x.strokeStyle = g; x.lineWidth = 1.8; x.lineJoin = "round"; x.beginPath();
  w.forEach((v, i) => { const px = i / (w.length - 1) * W, py = H / 2 - v / m * H * .4; i ? x.lineTo(px, py) : x.moveTo(px, py); }); x.stroke();
}

function measure(which) {
  return new Promise(async done => {
    msg("Opening the camera…");
    if (!demo) { const ok = await openCam(); if (!ok) return; }
    running = true; samples = [];
    $("wc").hidden = !demo; vid.hidden = demo; $("oval").hidden = demo || mode !== "face"; $("breath").hidden = true;
    $("readout").hidden = false; $("bpmLive").textContent = "-- bpm"; $("wave").hidden = false;
    VIEWS.forEach(x => $(x).hidden = true); $("back").hidden = true;
    const t0 = performance.now() / 1000; let lastEst = 0, badLight = 0, noFace = 0;
    const finish = () => {
      const e = estimate(samples, true);
      if (!demo) closeCam();
      vid.hidden = true; $("oval").hidden = true; $("wc").hidden = false; $("back").hidden = false;
      if (!e || e.q < .1) { msg("The signal was too faint to read. Try more light and keep very still.", true); $("readout").hidden = true; done(null); return; }
      const bpm = Math.round(e.bpm); $("bpmLive").textContent = bpm + " bpm"; msg(""); done(bpm);
    };
    const tick = () => {
      if (!running) return;
      const t = performance.now() / 1000 - t0;
      if (demo) { const hr = which === 1 ? 74 : 66, ph = 2 * Math.PI * hr / 60 * t; const v = Math.sin(ph) + .35 * Math.sin(2 * ph + .6) + .25 * (Math.random() - .5); samples.push({ t, r: 120 + v * .5, g: 100 + v, b: 90 + v * .3 }); }
      else if (vid.readyState >= 2) {
        const s = grab();
        if (s.lum < 45) badLight++; else badLight = Math.max(0, badLight - 1);
        if (mode === "face" && s.frac < .25) noFace++; else noFace = Math.max(0, noFace - 1);
        if (t > WARM && s.n > 20) samples.push({ t, r: s.r, g: s.g, b: s.b });
      }
      setProg(Math.max(0, (t - WARM) / MEAS));
      if (badLight > 20) msg("A little more light, please. Face a window or a lamp.", true);
      else if (noFace > 20) msg("Bring your face into the oval and hold still.", true);
      else if (t < WARM) msg("Hold still…");
      else msg(t < WARM + 6 ? "Reading your pulse. Breathe normally." : "Nearly there. Stay still.");
      if (t - lastEst > .5 && t > WARM + 7) { lastEst = t; const e = estimate(samples, false); if (e) { drawWave(e.wave); $("bpmLive").textContent = e.q > .12 ? Math.round(e.bpm) + " bpm" : "-- bpm"; } }
      if (t >= WARM + MEAS) { running = false; finish(); return; }
      if (vid.requestVideoFrameCallback && !demo) vid.requestVideoFrameCallback(tick); else requestAnimationFrame(tick);
    };
    tick();
  });
}

function fillPauseCard() { $("pcK").textContent = "Your two-minute pause"; $("pcT").textContent = P.t; $("startPause").textContent = "Begin · 2 min"; }
async function first() {
  step(1); const b = await measure(1);
  if (b === null && !$("vNoCam").hidden) return;
  if (b === null) { show("vStart"); return; }
  res.b1 = b; $("b1").innerHTML = b + "<small> bpm</small>"; $("lede").textContent = "Your pulse before the pause. Now, the pause.";
  fillPauseCard(); show("vMid");
}
$("go").onclick = first;
$("retry").onclick = () => { show("vStart"); msg(""); };
$("demo").onclick = () => { demo = true; first(); };
$("startPause").onclick = () => runPause();

let pTimer = null;
function runPause() {
  step(2); show("vPause"); msg(""); $("readout").hidden = true; $("wave").hidden = true; setProg(0);
  $("pT").textContent = P.t;
  const breath = true, total = demo ? 20 : Math.max(60, P.sec), t0 = performance.now();
  $("wc").hidden = breath; $("breath").hidden = !breath; $("cue").hidden = !breath;
  $("pSteps").innerHTML = ""; $("pSteps").hidden = breath;
  if (!breath) P.steps.forEach(s => { const li = document.createElement("li"); li.textContent = s; $("pSteps").appendChild(li); });
  const seq = [["Breathe in", 2, .85], ["A little more", 1, 1], ["And let it all go", 6, .55]]; let i = 0, until = 0;
  const loop = () => {
    const t = (performance.now() - t0) / 1000;
    if (breath && t >= until) { const s = seq[i % 3]; $("cue").textContent = s[0]; $("orb").style.transitionDuration = s[1] + "s"; $("orb").style.transform = `scale(${s[2] * 2})`; until = t + s[1]; i++; }
    if (!breath) { const n = P.steps.length, cur = Math.min(n - 1, Math.floor(t / (total / n))); [...$("pSteps").children].forEach((li, j) => li.className = j === cur ? "on" : ""); }
    const left = Math.max(0, Math.ceil(total - t)); $("ptime").textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"); setProg(t / total);
    if (t >= total) { endPause(); return; } pTimer = requestAnimationFrame(loop);
  };
  loop();
}
function endPause() { cancelAnimationFrame(pTimer); $("breath").hidden = true; $("wc").hidden = false; setProg(1); step(3); show("vReady2"); }
$("skip").onclick = endPause;
$("go2").onclick = async () => { const b = await measure(2); if (b === null) { if ($("vNoCam").hidden) show("vReady2"); return; } res.b2 = b; result(); };

function result() {
  const a = res.b1, b = res.b2, d = b - a;
  $("bRes").innerHTML = `${a} <span style="color:#B8964F">→</span> ${b}<small> bpm</small>`;
  $("lede").textContent = "Before and after your pause.";
  $("resWhy").textContent = d <= -2 ? `Your pulse slowed by ${-d} beats a minute. That's your body settling.` : d < 2 ? "Your pulse held steady. Calm doesn't always show as a lower number, and it still counts." : "Your pulse rose a little. That happens, deep breaths can lift it for a moment. Sit quietly for a minute and measure again.";
  $("readout").hidden = true; $("wave").hidden = true; $("dial").hidden = true; $("steps").hidden = true; show("vResult"); msg("");
  makeCard(a, b);
}
function lines(x, t, maxW) { const w = t.split(" "); let line = "", out = []; w.forEach(s => { const tr = line ? line + " " + s : s; if (x.measureText(tr).width > maxW && line) { out.push(line); line = s; } else line = tr; }); out.push(line); return out; }
let cardBlob = null;
function makeCard(a, b) {
  const c = document.createElement("canvas"), W = 1080, H = 1350; c.width = W; c.height = H; const x = c.getContext("2d");
  const go = () => {
    x.fillStyle = "#34362A"; x.fillRect(0, 0, W, H);
    x.save(); x.beginPath(); x.arc(W / 2, 470, 300, 0, Math.PI * 2); x.fillStyle = "#FBF9F4"; x.fill(); x.clip(); try { x.drawImage($("wc"), W / 2 - 270, 200, 540, 540); } catch (e) {} x.restore();
    const g = x.createLinearGradient(W / 2 - 340, 130, W / 2 + 340, 810); g.addColorStop(0, "#F6E7BC"); g.addColorStop(.42, "#C9A15A"); g.addColorStop(.68, "#ECD79F"); g.addColorStop(1, "#A47A38");
    x.strokeStyle = g; x.lineWidth = 5; x.beginPath(); x.arc(W / 2, 470, 330, 0, Math.PI * 2); x.stroke();
    x.lineWidth = 1.5; for (let i = 0; i < 60; i++) { const t = i / 60 * Math.PI * 2, r1 = 318, r2 = r1 - (i % 5 ? 10 : 22); x.beginPath(); x.moveTo(W / 2 + r1 * Math.sin(t), 470 - r1 * Math.cos(t)); x.lineTo(W / 2 + r2 * Math.sin(t), 470 - r2 * Math.cos(t)); x.stroke(); }
    x.textAlign = "center"; x.fillStyle = "#D2B57A"; x.font = '400 30px "Jost"'; x.fillText("THE DAILY PAUSE", W / 2, 92);
    x.fillStyle = "#F4EFE5"; x.font = '500 150px "EB Garamond"'; x.fillText(`${a}`, W / 2 - 200, 980); x.fillText(`${b}`, W / 2 + 200, 980);
    x.fillStyle = g; x.font = '400 110px "EB Garamond"'; x.fillText("→", W / 2, 972);
    x.fillStyle = "#C9C4B2"; x.font = '300 34px "Jost"'; x.fillText("beats per minute, before and after", W / 2, 1046);
    let fs = 44, L; do { x.font = `italic 400 ${fs}px "EB Garamond"`; L = lines(x, "“" + P.t + "”", 860); fs -= 2; } while (L.length > 2 && fs > 30);
    x.fillStyle = "#F4EFE5"; L.slice(0, 3).forEach((l, i) => x.fillText(l, W / 2, 1126 + i * (fs + 10)));
    x.fillStyle = "#D2B57A"; x.font = '300 30px "Jost"'; x.fillText("pause-to-play.com", W / 2, 1290);
    x.fillStyle = "rgba(201,196,178,.7)"; x.font = '300 22px "Jost"'; x.fillText("Indicative camera reading, not medical", W / 2, 1326);
    try { c.toBlob(bl => { if (!bl) return; cardBlob = bl; const u = URL.createObjectURL(bl); $("cardImg").src = u; $("save").href = u; }, "image/png"); } catch (e) { $("cardImg").hidden = true; }
  };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go);
}
$("share").onclick = async () => {
  if (!cardBlob) return; const f = new File([cardBlob], "my-pause.png", { type: "image/png" });
  try { if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: "My pause", text: "One small pause a day. pause-to-play.com" }); return; } } catch (e) { if (e.name === "AbortError") return; }
  msg("Sharing isn't available here. Use Save image instead.");
};
$("again").onclick = () => { res = { b1: null, b2: null }; demo = false; $("dial").hidden = false; $("steps").hidden = false; step(0); setProg(0); $("lede").textContent = LEDE0; show("vStart"); msg(""); };

window.addEventListener("pagehide", closeCam);
document.addEventListener("visibilitychange", () => { if (document.hidden && running) { running = false; closeCam(); vid.hidden = true; $("oval").hidden = true; $("wc").hidden = false; $("back").hidden = false; msg("Paused because you left the page. Tap to measure again.", true); show(res.b1 ? "vReady2" : "vStart"); } });
host._ptpStop = () => { running = false; closeCam(); };
show("vStart");
}

class MeasureMyPause extends HTMLElement {
  connectedCallback() {
    if (this._ptp) return; this._ptp = true;
    if (!document.getElementById("ptp-fonts")) {
      const l = document.createElement("link"); l.id = "ptp-fonts"; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap";
      document.head.appendChild(l);
    }
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + PTP_CSS + "</style>" + PTP_HTML;
    try { ptpInit(root, this); } catch (e) { console.error("measure-my-pause", e); }
  }
  disconnectedCallback() { if (this._ptpStop) this._ptpStop(); }
}
if (!customElements.get("measure-my-pause")) customElements.define("measure-my-pause", MeasureMyPause);
