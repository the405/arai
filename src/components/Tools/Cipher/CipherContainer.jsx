import React, { useState } from 'react';
import { Cipher } from './Cipher';
import './Cipher.scss';

const CipherContainer = () => {
  const [values, setValues] = useState({ key: '', text: '' });

  const handleClick = (decrypt) => {
    cipherText(decrypt);
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const cipherText = (decrypt) => {
    const keyArr = values.key.split('');
    const textArr = values.text.split('');
    let counter = 0;
    let c, k;

    const result = textArr.map(char => {
      c = char.charCodeAt();
      k = parseInt(keyArr[counter], 10);
      if (decrypt) {
        // Decryption
        switch (true) {
          case c === 32: // space added as it, counter reset
            counter = -1; // so that counter is incremented to 0 upon next iteration
            char = String.fromCharCode(c);
            break;
          case c >= 65 && c <= 90:
            if (c - k < 65) {
              char = String.fromCharCode(91 - (65 - (c - k)));
            } else {
              char = String.fromCharCode(c - k);
            }
            break;
          case c >= 97 && c <= 122:
            if (c - k < 97) {
              char = String.fromCharCode(123 - (97 - (c - k)));
            } else {
              char = String.fromCharCode(c - k);
            }
            break;
          default: // basic rotator
            char = String.fromCharCode(c);
            break;
        }
      } else {
        // Encryption
        switch (true) {
          case c === 32: // space added as it, counter reset
            counter = -1; // so that counter is incremented to 0 upon next iteration
            char = String.fromCharCode(c);
            break;
          case c < 65 || c > 122: // add other chars as is
            char = String.fromCharCode(c);
            break;
          case c > 90 && c < 97:
            char = String.fromCharCode(c);
            break;
          case c >= 97 && (c + k) > 122: // lowercase wraparound
            char = String.fromCharCode(96 + c + k - 122);
            break;
          case c <= 90 && (c + k) > 90: // uppercase wraparound
            char = String.fromCharCode(64 + c + k - 90);
            break;
          default: // basic rotator
            char = String.fromCharCode(c + k);
            break;
        }
      }

      counter += 1;
      if (counter === keyArr.length) {
        counter = 0;
      }

      return char;
    });
    setValues({ ...values, text: result.join('') })
  }

  return (
    <Cipher
      handleClick={handleClick}
      handleChange={handleChange}
      keyValue={values.key}
      textValue={values.text}
    />
  );
}

export { CipherContainer };
