const descriptionData = {
  title: "Gronsfeld",
  colorMe: "Cipher",
  desc: "A modified Gronsfeld cipher tool. Works otherwise exactly like a Vigenère cipher, but accepts only numbers as its key, resets the key counter with every word (space), wraps letters around (z wraps around to a and vice versa) and leaves non-alphabetic characters intact. Also works as a Caesar cipher when given a single digit key.",
  resources: {
    title: "More reading:",
    links: [
      {
        linkUrl: "https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher",
        linkText: "Vigenère cipher",
        key: 1
      },
      {
        linkUrl: "https://en.wikipedia.org/wiki/Caesar_cipher",
        linkText: "Caesar cipher",
        key: 2
      }
    ]
  }
};

export { descriptionData };
