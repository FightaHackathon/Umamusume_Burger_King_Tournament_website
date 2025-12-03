import type { Team, Host, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', path: '#/' },
    { name: 'Teams', path: '#/teams' },
    { name: 'Schedule', path: '#/schedule' },
    { name: 'Race Course', path: '#/race-course' },
    { name: 'Videos', path: '#/videos' },
    { name: 'Newsletter', path: '#/newsletter' },
    { name: 'Contact', path: '#/contact' },
];

export const MOCK_TEAMS: Team[] = [
    {
        id: 1,
        name: 'Team Leftovers', 
        logoUrl: '/images/leftovers_logo.jpg', // Ensure file is strictly lowercase on disk
        description: 'Save the best for the last!',
        members: [
            { 
                name: 'Shubaru', 
                role: 'Captain', 
                avatarUrl: 'https://gametora.com/images/umamusume/characters/chara_stand_1004_100401.png', 
                bio: `About me: Born in New Zealand but with Scottish Parents, I started to get into VRC not too long before finding the Umamusume BK World. Since then I have been a usual member in the group and have been given the opportunity to lead team Leftovers.
                 
                Likes:
 Umamusume
 Cars
 Esports
 Baseball

Dislikes:
 Maths
 Being Bored
 Team Guinea Pigs

Hobbies:
 Gaming
 Baseball
 Sleeping
 Music
 
 Specialty: Performance Coaching/Training`
            },
            { 
                name: 'Artipog', 
                role: 'Vice Captain', 
                avatarUrl: 'https://gametora.com/images/umamusume/characters/chara_stand_1002_100201.png', 
                bio: `About me: I love coding, VRCHAT, Umamusume pretty derby and the maker of this website.

Likes:
- Coding & Artificial Intelligence
- Gaming & VRCHAT
- Studying, Reading & Mangas
- Music

Dislikes:
- Insults
- People who don't pay attention

Hobbies:
- Gaming
- Coding
- Studying

Specialty: Maths, Creativity, and other stuff`
            },
            { 
                name: 'kamxdizzle', 
                role: 'Ace', 
                avatarUrl: 'https://gametora.com/images/umamusume/characters/chara_stand_1015_101501.png', 
                bio: `About me: The best umammusame character is   TM Opera O I’m also the fastest uma to horse kind I’m American 🇺🇸 and love anime

Likes:
- racing
- games
- hunting
- guns
- movies
- winning
- anime

Dislikes:
- spicy foods
- school
- homework
- math
- losing

Hobbies:
- gaming
- shooting guns
- swimming
- hunting
- watching anime` 
            },
            { 
                name: 'Luna/El condor', 
                role: 'Runner', 
                avatarUrl: 'https://gametora.com/images/umamusume/characters/chara_stand_1014_101401.png', 
                bio: `About me: My fav character going into the umammusame fandom was rice shower and El Condor pasa. I suck at math, And I'm Mexican/American, I'm also a multi fandomer 👍 That's all ✌️

Likes:
- Gaming, Horror games, Movies, Anime, Shows
- Sweets, Editing, Adventuring
- Singing, Music, Reading
- Chilling with Friends

Dislikes:
- Math, History, Biology
- Bullies, Sadness
- Sour Candy, The Heat

Hobbies:
- Gaming
- Reading
- Sleeping
- Singing
- Listening to Music
- Editing

Specialty: Social Skills, Creative`
            },
            { 
                name: 'Paco', 
                role: 'Runner', 
                avatarUrl: '/images/paco.png', 
                bio: `About me: Brings consistent speed and unwavering determination to the track.

Likes:
- Long runs
- Team strategy
- Healthy competition

Dislikes:
- False starts
- Unsportsmanlike conduct

Hobbies:
- Endurance training
- Watching classic races

Specialty: Consistency, Determination` 
            },
            { 
                name: 'Mickey1107', 
                role: 'Trainer', 
                avatarUrl: 'https://gametora.com/images/umamusume/characters/chara_stand_1008_100801.png', 
                bio: `About me: I'm 17 My birthday is November 13th so I'll be 18 by the time this goes on the website. I'm from New York, I'm Orthodox and I absolutely love sleeping with a thin fuzzy blanket in an ice cold room with a sleep mask on and melatonin. I also love going to horse tracks and feeding horses peppermints and learning their cute names.

Likes:
- Horse betting & cuddling
- Guns
- Pirogi
- Beer & Jagermeister
- Tokai Teio & Vodka (the Uma)

Dislikes:
- Small talk
- Whisky
- People who hate team leftovers

Hobbies:
- Shooting guns
- Playing games
- Horse betting
- Metal music

Specialty: Eating at sushi buffets`
            },
            {
                name: 'Chocominty',
                role: 'Runner',
                avatarUrl: '/images/chocom.png',
                bio: `I like- Gaming, Composing Music, Talking with friends and new people, Singing, Music, and most of all: sleeping!

I dislike- Loud noises, Tension, Bullies, Spicy food and the Cold

Hobbies- Making Unity projects, Composing music, Gaming, Singing and being Social!

Specialty- Social Butterfly and helping make a chaotic environment a bit more chill.

About me- I’m a long time VR Chat player who’s been around since 2019! I found the Uma BK group recently and it’s been the most fun I’ve had in years on the platform! I’m usually laid back, relaxed or sleeping though I’m always open to chat with anyone! Let’s all fish sometime, yeah?`
            },
            {
                name: 'Marz',
                role: 'Runner',
                avatarUrl: '/images/marz.png',
                bio: `Likes: Animation, Art, Genshin Impact, Murder Drones, The Owl House, Sly Cooper, Plushies, Human Made Things
Dislikes: Politics, Grape-Flavored Foods, Live Action Movies, AI
Hobbies: Art/Drawing, Singing, Gaming, Avatar Making (sometimes)
Specialty: Being a professional gremlin
About me: A silly non-binary person who loves to hang out with people. I draw and make art under the name "YouSeaMarz" (taking commissions too), wanting to make my own show one day. I found Umamusume from Stirfry and he bugged me to play. Now I play the game when I work out at the gym and maining a screaming orange uma.`
            }
        ],
    },
    {
        id: 2,
        name: 'Team Fanboy_69',
        logoUrl: '/images/fanboy_69_logo.jpg',
        description: 'Make everybody happy',
        members: [
            {
                name: 'Depression',
                role: 'Captain',
                avatarUrl: 'https://picsum.photos/seed/Depression/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Flamy_Jamie21xx',
                role: 'Runner',
                avatarUrl: '/images/jamie.png',
                bio: `Likes
Food,making ocs,Men,a bunch more 
Dislikes
Spiders,mean people
About me:
I been a Uma fan for a while and I enjoy doing stuff the team I’m in seems pretty cool`
            },
            {
                name: 'MikMunkus',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/MikMunkus/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Zoro',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Zoro/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Mysterious',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Mysterious/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Flash',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Flash/100',
                bio: `Likes:

Dislikes:

About me:
`
            }
        ],
    },
    {
        id: 3,
        name: 'Team Hierarchs',
        logoUrl: '/images/hierarchs_logo.jpg',
        description: 'Surpass the limits, uphold the legacy.',
        members: [
            { 
                name: '°KASSETTO°', 
                role: 'Captain', 
                avatarUrl: '/images/kase.png', 
                bio: `Likes:
Racing, Fun Games, Helping Others, Eating, creating 
Dislikes:
Annoyance, Constant nagging, Spiders, Bugs, Cheaters, Liars
About me:
I just enjoy the wind blowing in my face and hair as I run wild. I try to do the best I can even in a competition or fun event. Even if I get overwhelmed easily and stressed and worried about little things, I try to keep up a smile and push on through it. I believe me and my team will do great as long as they work hard and believe in themselves.`
            },
            {
                name: 'DollyofChrist',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/DollyofChrist/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Fizzy',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Fizzy/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Gosfwbwy',
                role: 'Trainer',
                avatarUrl: 'https://picsum.photos/seed/Gosfwbwy/100',
                bio: `Likes:

Dislikes:

About me:
`
            }
        ],
    },
    {
        id: 4,
        name: 'Crimson Seraphs',
        logoUrl: '/images/crimson_seraphs_logo.jpg', // FIXED: removed 'public'
        description: 'Wings of crmison, hearts of fire.',
        members: [
            { 
                name: 'Noc Okythoe', 
                role: 'Captain', 
                avatarUrl: '/images/noc.jpg', 
                bio: `Likes:
Music, Singing, Anime, Gaming, Cars, Bananas, Family, Umamusume.
Dislikes:
Those who are disrespectful
About me:
I'm a chill laidback person who doesn't give up on achieving their goal.`
            },
            {
                name: 'Cujo',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Cujo/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Thatcoolasian',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Thatcoolasian/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'VertCPU',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/VertCPU/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'nuttercup',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/nuttercup/100',
                bio: `Likes:

Dislikes:

About me:
`
            }
        ],
    },
    {
        id: 5,
        name: 'Team Guinea Pigs',
        logoUrl: '/images/theguinea_pigs_logo.jpg', // FIXED: removed 'public'
        description: 'Glory,experiment, win where racing is an experiment.',
        members: [
            {
                name: 'SmokedThunder',
                role: 'Captain',
                avatarUrl: 'https://picsum.photos/seed/SmokedThunder/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            { 
                name: 'XStealth', 
                role: 'Vice Captain', 
                avatarUrl: '/images/stealth.png', // FIXED: removed 'public'
                bio: `Likes:
Aviation, racing, photography, graphic design, soccer, basketball, anime
Dislikes:
Annoying people, egotistical people, The Leftovers, Hachiro........?
About me:
Other than being a graphic designer and race Steward, glad to be apart of a great team along good friends of mine. Couldn't be anymore glad to be in this community along with them.`
            },
            {
                name: 'MajorMuffin',
                role: 'Runner',
                avatarUrl: '/images/muffin.png', // FIXED: removed 'public'
                bio: `Likes
American Football
baseball
Umamusme
Horse racing
Asian foods
Sour foods
Candy
Horses
Women
ORANGE CHICKEN RAAAAHHHHH
Dislikes
Problem people
Extra spicy food
Chestnut Horses
Cringe wanna Be's
Cricket
Cringe City Boys
Summary about you. About me:
Im muffin i don't tend to talk about myself much unless asked so feel free to talk to me about stuff and ill Glady answer any of your questions.`
            },
            {
                name: 'ItsPoorboy',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/ItsPoorboy/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Ryuku',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Ryuku/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'TBAWHAT',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/TBAWHAT/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'RoobyThePiga',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/RoobyThePiga/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'LittlePizzaBox',
                role: 'Trainer',
                avatarUrl: 'https://picsum.photos/seed/LittlePizzaBox/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'CairoIG',
                role: 'Manager',
                avatarUrl: 'https://picsum.photos/seed/CairoIG/100',
                bio: `Likes:

Dislikes:

About me:
`
            }
        ],
    },
    {
        id: 6,
        name: 'Team Gluttony',
        logoUrl: '/images/team_gluttony_logo.jpg', // FIXED: removed 'public'
        description: 'We eat the competitors.',
        members: [
            { 
                name: 'Hachiro', 
                role: 'Captain', 
                avatarUrl: '/images/hachiro.png', // FIXED: removed 'public'
                bio: `About me:

I'm easy going and like eating. I have no negative outlook on any of the teams, but I do hope the Leftovers are doing well.

Likes

Friends, games, food, fun, freedom

Dislikes

Annoyances, cocky and egotistical people, olives on their own`
            },
            {
                name: 'FrostedTyl3r',
                role: 'Runner',
                avatarUrl: '/images/tyler.png', // FIXED: removed 'public'
                bio: `Likes:
Food (Yuri) taking pictures of everything.
Dislikes:
People being rude to one another.
About me:
well I am fun to play with and I scream a lot😋🤕`
            },
            {
                name: 'Vegan_enemy',
                role: 'Runner',
                avatarUrl: '/images/vegan.png', // FIXED: removed 'public'
                bio: `Likes
Mashed potatoes, farming games, and junk journaling
Dislikes
Artificial strawberry flavor snacks 
About me:
I’m here to have fun!`
            },

            {
                name: 'BDBonnie',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/BDBonnie/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Haru22796',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Haru22796/100',
                bio: `Likes:

Dislikes:

About me:
`
            },
            {
                name: 'Yourlocalroach',
                role: 'Runner',
                avatarUrl: 'https://picsum.photos/seed/Yourlocalroach/100',
                bio: `Likes:

Dislikes:

About me:
`
            }
        ],
    }
];

export const MOCK_HOSTS: Host[] = [
    {
        name: 'Stirfry',
        role: 'Owner/Race Director',
        bio: 'More information coming soon!',
        imageUrl: 'https://www-animeherald-com.exactdn.com/wp-content/uploads/2025/05/Cinderella-Gray-Header.jpeg?strip=all'
    },
    {
        name: 'Stealth',
        role: 'Announcer/Steward',
        bio: 'Race Steward and League announcer. Part of Team Guinea Pigs and glad to be apart of the community and team.',
        imageUrl: '/images/stealth_main.jpg' // FIXED: removed 'public'
    },
    {
        name: 'Cairo',
        role: 'Media',
        bio: 'More information coming soon!',
        imageUrl: 'https://picsum.photos/seed/cairo/300'
    },
    {
        name: 'Kaitlynd',
        role: 'Steward',
        bio: 'More information coming soon!',
        imageUrl: 'https://picsum.photos/seed/kaitlynd/300'
    }
];
