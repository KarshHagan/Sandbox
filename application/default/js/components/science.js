
import _ from 'lodash';
import voca from 'voca';

export const doScience = (descriptors) => {

  var candidates = [];

  descriptors.forEach((word) => {
    techniques.forEach((technique) => {
      const newWord = technique.do(word);
      if (typeof newWord === 'string') console.log(newWord, technique.name);
      candidates.push(newWord);
    });
  });

  candidates = _.shuffle(_.uniq(_.flatten(candidates)));

  return candidates;
};

// TODO: get from database
const techniques = [
  {
    name: '1.3.1',
    do: (word) => {
      if (voca.includes(word, 'i')) {
        return voca.replace(word, 'i', 'e');
      }
      return [];
    }
  },
  {
    name: '1.3.2',
    do: (word) => {
      if (voca.includes(word, 'e')) {
        return voca.replace(word, 'e', 'i');
      }
      return [];
    }
  },
  {
    name: '3.1',
    do: (word) => {
      if (voca.endsWith(word, 'c')) {
        return voca.slice(word, 0, word.length - 1) + 'kk';
      }
      return [];
    }
  },
  {
    name: '3.2',
    do: (word) => {
      if (voca.endsWith(word, 'er')) {
        return voca.slice(word, 0, word.length - 2) + 'r';
      }
      else if (voca.endsWith(word, 'or')) {
        return voca.slice(word, 0, word.length - 2) + 'r';
      }
      return [];
    }
  },
  {
    name: '3.3',
    do: (word) => {
      if (voca.endsWith(word, 'y')) {
        return voca.slice(word, 0, word.length - 1) + 'ee';
      }
      return [];
    }
  },
  {
    name: '3.4',
    do: (word) => {
      if (voca.includes(word, 'ea')) {
        return voca.replace(word, 'ea', 'ee');
      }
      return [];
    }
  },
  {
    name: '3.5-6',
    do: (word) => {
      if (voca.endsWith(word, 'e')) {
        return voca.slice(word, 0, word.length - 1);
      }
      return [];
    }
  },
  {
    name: '3.7',
    do: (word) => {
      if (voca.endsWith(word, 'let')) {
        return voca.slice(word, 0, word.length - 2) + 'a';
      }
      return [];
    }
  },
  {
    name: '3.8',
    do: (word) => {
      if (voca.includes(word, 'ui')) {
        return voca.replace(word, 'ui', 'oo');
      }
      return [];
    }
  },
  {
    name: '3.9',
    do: (word) => {
      if (voca.startsWith(word, 'c')) {
        return 'k' + voca.slice(word, 1, word.length);
      }
      return [];
    }
  },
  {
    name: '3.10',
    do: (word) => {
      if (voca.includes(word, 'are')) {
        return voca.replace(word, 'are', 'R');
      }
      return [];
    }
  },
  {
    name: '3.11',
    do: (word) => {
      if (voca.endsWith(word, 'cs')) {
        return voca.slice(word, 0, word.length - 2) + 'x';
      }
      return [];
    }
  },
  {
    name: '3.12',
    do: (word) => {
      if (voca.endsWith(word, 'ing')) {
        return voca.slice(word, 0, word.length - 3) + 'in';
      }
      else if (voca.endsWith(word, 'en')) {
        return voca.slice(word, 0, word.length - 2) + 'in';
      }
      return [];
    }
  },
  {
    name: '3.13',
    do: (word) => {
      if (voca.endsWith(word, 'w')) {
        return voca.slice(word, 0, word.length - 1);
      }
      return [];
    }
  },
  {
    name: '3.14',
    do: (word) => {
      if (voca.endsWith(word, 'eph')) {
        return voca.slice(word, 0, word.length - 3);
      }
      return [];
    }
  },
  {
    name: '3.15',
    do: (word) => {
      if (voca.endsWith(word, 'ck')) {
        return voca.slice(word, 0, word.length - 2) + 'k';
      }
      return [];
    }
  },
  {
    name: '3.16',
    do: (word) => {
      if (voca.endsWith(word, 'se')) {
        return voca.slice(word, 0, word.length - 2) + 'z';
      }
      return [];
    }
  },
  {
    name: '3.17',
    do: (word) => {
      const letters = word.split('');
      const candidate = letters.filter((letter, index) => letter !== letters[index - 1]);
      if (candidate.length !== letters.length) return candidate.join('');
      return [];
    }
  },
  {
    name: '3.18',
    do: (word) => {
      if (voca.endsWith(word, 'en')) {
        return voca.slice(word, 0, word.length - 2);
      }
      return [];
    }
  },
  {
    name: '3.19',
    do: (word) => {
      if (!voca.endsWith(word, 'h') && !voca.startsWith(word, 'h') && voca.includes(word, 'h')) {
        return voca.replace(word, 'h', '');
      }
      return [];
    }
  },
  {
    name: '3.20',
    do: (word) => {
      if (!voca.endsWith(word, 'ia') && !voca.startsWith(word, 'ia') && voca.includes(word, 'ia')) {
        return voca.replace(word, 'ia', 'ya');
      }
      else if (!voca.endsWith(word, 'ai') && !voca.startsWith(word, 'ai') && voca.includes(word, 'ai')) {
        return voca.replace(word, 'ai', 'ay');
      }
      return [];
    }
  },
  {
    name: '3.21',
    do: (word) => {
      if (!voca.endsWith(word, 'ea') && !voca.startsWith(word, 'ea') && voca.includes(word, 'ea')) {
        return voca.replace(word, 'ea', 'haw');
      }
      return [];
    }
  },
  {
    name: '3.22',
    do: (word) => {
      if (!voca.endsWith(word, 'ph') && !voca.startsWith(word, 'ph') && voca.includes(word, 'ph')) {
        return voca.replace(word, 'ph', 'v');
      }
      return [];
    }
  },
  {
    name: '3.23',
    do: (word) => {
      if (!voca.endsWith(word, 'ae') && !voca.startsWith(word, 'ae') && voca.includes(word, 'ae')) {
        return voca.replace(word, 'ae', 'ea');
      }
      return [];
    }
  },
  {
    name: '3.24',
    do: (word) => {
      if (!voca.startsWith(word, 'l') && voca.includes(word, 'l') && !voca.includes(word, 'll')) {
        const index = voca.indexOf(word, 'l');
        return voca.insert(word, 'l', index);
      }
      return [];
    }
  },
  {
    name: '3.25',
    do: (word) => {
      if (!voca.endsWith(word, 'ea') && !voca.startsWith(word, 'ea') && voca.includes(word, 'ea')) {
        return voca.replace(word, 'ea', 'ei');
      }
      return [];
    }
  },
  {
    name: '3.26',
    do: (word) => {
      if (!voca.endsWith(word, 'is') && !voca.startsWith(word, 'is') && voca.includes(word, 'is')) {
        return voca.replace(word, 'is', 'iz');
      }
      return [];
    }
  },
  {
    name: '3.27',
    do: (word) => {
      if (voca.endsWith(word, 'nn')) {
        return word + 'e';
      }
      return [];
    }
  },
  {
    name: '3.28',
    do: (word) => {
      if (voca.includes(word, 'lin')) {
        return voca.replace(word, 'lin', 'lyn');
      }
      return [];
    }
  },
  {
    name: '3.29',
    do: (word) => {
      if (voca.endsWith(word, 'a')) {
        return word + 'h';
      }
      return [];
    }
  },
  {
    name: '3.30',
    do: (word) => {
      if (voca.includes(word, 'cy')) {
        return voca.replace(word, 'cy', 'sy');
      }
      return [];
    }
  },
  {
    name: '3.31',
    do: (word) => {
      if (voca.endsWith(word, 'k') && !voca.endsWith(word, 'ck')) {
        return voca.replace(word, 'k', 'c');
      }
      return [];
    }
  },
  {
    name: '3.32',
    do: (word) => {
      if (voca.startsWith(word, 'mc')) {
        return voca.replace(word, 'mc', 'mac');
      }
      return [];
    }
  },
  {
    name: '3.33',
    do: (word) => {
      if (voca.endsWith(word, 'on')) {
        return voca.replace(word, 'on', 'en');
      }
      return [];
    }
  },
  {
    name: '4.1',
    do: (word) => {
      if (!voca.startsWith(word, 'i')) {
        return 'i' + word;
      }
      return [];
    }
  },
  {
    name: '4.2',
    do: (word) => {
      const vowels = 'aeiou';
      const isVowel = vowels.indexOf(word.slice(0, 1)) >= 0 ? true : false;
      if (isVowel) {
        return word.slice(1);
      }
      return [];
    }
  },
  {
    name: '4.3',
    do: (word) => {
      const vowels = 'aeiou';
      const isVowel = vowels.indexOf(word.slice(word.length - 1)) >= 0 ? true : false;
      if (isVowel) {
        return word.slice(0, word.length - 1);
      }
      return [];
    }
  },
  {
    name: '4.4',
    do: (word) => {
      const letters = word.split('');
      const newWord = _.without(letters, 'a', 'e', 'i', 'o', 'u');
      if (letters.length !== newWord.length) return newWord.join('');
      return [];
    }
  },
  {
    name: '4.5',
    do: (word) => {
      if (!voca.endsWith(word, 'r')) {
        return [ word + 'r', word + 'or' ];
      }
      return [];
    }
  },
];
