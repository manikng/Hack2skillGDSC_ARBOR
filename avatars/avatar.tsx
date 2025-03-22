
export  const ALlavatars = [
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461687/cfp4yhebawrlj7uxpdwa.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742460787/atapproktqwr1frkkf2z.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461396/u0kxydawgchdsq2wftyq.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461697/e6dxra35e9ojtkbalgmg.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461700/f8uov7szcxxi0pxcn5js.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461696/e89xiekpzzksewlwqcy9.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461475/cr7hlx9zkwkkqelr70pb.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461367/psq2fkyqi50gzf2ceymr.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461676/y85ewjienxig7nru4dbz.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461381/xql8rfywxro1vpdhbsyb.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461419/pkvktcihiu2hlwzhiv9p.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742460813/ixpttd0ot3krfdntnqjt.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461408/xadttflekowur7wl3wzi.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461347/ecmpxh6oxjvra0lr5sse.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461357/ltihragknlxwbxjhlnio.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461697/vlasi2ubzvybpb19nt3u.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461698/pjycishx5xtmmosakazf.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461236/i7blgrzqh1vnwmhltjxd.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461599/gq8x9et2d6lxultkaavv.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461128/x6kr1golj4dfzycglwsa.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461554/ifwnkigstnfx5vwdu8la.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461338/oqfpsdfgj7qpc1hba4hn.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461701/trofkj2k4ptbi12un1t9.jpg',
    'https://res.cloudinary.com/dkxicfpye/image/upload/v1742461459/hfxqm0dae03rbjf1qubj.jpg'
]

// export function RandomAvatar() {
//     const randomIndex = Math.floor(Math.random() * ALlavatars.length);
//     console.log("rand idx is: ",randomIndex);
    
//     return ALlavatars[randomIndex];
// }

// export function RandomAvatar() {
//     // Generate a random index using crypto.getRandomValues
//     const randomIndex = getRandomInt(ALlavatars.length); // Use the helper function

//     console.log("rand idx is: ", randomIndex);

//     return ALlavatars[randomIndex];
// }

// Helper function to generate a random integer within a range
// function getRandomInt(max: number): number {
//     const array = new Uint32Array(1); // Create a typed array to hold a single random number
//     if (typeof window !== 'undefined' && window.crypto) {
//         window.crypto.getRandomValues(array); // Fill the array with a random unsigned 32-bit integer
//     } else {
//         throw new Error('Crypto API not available');
//     }
//     const randomNumber = array[0]; // Extract the random number
//     const scaledRandom = Math.floor((randomNumber / 0xFFFFFFFF) * max); // Scale the number to fit within the desired range (0 to max-1)
//     return scaledRandom;
// }
